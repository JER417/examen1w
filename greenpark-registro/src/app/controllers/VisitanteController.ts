// controllers/VisitanteController.ts
import visitanteService from '../services/VisitanteService';
import { ILoginResponse } from '../types';

class VisitanteController {
    iniciarSesion(usuario: string, contrasena: string): ILoginResponse {
        // Validación básica
        if (!usuario || !contrasena) {
            return {
                exito: false,
                mensaje: "Por favor, complete todos los campos."
            };
        }

        // Llamamos al servicio para verificar credenciales
        return visitanteService.verificarCredenciales(usuario, contrasena);
    }
}

// Exportamos el controlador como singleton
export default new VisitanteController();