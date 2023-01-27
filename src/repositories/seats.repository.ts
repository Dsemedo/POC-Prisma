import prisma from "../config/database.js";
import { SeatEntity, NewSeat } from "../protocols/protocol.js";


async function getAllSeats() {
    return prisma.seats.findMany();
}

async function updateOnlySeat(seat: SeatEntity) {
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


export {updateOnlySeat, getAllSeats}