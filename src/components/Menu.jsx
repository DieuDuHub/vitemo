import { useKeycloak } from '@react-keycloak/web'

function Menu(props) {

     // Using Object destructuring
  const { keycloak, initialized } = useKeycloak()
  console.log(keycloak);
  
    return (
        <div>
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