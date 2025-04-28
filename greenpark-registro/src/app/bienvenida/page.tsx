// app/bienvenida/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function Bienvenida() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const nombre = searchParams.get('nombre');
  const boleto = searchParams.get('boleto');
  
  // Si no hay nombre o boleto, redirigir a la página principal
  useEffect(() => {
    if (!nombre || !boleto) {
      router.push('/');
    }
  }, [nombre, boleto, router]);

  // Si aún no se ha redirigido pero no hay datos, muestra cargando
  if (!nombre || !boleto) {
    return <div className={styles.container}>Verificando datos...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.welcomeBox}>
        <h1>GreenPark</h1>
        <div className={styles.welcomeMessage}>
          Bienvenido, {nombre}, disfruta tu experiencia en GreenPark.
        </div>
        <div className={styles.ticketDetails}>
          Número de boleto: {boleto}
        </div>
        <Link href="/" className={styles.btnBack}>
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
}