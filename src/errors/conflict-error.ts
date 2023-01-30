import { ApplicationError } from "../protocols/protocol";

export function conflictError(): ApplicationError {
  return {
    name: "ConflictError",
    message: "This seat is unavaliable!"
  };
}