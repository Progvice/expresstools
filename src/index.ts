import express from "express";
import dotenv from 'dotenv';
import { setupHTTPS, setupHTTP } from "./server";
import { LoadRoutes } from "./routes";
dotenv.config();

const app = express();

app.use(express.json());

LoadRoutes(app);

if (typeof process.env.PORT !== 'string' || isNaN(Number(process.env.PORT))) {
    console.error('Port is invalid or is not set in .env file. Exiting...');
    process.exit(1);
}

if (typeof process.env.HTTPS !== 'string' || !['TRUE', 'true', 'FALSE', 'false'].includes(process.env.HTTPS)) {
    console.error('HTTP/HTTPS Protocol is not set. Set proper boolean in .env file to HTTPS. Exiting...');
    process.exit(1);
}

true && ['TRUE', 'true'].includes(process.env.HTTPS) ? setupHTTPS(app) : setupHTTP(app);