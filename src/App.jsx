import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DcxCombo from './dcxCombo'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import Secured from './components/secured';
import Header from './components/Header'
import Policies from './components/policies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ReactKeycloakProvider 
            //initOptions={{ onLoad: 'login-required' }}
            authClient={keycloak}
            //onEvent={eventLogger}
            //onTokens={tokenLogger}
            >
    <Header />
    <div style={{
    paddingTop: '50px'}}>
     <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<DcxCombo />} />
         <Route path="/secured" element={<Secured />} />
         <Route path="/search" element={<Policies />} />
       </Routes>
     </BrowserRouter>
   </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      </ReactKeycloakProvider>        
    </>
  )
}

export default App
