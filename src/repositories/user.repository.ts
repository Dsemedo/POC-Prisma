import prisma from "../config/database.js";
import { NewUser, User } from "../protocols/protocol.js";


async function getAllUsers() {
    return prisma.users.findMany();
}

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


async function toDeleteUser(id: string) {
    // return await connectionDb.query(`DELETE FROM users WHERE id=$1`, [id]);
}


export {insertUser, upsert, getAllUsers, toDeleteUser}