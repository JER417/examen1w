// app/page.tsx
'use client';

import { useState, FormEvent } from 'react';
import useVisitanteHandler from '../handlers/VisitanteHandler';
import styles from './page.module.css';

export default function Home() {
  const [usuario, setUsuario] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const { handleLogin, error, isLoading } = useVisitanteHandler();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(usuario, contrasena);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Bienvenido a GreenPark</h1>
        <h2>Registro de Visitantes</h2>
        
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingrese su usuario"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.btnLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Ingresar'}
          </button>
          
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
}