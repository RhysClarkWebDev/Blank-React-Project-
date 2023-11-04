import express from 'express';
import path from 'path';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;
// Set the front end path
const frontEnd = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get('/*', (req, res) => {
    res.sendFile(path.join(frontEnd, 'index.html'));
});
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
