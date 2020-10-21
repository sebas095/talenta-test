import { config } from 'dotenv';
config(); // config environment variables

import express, { Application, Router } from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

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

app.use('/v1/api', apiRoutes);

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
