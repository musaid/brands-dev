import { NextFunction, Request, Response, Router } from 'express';
export const IndexController: Router = Router();

IndexController.get(
  '/',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ data: 'Hello World!' });
    } catch (e) {
      next(e);
    }
  }
);
