import express from 'express';
import { json } from 'body-parser';
import { MainRouter } from './routes';

require('dotenv').config()

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(MainRouter);


app.listen(3000, () => {
  console.log('server is listening on port 3000');
})