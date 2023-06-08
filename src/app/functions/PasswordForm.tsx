// PasswordForm.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import data from '../data/data.json';

export default function PasswordForm() {
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPassword(e.target.value)

  
    // Verifique se a chave de acesso está correta
    const user = data.usuarios.find((usuario) => usuario.chaveAcesso === password);
    if (user) {
      // Redirecione para a página principal se a chave de acesso estiver correta
      localStorage.setItem('password', password);
      console.log(user);
      console.log(password);
    } else {
      // Exiba uma mensagem de erro ou tome outra ação apropriada
      alert('Chave de acesso incorreta. Tente novamente.');
    }
  };
  

  return (
    <div>
      <h2>Solicitação de Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
