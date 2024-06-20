import React, {useState, useEffect} from "react";
import { useKeycloak } from '@react-keycloak/web';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountryList from "./CountryList";

function PolicyCreation() {
    
    // Using Object destructuring
    const { keycloak } = useKeycloak()
    

    const [data, setData] =  useState({
        "context": {
            "requestDate": "2021-04-09T11:00:56+02:00",
            "policyStartDate": "2020-04-09T11:00:56+02:00",
            "policyEndDate": "2020-04-09T11:00:56+02:00"
        },
        "policy": {
            "name": "Debray",
            "firstname": "Matthieu",
            "location": "Paris",
            "title": "Architecte",
            "email" : "mf@debray.Com",
            "adress" : {
                "street": "rue de la paix",
                "street2": "bat 2",
                "city": "Paris",
                "zip": "75000",
                "country": "France"
            },
            "product": {
                "name": "Travel Cancellation Full",
                "Description" : "blablbabla",
                "id": 1
            },
            "InsuredPersons": 
                [
                    {
                        "name": "Debray",
                        "firstname": "Matthieu",
                        "location": "Paris",
                        "title": "Architecte",
                        "id": 1
                    },
                    {
                        "name": "Debray",
                        "firstname": "Marion",
                        "location": "Paris",
                        "title": "Maitre des ecoles",
                        "id": 2
                    }
                ],
            "Collections": {
                "code": "CC",
                "id": 1
            }
        }
   });

   const [dataresponse, setDataResponse] =  useState();

    function createEntity(event) {
        event.preventDefault();
        console.log(JSON.stringify(
            data
        ));
        // Add Request Date
        data.context.requestDate = new Date().toISOString();
        // creates entity
        fetch("/api/any", {
            "method": "POST",
            "headers": {
            "Authorization": "Bearer " + keycloak.token,
            "content-type": "application/json",
            "accept": "application/json"
            },
            "body": JSON.stringify(
            data
            )
        })
        .then(response => response.json())
        .then(response => {
            
            setDataResponse(response);
            console.log(dataresponse)
        })
        .catch(err => {

            console.log(err);
        });
    }

  // Fonction pour gérer les changements d'input
  const onChangeHandler = (e) => {
    // Utiliser e.target.id comme chemin d'accès pour la propriété à modifier
    // et e.target.value comme nouvelle valeur
    const path = e.target.id.split('.'); // Divise l'ID pour obtenir le chemin d'accès
    const newData = { ...data }; // Copie de l'objet pour éviter la mutation directe
    let current = newData; // Référence utilisée pour itérer à travers l'objet

    // Itérer à travers le chemin pour trouver l'objet à modifier
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }

    // Modifier la valeur de la propriété
    current[path[path.length - 1]] = e.target.value;

    // Mettre à jour l'état avec le nouvel objet
    setData(newData);
  };

    const [startDate, setStartDate] = useState(
      new Date()
    );

    const [endDate, setEndDate] = useState(
        (new Date()).setDate((new Date()).getDate() + 1)
      );

   function changeStartDate(date){
        setStartDate(date);
        data.context.policyStartDate = date;
    }

    function changeEndDate(date){
        setEndDate(date);
        data.context.policyEndDate = date;
    }
    
return (
    <div>
    
    <div >
       
        <div >
            <h4 class="mb-3">Policy creation</h4>
            {`${
            dataresponse == null ? '' : ' Contract created, ObjectId : ' + dataresponse.$oid
          }`}
            <form class="needs-validation" noValidate="" onSubmit={createEntity}>
            <div class="row g-3">
                <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" onChange={onChangeHandler} id="policy.firstname" placeholder={data.policy.firstname}  required=""/>
                
                <div class="invalid-feedback">
                    Valid first name is required.
                </div>
                </div>

                <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="policy.name" onChange={onChangeHandler} placeholder={data.policy.name} required=""/>
                <div class="invalid-feedback">
                    Valid last name is required.
                </div>
                </div>  

                <div class="col-12">
                <label for="username" class="form-label">Title</label>
                <div class="input-group has-validation">
                    
                    <input type="text" class="form-control" id="policy.title" onChange={onChangeHandler} placeholder={data.policy.title} required=""/>
                <div class="invalid-feedback">
                    Your title is required.
                    </div>
                </div>
                </div>

                <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <div class="input-group">
                    <span class="input-group-text">@</span>
                    <input type="email" class="form-control" id="policy.email"  onChange={onChangeHandler} placeholder={data.policy.email} />
                </div>
                <div class="invalid-feedback">
                    Please enter a valid email address for communication updates.
                </div>
                </div>

                <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="policy.adress.street"  onChange={onChangeHandler} placeholder={data.policy.adress.street} required=""/>
                <div class="invalid-feedback">
                    Please enter your shipping address.
                </div>
                </div>

                <div class="col-12">
                <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                <input type="text" class="form-control" id="policy.adress.street2" onChange={onChangeHandler} placeholder={data.policy.adress.street2} />
                </div>

                <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
               <CountryList />
                <div class="invalid-feedback">
                    Please select a valid country.
                </div>
                </div>

                <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                </select>
                <div class="invalid-feedback">
                    Please provide a valid state.
                </div>
                </div>

                <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="policy.adress.zip" onChange={onChangeHandler} placeholder={data.policy.adress.zip} required=""/>
                <div class="invalid-feedback">
                    Zip code required.
                </div>
                </div>
            </div>

            <hr class="my-4"/>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address"/>
                <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info"/>
                <label class="form-check-label" for="save-info">Save this information for next time</label>
            </div>

            <hr class="my-4"/>

            <h4 class="mb-3">Policy Date</h4>

            <div class="row gy-3">
                <div class="col-md-6">
                    <div>
                <label for="cc-name" class="form-label">Policy start date</label>
                </div>
                <DatePicker
                    className="react-datepicker-ignore-onclickoutside"
                    selected={startDate}
                    onChange={(date) => changeStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
    
                <div class="invalid-feedback">
                   start date
                </div>
                </div>

                <div class="col-md-6">
                    <div>
                <label for="cc-number" class="form-label">Policy End date</label>
                </div>
                <DatePicker
                    className="react-datepicker-ignore-onclickoutside"
                    selected={endDate}
                    onChange={(date) => changeEndDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            
                <div class="invalid-feedback">
                    end date
                </div>
                </div>
            </div>

            <hr class="my-4"/>

            <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
        </div>
        </div>
        </div>


    );
}

export default PolicyCreation;