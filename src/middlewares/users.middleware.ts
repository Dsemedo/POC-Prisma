// import { NextFunction, Request, Response } from "express";
// import { NewUser, User, UserEntity } from "../protocols/protocol";
// import userSchema from "../schemas/user.schema.js";

// export function validateUser(req: Request, res: Response, next: NextFunction){
//     const newUser = req.body as NewUser;

//     const {error} = userSchema.validate(newUser);

//     if(error == undefined){
//         next();
//     }else{
//         const errors = error.details.map((d) =>d.message);
//         res.status(400).send(errors);
//     }
// }