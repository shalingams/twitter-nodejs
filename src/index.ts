import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from "compression";
import mongoose from 'mongoose';
import router from './router';
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => console.log(err));
app.use('/', router());
