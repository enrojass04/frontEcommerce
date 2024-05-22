import React, { useState } from 'react';
import * as RegisterService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name_user, setName_user] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const changeName = (name) => {
    setName_user(name.target.value);
  };
  const changeEmail = (email) => {
    setEmail(email.target.value);
  };
  const changePassword = (password) => {
    setPassword(password.target.value);
  };

  const signUpUser = async (event) => {
    event.preventDefault();
    try {
      let data = { name_user, email, password };
      const res = await RegisterService.registerServive(data);
      if (!res.ok) {
        throw new Error('Failed to create user');
      } else {
        setMessage('Account created successfully');
        setName_user(''); // Restablecer nombre
        setEmail(''); // Restablecer email
        setPassword(''); // Restablecer contraseña
        setTimeout(() => {
          setMessage('');
          navigate('/login');
        }, 2000); // Redirigir después de 2 segundos
      }
    } catch (error) {
      setMessage(error.message);
      console.error(error);
    }
  };

  return (
    <div className="columna">
      <h2>Registro</h2>
      {message && <p className="text-center mt-3">{message}</p>}
      <form onSubmit={signUpUser}>
        <div className="campo">
          <label htmlFor="nombre_registro">Nombre:</label>
          <input
            type="text"
            id="nombre_registro"
            name="nombre_registro"
            required
            value={name_user}
            onChange={changeName}
          />
        </div>
        <div className="campo">
          <label htmlFor="email_registro">Correo electrónico:</label>
          <input
            type="email"
            id="email_registro"
            name="email_registro"
            required
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="campo">
          <label htmlFor="password_registro">Contraseña:</label>
          <input
            type="password"
            id="password_registro"
            name="password_registro"
            required
            value={password}
            onChange={changePassword}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
