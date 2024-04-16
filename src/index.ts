import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from "compression";
import mongoose from 'mongoose';
import router from './router';

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

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const MONGO_URL = 'mongodb+srv://<username>>:<password>@nodeauth.xmhs9bt.mongodb.net/?retryWrites=true&w=majority&appName=NodeAuth'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error) => {
  console.error(error);
});


app.use('/', router());
