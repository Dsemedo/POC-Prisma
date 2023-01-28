import { NextFunction, Request, Response } from "express";
import buyerSchema from "../schemas/buyerSeat.schema.js";
import { NewSeat } from "../protocols/protocol.js";

export default function validateUpdatingSeat(req: Request, res: Response, next: NextFunction) {

  const newBuyer = req.body as NewSeat;
  
  const {error} = buyerSchema.validate(newBuyer);

  if(error == undefined){
      next();
  }else{
      const errors = error.details.map((d) =>d.message);
      res.status(400).send(errors);
  }
}

