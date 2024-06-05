import React, {useState, useEffect} from "react";
import { useKeycloak } from '@react-keycloak/web';
import Policy from './components/policy';
function Policies() {

    // Using Object destructuring
    const { keycloak } = useKeycloak()
    

    const [data, setData] = useState(null);
    console.log("policies token: " + keycloak.token);

    useEffect(() => {
        fetch('/api/anys?date=2020-04-09T09:00:56Z&page=1&limit=10',
        {
            headers: {
        // "Accept": "application/json",
            //"Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + keycloak.token
        }})
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erreur:', error));
        }, [keycloak.token]);
  
    return (
        <div>
        {data && (
            <div>
                {data.length}
            {data.map((item, index) => (
              <Policy policy={item}/>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Policies;