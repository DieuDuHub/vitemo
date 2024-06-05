import { useKeycloak } from '@react-keycloak/web'

function Menu(props) {

     // Using Object destructuring
  const { keycloak, initialized } = useKeycloak()
  console.log(keycloak);
  
    return (
        <div>
          <div>{`User is ${
            !keycloak.authenticated ? 'NOT ' : ''
          }authenticated`}</div>
    
          {!!keycloak.authenticated && (
            <button type="button" onClick={() => keycloak.logout()}>
              Logout
            </button>
          )}
          <div>
              <h1>Menu</h1>
              <ul>
                  <li>Hello , {props.name}</li>
              </ul>   
          </div>
        </div>
    )
}

export default Menu