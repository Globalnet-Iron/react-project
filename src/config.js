import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://joseiron2023:RPKizdjrBaA2u8eR@gestion.yokvdvk.mongodb.net/?retryWrites=true&w=majority";

export const JWT_SECRET = process.env.JWT_SECRET || "secretkey";