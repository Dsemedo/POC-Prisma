import express, { json } from 'express';
import { userRoute } from './routes/user.routers.js';
import { seatsRoute } from './routes/seats.routers.js';
import { ordersRoute } from './routes/orders.routers.js';

const server = express();
server.use(json());

server.use(userRoute);
server.use(seatsRoute);
server.use(ordersRoute)

server.listen(4000, () => {
    console.log('Server is running')
})