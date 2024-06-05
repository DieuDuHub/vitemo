import React, { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

function LoginForm() {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloak = new Keycloak('/conf/keycloak.json');

    keycloak.init({ onLoad: 'login-required' })
      .then(authenticated => {
        setKeycloak(keycloak);
        setAuthenticated(authenticated);
      });
  }, []);

  if (keycloak) {
    if (authenticated) return (<p>Authentifié</p>);
    else return (<p>Impossible de s'authentifier</p>);
  }
  return (<p>Chargement...</p>);

  /*const fetchApi = async () => {
    const response = await fetch('http://localhost/api', {
      headers: {
        'Authorization': 'Bearer ' + keycloak.token,
      },
    });

    const data = await response.json();
    console.log(data);
  };
*/
}

export default LoginForm;