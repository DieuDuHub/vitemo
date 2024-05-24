import React, { useState } from 'react';

function LoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique de connexion
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Vous êtes connecté</p>
      ) : (
        <button onClick={handleLogin}>Se connecter</button>
      )}
    </div>
  );
}

export default LoginComponent;