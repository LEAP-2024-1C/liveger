import { Request, Response, NextFunction } from "express";
export const logger = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    `${req.method}: ${req.originalUrl}`; // originalUrl ni (/users)
    next();
  };
};
