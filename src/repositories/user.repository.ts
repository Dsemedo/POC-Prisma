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


async function toDeleteUser(id: number) {
    return prisma.users.delete({
        where: {
            id: id
        }
    })

}


export {insertUser, upsert, getAllUsers, toDeleteUser}