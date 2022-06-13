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
