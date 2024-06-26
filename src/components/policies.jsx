import React, {useState, useEffect} from "react";
import { useKeycloak } from '@react-keycloak/web';
import Policy from './policy';
function Policies() {

    // Using Object destructuring
    const { keycloak } = useKeycloak()
    

    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [nbpage, setNbPage] = useState(null);

    console.log("policies token: " + keycloak.token);

    function setCurrentPageManual(event) {
      event.preventDefault();
      console.log("setCurrentPage: " + event.target.text);
      setCurrentPage(event.target.text);
    }

  useEffect(() => {
    fetch('/api/countanys?date=2020-04-09T09:00:56Z',
    { 
      headers: {
      // "Accept": "application/json",
          //"Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + keycloak.token
      }})
          .then(response => response.json())
          .then(data => {
            var p = [];
            for (let i =0;i< data.result; i+=10) {
              p.push(i/10  + 1);
            } 
            setNbPage(p)
          }
          )
          .catch(error => console.error('Erreur:', error));
  }, [keycloak.token]);

    useEffect(() => {
        fetch('/api/anys?date=2020-04-09T09:00:56Z&page='+currentPage+'&limit=10',
        {
            headers: {
        // "Accept": "application/json",
            //"Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + keycloak.token
        }})
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erreur:', error));
        }, [keycloak.token,currentPage]);
  
    return (
       <div>
          <nav aria-label="Page navigation example">
          <ul className="pagination">
            {nbpage && (nbpage.map((item, index) => (
              <li className="page-item" key={index}><a className="page-link" onClick={setCurrentPageManual}>{item}</a></li>
            )))}
          </ul>
        </nav>
        <div className="container">

        {data && (
            <div  className="row row-cols-1 row-cols-md-3 mb-3 text-center"  >
            
            {data.map((item, index) => (
              <div className="col" key={index}>
                <Policy policy={item} />
                <br/>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    );
  }
  
  export default Policies;