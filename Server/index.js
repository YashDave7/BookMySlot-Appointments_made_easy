const connectToMongoDB = require('./database');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// CONFIG .ENV FILE.
dotenv.config({path: __dirname+'/.env'});

// CONNECTION TO THE DATABASE.
connectToMongoDB();

// CREATING EXPRESS APP.
const app = express();
const port = 5000;

// MIDDLEWARES.
app.use(cors());
app.use(express.json());

// AVAILABLE ROUTES.
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/authProfessional', require('./routes/authProfessional'));
// app.use('/api/booking', require('./routes/booking'));

// RUNNING THE APPLICATION ON THE LOCALHOST PORT.
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
