import React, {useState, useEffect} from "react";

function DcxCombo() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('/referential/dcx')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Erreur:', error));
    }, []);
  
    return (
        <div>
        {data && (
          <select>
            {data.map((item, index) => (
              <option key={index} value={item.bp}>
                {item.bu + ' - ' + item.bp + ' - ' + item.sc}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  }
  
  export default DcxCombo;