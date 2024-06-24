import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../keycloak';
import React from 'react';
import Menu from './Menu';
import Policies from './policies';
import PolicyCreation from './PolicyCreation'

           //<Policies />
function Secured() {
    return (

        
            <div class="row g-5">

                <div class="col-md-7 col-lg-8">
                    <PolicyCreation />
                </div>
            </div>
  
    )
}

export default Secured