import { CreateContactInput } from "@/schema/index.js";
import { createContactDB } from "@/service/database/index.js";
import { createContactCRM } from "@/service/crm/index.js";

import type { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import createHttpError from "http-errors";

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data_store, ...contactData } = req.body as CreateContactInput;

        if (data_store === "CRM") {
            const contact = await createContactCRM(contactData);
            res.status(200).json(contact);
        } else {
            const contact = await createContactDB({
                _id: new ObjectId(),
                ...contactData,
            });
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error(error);
        next(
            createHttpError(500, "Failed to create contact", {
                originalError: error,
            })
        );
    }
};
