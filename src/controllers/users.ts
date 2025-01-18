
import { Request, Response, NextFunction } from "express"

export const createUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Created');
}

export const deleteUsers = async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleted');
}

export const modifyUsers = async (req: Request, res: Response) => {
    res.send('Modified');
}

export const getUsers = async (req: Request, res: Response) => {
    res.send('Reading');
}
                