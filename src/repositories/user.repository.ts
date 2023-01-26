import prisma from "../config/database.js";
import { NewUser, User, UserEntity } from "../protocols/protocol.js";

 async function insertUser(user: User) {
    return prisma.users.create({
        data: user  
    })
};

async function upsert(user: NewUser) {
    return prisma.users.upsert({
        where: {
            id: user.id || 0,
        },
        create: user as User,
        update: user,
    })
}

 async function toUpdateUser(id: string, status: boolean ){
    return [];
    
}

async function toDeleteUser(id: string) {
    // return await connectionDb.query(`DELETE FROM users WHERE id=$1`, [id]);
}

async function getAllUsers() {
    return prisma.users.findMany();
}


async function getOnlyUsersWhoBeted() {
    // return await connectionDb.query('SELECT * FROM users WHERE beted=$1', [true]);
}


export {insertUser, upsert,getAllUsers, getOnlyUsersWhoBeted, toDeleteUser}