import Ajv from "ajv";
import { NextFunction } from "express";

const ajv = new Ajv();

// validation middleware
function validateBody(schema: object) {
  const validate = ajv.compile(schema);
  return (req: any, res: any, next: NextFunction) => {
      console.log("body: ", req.body);
    if (!validate(req.body)) return res.status(400).json(validate.errors);
    return next();
  };
}

export default validateBody;