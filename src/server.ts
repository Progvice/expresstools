import { Express } from "express";
import https from 'https';

export const setupHTTPS = (app: Express) => {

    console.log('HTTPS');

}

export const setupHTTP = (app: Express) => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}