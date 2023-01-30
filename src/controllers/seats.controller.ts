import { Request, Response } from 'express';
import { updateOnlySeat, getAllSeats } from "../repositories/seats.repository.js";
import { createOrders } from '../repositories/orders.repository.js';
import { SeatEntity } from "../protocols/protocol.js"
import { notFoundError } from '../errors/not-found-errors.js';



async function getSeats(req: Request, res: Response) {
  const resultado = await getAllSeats();

  return res.send(resultado)
}


async function updateSeat(req: Request, res: Response) {
  const seatStatus = req.body as SeatEntity

  try {
    await updateOnlySeat(seatStatus);
    await createOrders(seatStatus);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    if (e.name === "ConflictError") {
      res.sendStatus(409)
    }
    if (e.name === "NotFoundError") {
      res.sendStatus(404);
    }
  }

}

// async function getOrders(req: Request, res: Response){
//     const resultado = await getAllOrders();

//   return res.send(resultado)
// }

export { getSeats, updateSeat };

// CREATE TABLE users (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"name" TEXT NOT NULL UNIQUE
// );


// CREATE TABLE orders (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"buyerName" text NOT NULL REFERENCES users(name),
// 	"seatId" integer NOT NULL REFERENCES seats(id)
// );



// CREATE TABLE seats (
// 	"id" serial NOT NULL PRIMARY KEY,
// 	"isAvaliable" boolean NOT NULL DEFAULT true,
// 	"owner" TEXT DEFAULT 'NULL'
// );