import { MongoClient } from "mongodb";
import { mongoUri } from "../credentials.js";

const client = new MongoClient(mongoUri);

export const database = client.db();
