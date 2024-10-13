import { DeleteContactInput } from "@/schema/index.js";
import { deleteContactCRM } from "@/service/crm/index.js";
import { deleteContactDB } from "@/service/database/index.js";

import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data_store, contact_id } = req.body as DeleteContactInput;

        if (data_store === "CRM") {
            const contact = await deleteContactCRM(contact_id);
            res.status(200).json(contact);
        } else {
            const contact = await deleteContactDB(contact_id);
            res.status(200).json(contact);
        }
    } catch (error) {
        console.error(error);
        next(
            createHttpError(500, "Failed to Delete Contact", {
                originalError: error,
            })
        );
    }
};
