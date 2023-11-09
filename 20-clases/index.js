"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = 'Peter';
console.log("Mi nombre es ".concat(nombre));
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.imprimirDatos = function () {
        return "Nombre: ".concat(this.nombre, " ").concat(this.apellido, ", Edad: ").concat(this.edad);
    };
    return Persona;
}());
var persona = new Persona('Peter', 'Quill', '35');
console.log(persona.imprimirDatos());
exports.default = Persona;
