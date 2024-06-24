import { useKeycloak } from '@react-keycloak/web'

function Menu(props) {

     // Using Object destructuring
  //const { keycloak, initialized } = useKeycloak()
  const { keycloak } = useKeycloak()
  console.log(keycloak);

  const keylogin = () => {
    keycloak.login();
  }
  
    return (
        <div>

          <button class="w-100 btn btn-primary btn-lg" onClick={keylogin}>Login</button>
          {`${props.name} is ${
            !keycloak.authenticated ? 'NOT ' : ''
          }authenticated`}
    
          {!!keycloak.authenticated && (
            <p class="btn btn-outline-primary " type="button" onClick={() => keycloak.logout()}>
              Logout
            </p>
          )}
        </div>
    )
}

export default Menu