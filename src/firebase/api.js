import { Db} from '../config';

//Crud

//Crear
export async function createPlant(data){
    return await Db.collection(process.env.REACT_APP_DATABASE_ID_PLANTS).doc().set(data);
}

//Actualizar
export async function updatePlant(data, id){
    return await Db.collection(process.env.REACT_APP_DATABASE_ID_PLANTS).doc(id).update(data);
}

//Borrar
export async function deletePlant(id){
    return await Db.collection(process.env.REACT_APP_DATABASE_ID_PLANTS).doc(id).delete();
}

