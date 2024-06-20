import React, {useState, useEffect} from "react";

function CountryList() {
    const [data, setData] = useState(null);
  
    console.log("CountryList");
    useEffect(() => {
      fetch('/referential/countries')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Erreur:', error));
    }, []);
  
    return (
        <div>
        {data && (
          <select>
            {data.map((item, index) => (
              <option key={index} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
  
  export default CountryList;