import { createContact } from "@/handler/contact/createContact.js";
import { deleteContact } from "@/handler/contact/deleteContact.js";
import { getContact } from "@/handler/contact/getContact.js";
import { updateContact } from "@/handler/contact/updateContact.js";
import { healthCheck } from "@/handler/healthCheck.js";
import { zodValidator } from "@/middleware/validator.js";
import { createContactSchema, deleteContactSchema, getContactSchema, updateContactSchema } from "@/schema/index.js";
import express from "express";

const router = express.Router();

/* GET health Check. */
router.get("/health", healthCheck);

/*CRUD  Contact Routes */

router.post("/createContact", zodValidator(createContactSchema), createContact);
router.post("/getContact", zodValidator(getContactSchema), getContact);
router.post("/updateContact", zodValidator(updateContactSchema), updateContact);
router.post("/deleteContact", zodValidator(deleteContactSchema), deleteContact);

export default router;
