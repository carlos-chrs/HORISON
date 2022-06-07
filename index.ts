import { Person } from './model';
import { profesor } from './model';
import { student } from './model';
import { Curso } from './model';
import { context, ContractPromiseBatch } from "near-sdk-as";
 




// @Param productID: Is the ID of product that you want to buy
export function buyPerson(personctId: string): void {
    const Person= getPerson(PersonId); //Get the product
    if (product == null) { //Verifica si el producto existe
        throw new Error("Producto No Encontrado"); //Message Error
    }
    if (personctId.price.toString() != context.attachedDeposit.toString()) { //Verify if the Pay is correct //Verifica que el pago sea correcto.
        throw new Error("Error al procesar el pago, intenta más tarde");
    }
    //En caso de que no se presenten los errores anterioes, entonces: 
    ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit); //Transfer the Coins-Nears
    productsStorage.set(product.id, product); 
}

//Method to add a product 
//Método para añadir un curso
// @Param producto: Is a reference of the product to add
export function addCurso(curso: Curso): void {
    let storedCurso= curso.id(curso.id); //Serch the product in the Map //Buscar el producto en el mapa.
    if (storeCurso !== null) { //If is different to NULL the product is ready  //Si es diferente a NULL, el producto está listo.
        throw new Error(`El ID: ${Curso.id} ya existe en nuestro inventario`); //Mensaje de confirmación
    } 
    CursoStorage.set(Curso.id, curso.fromPayload(curso)); //Will add the Producto to the Map of products  //Se añadirá el producto al mapa de productos
}

// Method to get all Products
export function getAllCurso(): Array<Curso> {
    return Curso.values(); //Return his values- in the front we will inject the values
}

// @Param ID: Is the ID of curso to find
export function  get(id: string): Curso| null {
    return Curso.loadcurso(id);
}


// METHOD estudiante
// @Param ID: Is the ID of Client to find
export function getStudents(id: string): Curso | null {
    return StudentStorage.get(id);
}

//Métthod to add a profesor
export function addProfesor(client: student): void {
    let storedstudent = studentStorage.get(client.id); //Serch the client in the Map 
    if (storedCstudent !== null) { //If is different to NULL the Clent is ready
        throw new Error(`El ID: ${student.id} ya existe en nuestro inventario`); //Message
    } 
 studentStorage.set(student.id,student.loadstudent(student)); //Will add the Producto to the Map of curso
}
