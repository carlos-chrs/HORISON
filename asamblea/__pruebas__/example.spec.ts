import { persona, Asesor,Estudiante,Curso } from "../model";
import { setPersona,setAsesor,setEstudiante,setCurso } from "..";
/*Asignacion para crear persona */
const IdP = '0';
const NombreP = 'matra';
/*Asignacion para crear una asesor */
const IdA='0';
const NombreA='jose'
/*Asignacion para crear estudiante */
const IdE='0';
const NombreE='andre'
/*Asignacion para crear curso */
const idC='0';
const NombreC='algebra';
const clasificacion='matematicas';

let NuevoEstudiante = new Estudiante(IdE,NombreE);
let NuevoPersona = new persona(IdP,NombreP);
let NuevoAsesor = new Asesor(IdA,NombreA);
let NuevoCurso = new Curso(idC,NombreC,clasificacion);


describe("Crear  persona si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setPersona('0','matra')).toStrictEqual(NuevoPersona);
  })
})

describe("Generar Asesor si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setAsesor('0','jose')).toStrictEqual(NuevoAsesor);
  })
})

describe("Generar estudiante si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setEstudiante('0','andre')).toStrictEqual(NuevoEstudiante);
  })
})
describe("Generar Curso si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setCurso('0','algebra','matematicas')).toStrictEqual(NuevoCurso);
  })
})
