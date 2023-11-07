import express, { Express, Request, Response } from 'express';
import path from 'path';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = 3000;

// Set the front end path
const frontEnd: string = path.join(__dirname, '..', 'client', 'dist');


app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(frontEnd, 'index.html'));
});


app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
