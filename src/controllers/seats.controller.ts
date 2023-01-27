import {Request, Response} from 'express';
import {updateOnlySeat, getAllSeats} from "../repositories/seats.repository.js";
import {SeatEntity, NewSeat, Seat} from "../protocols/protocol.js"



async function getSeats(req: Request, res: Response){
      const resultado = await getAllSeats();

    return res.send(resultado)
}


async function updateSeat(req: Request, res: Response): Promise<void> {
    const seatStatus = req.body as SeatEntity

    const toUpdateUser = await updateOnlySeat(seatStatus);

    res.status(201).send(`Seu lugar foi reservado ${toUpdateUser}`);
}


export { getSeats, updateSeat};

// CREATE TABLE users (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"name" TEXT NOT NULL UNIQUE
// );


// CREATE TABLE orders (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"userId" integer NOT NULL REFERENCES users(id),
// 	"seatId" integer NOT NULL REFERENCES seats(id)
// );



// CREATE TABLE seats (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"isAvaliable" boolean NOT NULL DEFAULT true,
// 	"owner" TEXT DEFAULT 'NULL'
// );