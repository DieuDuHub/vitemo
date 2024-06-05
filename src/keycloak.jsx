import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost',
  realm: 'ecommerce',
  clientId: 'mo',
});
const loadData = () => {
  console.log(keycloak.subject);
  if (keycloak.idToken) {
      document.location.href = "?user="+keycloak.idTokenParsed.preferred_username;
      console.log('IDToken');
      console.log(keycloak.idTokenParsed.preferred_username);
      console.log(keycloak.idTokenParsed.email);
      console.log(keycloak.idTokenParsed.name);
      console.log(keycloak.idTokenParsed.given_name);
      console.log(keycloak.idTokenParsed.family_name);
  } else {
      keycloak.loadUserProfile(function() {
          console.log('Account Service');
          console.log(keycloak.profile.username);
          console.log(keycloak.profile.email);
          console.log(keycloak.profile.firstName + ' ' + keycloak.profile.lastName);
          console.log(keycloak.profile.firstName);
          console.log(keycloak.profile.lastName);
      }, function() {
          console.log('Failed to retrieve user details. Please enable claims or account role');
      });
  }
};
const loadFailure =  () => {
   console.log('Failed to load data.  Check console log');
};
const reloadData = () => {
  keycloak.updateToken(10)
          .success(loadData)
          .catch(() => {
              console.log('Failed to load data.  User is logged out.');
          });
}
//keycloak.init({ onLoad: 'login-required' }).then(reloadData);


export default keycloak;