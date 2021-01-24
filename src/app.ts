import express, { Application } from 'express';
import { routes } from './routes';

// Boot express
export const app: Application = express();

// Application routing
routes(app);

if (process.env.NODE_ENV !== 'test') {
  const port = 5000;

  // Start server
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
}
