import {Request, Response} from 'express';
import {  NewUser } from '../protocols/protocol.js';
import { getAllUsers, toDeleteUser, upsert } from '../repositories/user.repository.js';

async function getUser(req: Request, res: Response){
    
    const resultado = await getAllUsers();

    return res.send(resultado)
}

 async function postUser(req: Request, res: Response): Promise<void> {
    const newUser = req.body as NewUser;

    console.log(req.body);

    await upsert(newUser);

    res.status(201).send(`User inserted!`);
}


async function deleteUser(req: Request, res: Response) {
    const {id} = req.params;

    try{        
        await toDeleteUser(Number(id));

       res.status(200).send(`User deleted with success!`)

    }catch(err){
        console.log(err);
    }
}

export { getUser, postUser, deleteUser };





// import prisma from "../src/config/database.js";

// async function main(){
//     await prisma.users.createMany({
// data: [
//     {"name": "Douglas"},
//     {"name": "Nathan"},
//     {"name": "Fernando"}
// ]
//     })

//     await prisma.seats.createMany({
//         data: [
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//             {"isAvaliable": true},
//         ]
//             })
// }

// main()
// .then(() => console.log("Registro feito com sucesso"))
// .catch(e => {
//     console.error(e);
//     process.exit(1);
// })
// .finally(async () => {
// await prisma.$disconnect();
// })