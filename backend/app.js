const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const roomRoutes = require('./routes/roomRoutes');
const db = require('./config/db');
require('dotenv').config();


const app = express();

// Database connection
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Routes
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/gallery', galleryRoutes);
app.use('/payments', paymentRoutes);
app.use('/rooms', roomRoutes);

// Static folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Database connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));