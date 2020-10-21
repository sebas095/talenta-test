import 'express-async-errors';
import { config } from 'dotenv';
config(); // config environment variables

import express, { Application, Router } from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

// Routes
import { GameRoutes } from '@routes';

// Middlewares
import { ErrorMiddleware, NotFoundMiddleware } from '@middlewares';

// config
const PORT: number = Number(process.env.PORT) || 5000;
const MONGO_URI: string = process.env.MONGO_URI as string;
const APPLICATION_NAME: string = process.env.APPLICATION_NAME as string;

const app: Application = express();
const apiRoutes: Router = Router();

// use middlewares
apiRoutes.use(cors());
apiRoutes.use(express.json());
apiRoutes.use(logger('dev'));

// use routes
GameRoutes(apiRoutes, '/game');

app.use('/v1/api', apiRoutes);

app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 ${APPLICATION_NAME} API running on port ${PORT}`);
    });
  })
  .catch(console.log);
