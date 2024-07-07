const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
 
const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

const authRoutes = require('./routes/authRoutes'); 

app.use('/',require('./routes/authRoutes'))

//Use your routes
app.use('/auth', authRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
