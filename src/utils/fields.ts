import { Request } from "express";

export const requiredFields = async (req: Request, requiredFields: string[]) => {
    let missingFields = [];
    for (const field of requiredFields) {
        if (!(field in req.body)) {
            missingFields.push(field);
        } 
    }
    return {
        status: missingFields.length < 1 ? true : false,
        fields: missingFields
    };
} 