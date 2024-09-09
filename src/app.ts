import bodyParser from 'body-parser';
import express from 'express';

// import { logRoutes } from './bootstrap';
import { logMiddleware } from './middlewares';
import { errorHandler } from './middlewares/error.handler';
import taskRoutes from './routes/taskRoutes';

export const bootstrap = async () => {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(logMiddleware);
  app.use('/', taskRoutes);
  //logRoutes(app);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
bootstrap();
