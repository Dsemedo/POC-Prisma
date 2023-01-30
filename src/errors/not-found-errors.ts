import { ApplicationError } from "../protocols/protocol";

export function notFoundError(): ApplicationError {
    return {
      name: "NotFoundError",
      message: "No result for this name!",
    };
  }