import {Request, Response} from 'express';
import { UserEntity, User, NewUser } from '../protocols/protocol.js';
import { getAllUsers, insertUser, upsert } from '../repositories/user.repository.js';

async function getUser(req: Request, res: Response){
    
    const resultado = await getAllUsers();

    return res.send(resultado)
}

 async function postUser(req: Request, res: Response): Promise<void> {
    const newUser = req.body as NewUser;

    console.log(req.body);


    const insertedUser = await upsert(newUser);

    res.status(201).send(`User inserido ${insertedUser}`);
}

// async function updateUser(req: Request, res: Response) {
//     const {id} = req.params;

//     try{
//        await toUpdateUser(id, true);

//        res.sendStatus(204);
//     }catch(err){
//         res.send(err.message);
//     }
// }

async function deleteUser(req: Request, res: Response) {
    const {id} = req.params;

    try{
    //    await connectionDb.query(`DELETE FROM users WHERE id=$1`, [id]);

       res.status(200).send("Usuario deletado com sucesso!")

    }catch(err){
        console.log(err);
    }
}

async function getUsersWhoBeted(req: Request, res: Response){
    try{
        // const {rows} = await connectionDb.query('SELECT * FROM users WHERE beted=$1', [true]);
     
        // res.status(200).send(usersWhoBeted);
     }catch(err){
     console.log(err);
     res.sendStatus(409);
     }
}


export { getUser, postUser, deleteUser, getUsersWhoBeted };





