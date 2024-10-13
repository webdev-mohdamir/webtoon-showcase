import mongoose from "mongoose";
import { DATABASE_URI } from "../constants/index.js";

const connectionString = DATABASE_URI;
const RETRY_ATTEMPTS = 5;
let attempt = 0;
let connection;

const connectDB = async () => {
  if (connection) {
    console.log("Already connected to MongoDB");
    return connection;
  }

  try {
    const con = await mongoose.connect(connectionString);

    if (!con) {
      throw new Error("MongoDB connection error");
    }

    connection = mongoose.connection;

    if (!connection) {
      throw new Error("MongoDB connection error");
    }

    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    attempt += 1;

    if (attempt < RETRY_ATTEMPTS) {
      console.log(`Attempt ${attempt} failed. Retrying...`);
      return connectDB();
    }

    console.error(
      `All ${RETRY_ATTEMPTS} attempts failed. MongoDB connection error: ${error.message}`
    );
    return null;
  }
};

export default connectDB;
