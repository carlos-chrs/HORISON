import {  u128, context, PersistentVector } from "near-sdk-as";

export class Curso{
    id: String;
    Nombre : String; 
    clasificacion: String;   
    constructor( id: String,  Nombre: String, clasificacion:String){
        this.id = id;
        this.Nombre = Nombre;
        this.clasificacion=clasificacion;
     }
     
}

export class persona{
    Id: String;
    Nombre : String; 
    
    constructor( Id: String,  Nombre: String, clasificacion:String){
        this.Id = Id;
        this.Nombre = Nombre;
      
     }
    } 

    
    export class Asesor{
        Id: String;
        Nombre : String; 
        
        constructor( Id: String,  Nombre: String, clasificacion:String){
            this.Id = Id;
            this.Nombre = Nombre;
         }
        } 

        export class Estudiante{
            Id: String;
            Nombre : String; 
            
            constructor( Id: String,  Nombre: String, clasificacion:String){
                this.Id = Id;
                this.Nombre = Nombre;
             }
            }

    export const Todos_cursos = new  PersistentVector <Curso> ("v");
    export const Tabla_personas = new  PersistentVector <persona> ("v");
    export const todos_Asesor = new  PersistentVector <Asesor> ("v");
    export const todos_estudiante = new  PersistentVector <Estudiante> ("v");