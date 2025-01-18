
import { Request, Response, NextFunction } from "express"

export const createStudents = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Created');
}

export const deleteStudents = async (req: Request, res: Response, next: NextFunction) => {
    res.send('deleted');
}

export const modifyStudents = async (req: Request, res: Response) => {
    res.send('Modified');
}

export const getStudents = async (req: Request, res: Response) => {
    res.send('Reading');
}

export const getStudentsById = async (req: Request, res: Response) => {
    res.send('Students ID is ' + req.params.id);
}
                