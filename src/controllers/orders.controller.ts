import {Request, Response} from 'express';
import { getAllOrders } from '../repositories/orders.repository.js';

async function getOrders(req: Request, res: Response){
    
  const resultado = await getAllOrders();

  return res.send(resultado)
}


export { getOrders };