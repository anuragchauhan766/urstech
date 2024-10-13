import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import createHttpError from "http-errors";

export const zodValidator = (schema: AnyZodObject) => async (req: Request, _res: Response, next: NextFunction) => {
    try {
        const data = await schema.parseAsync(req.method === "GET" ? req.query : req.body);
        console.log(data);
        return next();
    } catch (error) {
        if (error instanceof ZodError) {
            const errorMessage = error.errors.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            }));
            return next(
                createHttpError(400, "Validation Error", {
                    details: errorMessage,
                })
            );
        }
        return next(createHttpError(500, "Internal Server Error"));
    }
};
