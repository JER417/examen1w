// types/index.ts

// Interfaces para el modelo de datos
export interface IVisitante {
    usuario: string;
    contrasena: string;
    nombreCompleto: string;
    numeroBoleto: string;
  }
  
  // Interfaces para respuestas
  export interface ILoginResponse {
    exito: boolean;
    mensaje?: string;
    nombreCompleto?: string;
    numeroBoleto?: string;
  }
  
  // Interfaces para solicitudes
  export interface ILoginRequest {
    usuario: string;
    contrasena: string;
  }