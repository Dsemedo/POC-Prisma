import prisma from "../config/database.js";
import { NewSeat} from "../protocols/protocol.js";

async function getAllOrders() {
    return prisma.orders.findMany();
}

async function createOrders(seat: NewSeat) {
    const userExists = await prisma.users.findFirst(
        {   where: {
                name: seat.owner
            }
        }
    )

    console.log(userExists);

    if(userExists !== null){
        return prisma.orders.create({
            data: {
                seatId: seat.id,
                buyerName: seat.owner
        },
    })}else{
        return console.log("Esse usuário não existe")
    }
}


export {getAllOrders, createOrders}