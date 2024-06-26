import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../keycloak';
import React from 'react';
import Menu from './Menu';
import Policies from './policies';
import PolicyCreation from './PolicyCreation'

           //<Policies />
function Secured() {
    return (

        
            <div>
                    <PolicyCreation />
                </div>
  
    )
}

export default Secured