const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

global.__basedir = __dirname;

connectDB();

const users = require('./routes/users');
const uploadProfile = require('./routes/uploadProfile');

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', users);
app.use('/api/v1/upload', uploadProfile);

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('batwa-frontend/build'));

//   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'batwa-frontend', 'build', 'index.html')));
// }

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

