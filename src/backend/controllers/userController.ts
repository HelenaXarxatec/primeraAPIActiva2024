import { deleteUserById, findUserById, getUsers, saveNewUser } from "../models/userModel.js";
import { User } from "../types/User.js";


export async function newUser(user: User):Promise<string>{
    try {
        const result = await saveNewUser(user);
        return result;
    } catch (error:any){//TODO: quitar el any
        if (error.code === "23505") {
            const columnMatch = error.detail.match(/Key \((.*?)\)=/);
            const columnName = columnMatch ? columnMatch[1] : 'campo';
            return `El ${columnName} ya existe en la base de datos`;
        }
        return error;
    }
      
}

export async function getAllUsers():Promise<string>{
    const result = await getUsers();
    return result;
}

export async function getUser(id:number):Promise<string>{
    const result = await findUserById(id);
    return result;
}

export async function deleteUser(id:number):Promise<string>{
    const result = await deleteUserById(id);
    return result;
}