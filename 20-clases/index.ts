import express, { Express, Response, Request } from 'express';

let nombre: string = 'Peter';

const app: Express = express();

app.get('', (req: Request, res: Response) => {})

console.log( `Mi nombre es ${nombre}` );

class Persona{

    public nombre: string;
    public apellido: string;
    public edad: number | string;


    constructor( nombre: string, apellido: string, edad: number | string  ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }


    public imprimirDatos(){
        return `Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`;
    }
} 



const persona = new Persona( 'Peter', 'Quill', '35' );


console.log(persona.imprimirDatos());


export default Persona;

