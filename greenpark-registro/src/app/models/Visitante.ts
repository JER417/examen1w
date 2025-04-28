// models/Visitante.ts
import { IVisitante } from '../types';

// Base de datos simulada de visitantes
const visitantesDB: IVisitante[] = [
    {
        usuario: "alejandra.m",
        contrasena: "verde123",
        nombreCompleto: "Alejandra Morales",
        numeroBoleto: "00123"
    },
    {
        usuario: "david.p",
        contrasena: "bosque456",
        nombreCompleto: "David Pérez",
        numeroBoleto: "00124"
    },
    {
        usuario: "lucia.r",
        contrasena: "eco789",
        nombreCompleto: "Lucía Ramírez",
        numeroBoleto: "00125"
    }
];

class Visitante {
    private visitantes: IVisitante[];

    constructor() {
        this.visitantes = visitantesDB;
    }

    getAll(): IVisitante[] {
        return this.visitantes;
    }

    findByCredentials(usuario: string, contrasena: string): IVisitante | undefined {
        return this.visitantes.find(v => 
            v.usuario === usuario && v.contrasena === contrasena);
    }
}

// Exportamos la clase Visitante como singleton
export default new Visitante();