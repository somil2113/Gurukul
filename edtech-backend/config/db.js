const mongoose = require('mongoose');

let cachedConnection = null;
let cachedPromise = null;

const connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    if (cachedConnection) {
        return cachedConnection;
    }

    if (mongoose.connection.readyState === 1) {
        cachedConnection = mongoose.connection;
        return cachedConnection;
    }

    try {
        if (!cachedPromise) {
            cachedPromise = mongoose.connect(process.env.MONGODB_URI);
        }

        const conn = await cachedPromise;
        cachedConnection = conn.connection;
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return cachedConnection;
    } catch (error) {
        cachedPromise = null;
        console.error(`Error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;
