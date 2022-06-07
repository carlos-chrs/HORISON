import { PersistentUnorderedMap, context, PersistentMap, u128 } from "near-sdk-as";
 @nearBindgen
export class Person{
    // Atributtes
    id: string;
    name: string;
    email: string;
    telefone: string;
    curp: string;
    numero_cuenta: string;
    price: u128;

    public static fromPayload(payload: Person): Person {
        const person = new Person(); //New Persona
        //Load the values to the person
        person.id=payload.id;
        person.name=payload.name;
        person.email=payload.email;
        person.telefone=payload.telefone;
        person.curp=payload.curp;
        person.numero_cuenta=person.numero_cuenta;
        person.price=person;
    
        //return the person
        return ;
    }
}
@nearBindgen
export class Curso{ //Class Curso
    //Attributtes
    id:string;
    nombre: string;
    clasificacion: string;


    // Method to load the values
    public  static loadcurso(loadcurso: Curso): Curso{
        let Curso=new curso();
        Curso.id=loadcurso.id;
       
        //Return a Object Curso
        return Curso;
    }
}

    @nearBindgen
export class student{ //Class student
    //Attributtes
    id:string;
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    email: string;
    numeroCuenta: string;



    // Method to load the values
    public  static loadstudent(loadstudent: student): student{
        let student=new student();
        student.id=loadstudent.id;
       
        //Return a Object student
        return student;
    }
}
@nearBindgen
export class profesor{ //Class profesor
    //Attributtes
    id:string;
    name: string;
    apellidoP: string;
    apellidoM: string;
    email: string;
    numeroCuenta: string;
    
    // Method to load the values
    public  static loadprofesor(loadprofesor: profesor): profesor{
        let profesor=new profesor ();
        profesor.id=loadprofesor.id;
        profesor.name=loadprofesor.name;
       
        //Return a Object profesor
        return profesor;
    }
}


// export const productsStorage = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");

// export const clientsStorage = new PersistentUnorderedMap<string, Client>("LISTED_CLIENTS");