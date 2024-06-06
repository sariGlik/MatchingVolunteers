require('dotenv').config();
const express = require('express');
const host = process.env.HOST;
const port = process.env.PORT;
const helpRequestsRouter=require('./routers/help-request-router.js');
const volunteerRouter=require('./routers/volunteer-router.js');

const app = express();

app.use(express.json());

app.use('/api/volunteer',volunteerRouter);
app.use('/api/helpRequest',helpRequestsRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Oops... The Programmer`s problem he has to take care of it!!!!');
});

app.listen(port, host, () => {
    console.log(`The server is running in http://${host}:${port}`);
});