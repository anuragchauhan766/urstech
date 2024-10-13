import type { Request, Response } from "express";

export const healthCheck = async (_req: Request, res: Response) => {
    console.info("Server is starting");
    res.json({ status: "ok", message: "Server is running" });
};
