import express from "express";
import "express-async-errors";
import "./database/connection";
import routes from './routes';
import path from 'path';
import errorHandler from "./errors/handler";
import cors from "cors";

import "dotenv/config";

const app = express();

const corsOptions = process.env.NODE_ENV == 'dev' ? {} : { origin: process.env.CLIENT_URL }

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)

const port = normalizaPort(process.env.PORT || '3333');
function normalizaPort(val: string) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

app.listen(port, function () {
  console.log(`[*] API em execução em >> http://localhost:${port}`);
});