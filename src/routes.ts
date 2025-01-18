import { Express } from "express";

// ROUTE IMPORTS START
import {studentsRoute} from './routes/students';
import {usersRoute} from './routes/users';

// ROUTE IMPORTS STOP


export const LoadRoutes = (app: Express) => {

    // ROUTES START

    app.use('/students', studentsRoute);
    app.use('/users', usersRoute);

    // ROUTES STOP
}