import prisma from "../config/database.js";
import { conflictError } from "../errors/conflict-error.js";
import { notFoundError } from "../errors/not-found-errors.js";
import { SeatEntity } from "../protocols/protocol.js";


async function getAllSeats() {
    return prisma.seats.findMany();
}
async function updateOnlySeat(seat: SeatEntity) {
    const userExists = await prisma.users.findFirst(
        {
            where: {
                name: seat.owner
            }
        }
    )

    if (!userExists) {
        throw notFoundError();
    }

    const seatStatus = await prisma.seats.findFirst({
        where: {
            id: seat.id
        }
    })

    if (seatStatus.isAvaliable === false) {
        throw conflictError();
    }

    return prisma.seats.update({
        where: {
            id: seat.id,
        },
        data: {
            id: seat.id,
            isAvaliable: seat.isAvaliable,
            owner: seat.owner
        },
    })
}


export { updateOnlySeat, getAllSeats }