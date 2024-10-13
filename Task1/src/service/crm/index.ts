import {
    Contact,
    CreateContactInput,
    DeleteContactInput,
    GetContactInput,
    UpdateContactInput,
} from "@/schema/index.js";

import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `https://${process.env.FRESH_SCLALE_BUNDLE_ALIAS}`,
    headers: {
        Authorization: `Token token=${process.env.FREASH_SCALE_API_KEY}`,
    },
});

export const createContactCRM = async (contactData: Omit<CreateContactInput, "data_store">) => {
    const response = await axiosInstance.post("/api/contacts", {
        contact: contactData,
    });
    return response.data as Contact;
};

export const getContactCRM = async (input: Omit<GetContactInput, "data_store">) => {
    const response = await axiosInstance.get(`/api/contacts/${input.contact_id}`);
    return response.data;
};

export const updateContactCRM = async (
    contactId: UpdateContactInput["contact_id"],
    updateData: Omit<UpdateContactInput, "data_store" | "contact_id">
) => {
    const response = await axiosInstance.put(`/api/contacts/${contactId}`, {
        contact: updateData,
    });
    return response.data;
};

export const deleteContactCRM = async (contactId: DeleteContactInput["contact_id"]) => {
    const response = await axiosInstance.delete(`/api/contacts/${contactId}`);
    if (response.status === 200) {
        return {
            message: "Contact deleted Successfully",
        };
    }
};
