import Ajv from "ajv";
import { NextFunction } from "express";
import orderSchema from '../../_schema';

const ajv = new Ajv();

// validation middleware
function validateBody() {
    const schema = orderSchema.OrdersObject;
    const validate = ajv.compile(schema);
    return (req: any, res: any, next: NextFunction) => {
        if (!validate(req.body)){
            return res.status(400).json(validate.errors);
        }
        return next();
    };    
}

export default validateBody;