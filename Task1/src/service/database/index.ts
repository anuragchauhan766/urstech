import { connectDb } from "@/config/mongo.js";
import { Contact, ContactDb, UpdateContactInput } from "@/schema/index.js";
import { ObjectId } from "mongodb";

export async function createContactDB(contactData: ContactDb) {
    const db = await connectDb();
    const collection = db.collection<ContactDb>("contacts");
    const result = await collection.insertOne(contactData);
    if (result.acknowledged) {
        const data = await collection.findOne({ _id: result.insertedId });
        return data;
    }
}

export async function getContactDB(contactId: string): Promise<ContactDb | null> {
    const db = await connectDb();
    const collection = db.collection<ContactDb>("contacts");
    return await collection.findOne({ _id: new ObjectId(contactId) });
}

export async function updateContactDB(
    contactId: string,
    updateData: Omit<UpdateContactInput, "data_store" | "contact_id">
): Promise<Contact | null> {
    const db = await connectDb();
    const collection = db.collection<ContactDb>("contacts");
    const updateFields: Partial<Omit<UpdateContactInput, "data_store" | "contact_id">> = {};
    if (updateData.email) updateFields.email = updateData.email;
    if (updateData.mobile_number) updateFields.mobile_number = updateData.mobile_number;

    // Only perform the update if there are fields to update
    if (Object.keys(updateFields).length === 0) {
        // If no fields to update, just return the existing document
        return collection.findOne({ _id: new ObjectId(contactId) });
    }

    const result = await collection.findOneAndUpdate(
        { _id: new ObjectId(contactId) },
        {
            $set: updateFields,
        },
        { returnDocument: "after" }
    );
    return result;
}

export async function deleteContactDB(contactId: string) {
    const db = await connectDb();
    const collection = db.collection<ContactDb>("contacts");
    const result = await collection.deleteOne({ _id: new ObjectId(contactId) });
    if (result.acknowledged) {
        return {
            message: "Contact deleted successfully",
        };
    }
    return {
        message: "Contact not found",
    };
}
