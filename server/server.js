const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const destinationRoutes = require('./router/destination');
const packageRoutes = require('./router/package');

const app = express();
app.use(cors());
app.use(express.json());

//routes

app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

//starting server here
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to database');
    app.listen(5000, () => console.log('server is running on port 5000'));
  } catch (err) {
    console.error('mongo connection failed', err);
  }
}

startServer();
