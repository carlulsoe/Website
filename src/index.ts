const express = require("express");
import {Request, Response} from 'express';
const app = express();

const port = 8000;

app.use('/css', express.static(__dirname + '/css'))

app.get('/', function (req: Request, res: Response) {
    res.sendFile('index.html', {root: __dirname});
  })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 