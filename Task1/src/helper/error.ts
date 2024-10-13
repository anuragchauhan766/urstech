import { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
export class ErrorHandler extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).json({
            error: {
                message: err.message,
                details: err.details,
            },
        });
    } else {
        res.status(500).json({
            error: {
                message: "Internal Server Error",
            },
        });
    }
};
