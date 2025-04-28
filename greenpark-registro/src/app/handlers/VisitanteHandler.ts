// handlers/VisitanteHandler.ts
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ILoginResponse } from '../types';

export default function useVisitanteHandler() {
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async (usuario: string, contrasena: string): Promise<void> => {
        try {
            setIsLoading(true);
            setError('');
            
            // Realizamos la petición a nuestra API
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario, contrasena }),
            });
            
            const data: ILoginResponse = await response.json();
            
            if (data.exito && data.nombreCompleto && data.numeroBoleto) {
                // Redireccionamos a la página de bienvenida con los datos del visitante
                router.push(`/bienvenida?nombre=${encodeURIComponent(data.nombreCompleto)}&boleto=${encodeURIComponent(data.numeroBoleto)}`);
            } else {
                setError(data.mensaje || 'Error desconocido al iniciar sesión');
            }
        } catch (error) {
            setError('Error al conectar con el servidor. Intente nuevamente.');
            console.error('Error al iniciar sesión:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleLogin,
        error,
        isLoading
    };
}