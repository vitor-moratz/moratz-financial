import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação (simulação simples)
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="App">
      <h1>Tela de Login</h1>
      <div>
        <label>Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
