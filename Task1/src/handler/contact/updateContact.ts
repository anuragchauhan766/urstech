import { UpdateContactInput } from "@/schema/index.js";
import { updateContactCRM } from "@/service/crm/index.js";
import { updateContactDB } from "@/service/database/index.js";

import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data_store, ...contactData } = req.body as UpdateContactInput;

        if (data_store === "CRM") {
            const contact = await updateContactCRM(contactData.contact_id, {
                email: contactData.email ?? undefined,
                mobile_number: contactData.mobile_number ?? undefined,
            });
            res.status(200).json(contact);
        } else {
            const contact = await updateContactDB(contactData.contact_id, {
                email: contactData.email,
                mobile_number: contactData.mobile_number,
            });
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error(error);
        next(
            createHttpError(500, "Failed to Update Contact", {
                originalError: error,
            })
        );
    }
};
