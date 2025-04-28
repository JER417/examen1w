// app/api/auth/route.ts
import { NextResponse } from 'next/server';
import visitanteController from '../../../app/controllers/VisitanteController';
import { ILoginRequest } from '../../../app/types';

export async function POST(request: Request) {
    try {
        const { usuario, contrasena }: ILoginRequest = await request.json();
        
        // Utilizamos el controlador para verificar las credenciales
        const resultado = visitanteController.iniciarSesion(usuario, contrasena);
        
        return NextResponse.json(resultado);
    } catch (error) {
        console.error('Error en la API de autenticación:', error);
        return NextResponse.json(
            { exito: false, mensaje: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}