import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../keycloak';
import React from 'react';
import Menu from './Menu';
import Policies from './policies';
import PolicyCreation from './PolicyCreation'

           //<Policies />
function Secured() {
    return (
        <ReactKeycloakProvider 
            initOptions={{ onLoad: 'login-required' }}
            authClient={keycloak}
            //onEvent={eventLogger}
            //onTokens={tokenLogger}
            >
            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <Menu name="Mat"/>
                </div>
                <div class="col-md-7 col-lg-8">
                    <PolicyCreation />
                </div>
            </div>
        </ReactKeycloakProvider>        
    )
}

export default Secured