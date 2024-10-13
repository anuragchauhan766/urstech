import { MongoClient } from "mongodb";

const url = process.env.MONGODBURL!;
const dbName = "urstech";

let client: MongoClient | null = null;

export async function connectDb() {
    if (!client) {
        client = new MongoClient(url);
        await client.connect();
        console.info("Database connected successfully");
    }
    return client.db(dbName);
}

export async function closeConnection(): Promise<void> {
    if (client) {
        await client.close();
        console.info("Database connection closed");
    }
}
