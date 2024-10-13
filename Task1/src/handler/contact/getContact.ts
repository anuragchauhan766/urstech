import { GetContactInput } from "@/schema/index.js";
import { getContactCRM } from "@/service/crm/index.js";
import { getContactDB } from "@/service/database/index.js";

import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const getContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data_store, ...contactData } = req.body as GetContactInput;

        if (data_store === "CRM") {
            const contact = await getContactCRM(contactData);
            res.status(200).json(contact);
        } else {
            const contact = await getContactDB(contactData.contact_id);
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error(error);
        next(
            createHttpError(500, "Failed to get Contact", {
                originalError: error,
            })
        );
    }
};
