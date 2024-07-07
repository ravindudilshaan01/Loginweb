const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose}=require('mongoose')




//databse connection

mongoose.connect(process.env.MONGODB_URL) 
  

.then(() => console.log('Database connected successfully'))
.catch(err => console.log('Database not connected', err));
 
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
