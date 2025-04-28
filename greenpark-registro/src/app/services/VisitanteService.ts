// services/VisitanteService.ts
import visitanteModel from '../models/Visitante';
import { ILoginResponse } from '../types';

class VisitanteService {
    verificarCredenciales(usuario: string, contrasena: string): ILoginResponse {
        // Buscar el visitante en la base de datos
        const visitante = visitanteModel.findByCredentials(usuario, contrasena);
        
        // Si encontramos al visitante, devuelve sus datos, si no, null
        if (visitante) {
            return {
                nombreCompleto: visitante.nombreCompleto,
                numeroBoleto: visitante.numeroBoleto,
                exito: true
            };
        } else {
            return {
                exito: false,
                mensaje: "Usuario o contraseña incorrectos. Por favor, intente nuevamente."
            };
        }
    }
}

// Exportamos el servicio como singleton
export default new VisitanteService();