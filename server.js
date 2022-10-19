import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import routes from './routes/recruit.js';
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 10010;
app.listen(PORT, () => {
  console.log(`server start PORT:${PORT}`);
});
