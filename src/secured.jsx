import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import React from 'react';
import Menu from './menu';
import Policies from './policies';


function Secured() {
    return (
        <ReactKeycloakProvider 
            initOptions={{ onLoad: 'login-required' }}
            authClient={keycloak}
            //onEvent={eventLogger}
            //onTokens={tokenLogger}
            >
                
            <Menu name="Mat" />
            <Policies />
      
        </ReactKeycloakProvider>        
    )
}

export default Secured