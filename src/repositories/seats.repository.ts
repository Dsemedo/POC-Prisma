import prisma from "../config/database.js";
import { SeatEntity } from "../protocols/protocol.js";


async function getAllSeats() {
    return prisma.seats.findMany();
}

async function compareNameOwner(seat: SeatEntity) {
    const userExists = prisma.users.findFirst(
        {   where: {
                name: seat.owner
            }
        }
    )

    return userExists;
}

async function updateOnlySeat(seat: SeatEntity) {
    const userExists = await prisma.users.findFirst(
        {   where: {
                name: seat.owner
            }
        }
    )

    console.log(userExists);

    if(userExists === null){
        return console.log("Este usuário não existe");
    }else{
        return prisma.seats.update({
            where:{
                id: seat.id,
            },
            data: {
                id: seat.id,
                isAvaliable: seat.isAvaliable,
                owner: seat.owner
            },
        })
    }
}


export {updateOnlySeat, getAllSeats, compareNameOwner}