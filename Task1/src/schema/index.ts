import { ObjectId } from "mongodb";
import { z } from "zod";
import validator from "validator";
export const data_store = z.enum(["CRM", "DATABASE"]);

export const createContactSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    mobile_number: z.string().refine(validator.isMobilePhone, "Invalid mobile number"),
    data_store: data_store,
});

export const getContactSchema = z.object({
    contact_id: z.string().min(1, "Contact ID is required"),
    data_store: data_store,
});

export const updateContactSchema = z.object({
    contact_id: z.string().min(1, "Contact ID is required"),
    email: z.string().email("Invalid email address").optional(),
    mobile_number: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, "Invalid mobile number")
        .optional(),
    data_store: data_store,
});

export const deleteContactSchema = z.object({
    contact_id: z.string().min(1, "Contact ID is required"),
    data_store: data_store,
});

// Types inferred from Zod schemas
export type CreateContactInput = z.infer<typeof createContactSchema>;
export type GetContactInput = z.infer<typeof getContactSchema>;
export type UpdateContactInput = z.infer<typeof updateContactSchema>;
export type DeleteContactInput = z.infer<typeof deleteContactSchema>;
export type DataStore = z.infer<typeof data_store>;
export type Contact = Omit<CreateContactInput, "data_store">;
export type ContactDb = Contact & {
    _id: ObjectId;
};
