import { logging, PersistentUnorderedMap, u128,PersistentVector} from "near-sdk-as";
import { persona, Tabla_personas } from "./model";
import { Curso, Todos_cursos} from "./model";
import {Asesor, todos_Asesor } from "./model";
import {Estudiante, todos_estudiante } from "./model";
/* Variables axuxiliares para recorrer el array*/
const AuxPersona = Tabla_personas.length;
const AuxCurso = Todos_cursos.length;
const AuxAsesor = todos_Asesor.length;
const AuxEstudiante= todos_estudiante.length;

export function setPersona(Id: String, Nombre :String ): persona {
    const NewPers = new persona (Id,Nombre);
    Tabla_personas.push(NewPers);
    logging.log("persona agregado");
    return NewPers;
}

export function getpersona(): persona []{
    const data = new Array<persona>(AuxPersona);
    for(let i=0;i<AuxPersona;i++){
        data[i]=Tabla_personas[i];
        logging.log(i);
    }
    return data;
}

export function buscarPersona(SearchU: String): persona{
    const data = new Array<persona>(AuxPersona);
    for(let i=0;i<AuxPersona;i++){
        data[i]=Tabla_personas[i];
        if(data[i].Nombre==SearchU){
            return Tabla_personas[i];
        }    
    }
    logging.log("No existe la persona")
    return Tabla_personas[AuxPersona+2];

}
export function setAsesor(Id: String ,Nombre ): Asesor{
    const NewAsesor = new Asesor (Id,Nombre,);
    todos_Asesor.push(NewAsesor);
    logging.log(" asesor generada con exito ");
    return NewAsesor;
}

export function getAsesor(): Asesor[]{
    const data = new Array<Asesor>(AuxAsesor);
    for(let i=0;i<AuxAsesor;i++){
        data[i]=todos_Asesor[i];
        logging.log(i);
    }
    return data;
}
export function buscarAsesor(SearchP: String): Asesor{
    const data = new Array<Asesor>(AuxAsesor);
    for(let i=0;i<AuxAsesor;i++){
        data[i]=todos_Asesor[i];
        if(data[i].Id==SearchP){
            return todos_Asesor[i];
        }    
    }
    logging.log("No existe el Asesor")
    return todos_Asesor[AuxAsesor+2];
}

export function setEstudiante(Id: String,Nombre:String):Estudiante{
    const NewEstudiante = new Estudiante(Id,Nombre);
    todos_estudiante.push(NewEstudiante);
    logging.log("estudiante generada");
    return NewEstudiante;
} 

export function getEstudiante(): Estudiante[]{
    const data = new Array<Estudiante>(AuxEstudiante);
    for(let i=0;i<AuxEstudiante;i++){
        data[i]=todos_estudiante[i];
        logging.log(i);
    }
    return data;
}
export function buscarEstudiante(SearchV: String): Estudiante{
    const data = new Array<Estudiante>(AuxEstudiante);
    for(let i=0;i<AuxEstudiante;i++){
        data[i]=todos_estudiante[i];
        if(data[i].Id==SearchV){
            return todos_estudiante[i];
        }    
    }
    logging.log("No existe el usuario")
    return todos_estudiante[AuxEstudiante+2];
}

export function setCurso(Id: String,Nombre:String,clasificacion:String):Curso{
    const NewCurso = new Curso(Id,Nombre,clasificacion);
    Todos_cursos.push(NewCurso);
    logging.log(" curso agregada");
    return NewCurso;
} 

export function getCurso(): Curso[]{
    const data = new Array<Curso>(AuxCurso);
    for(let i=0;i<AuxCurso;i++){
        data[i]=Todos_cursos[i];
        logging.log(i);
    }
    return data;
}
export function buscarCurso(SearchV: String): Curso{
    const data = new Array<Curso>(AuxCurso);
    for(let i=0;i<AuxCurso;i++){
        data[i]=Todos_cursos[i];
        if(data[i].id==SearchV){
            return Todos_cursos[i];
        }    
    }
    logging.log("No existe el usuario")
    return Todos_cursos[AuxCurso+2];
}
