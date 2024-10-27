const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');
const path = require('path');

const app = express();
// Connect to MongoDB
mongoose.connect('mongodb+srv://mmohitsingh9467:DD72aRIURajuusGz@portfolio.jqcsi.mongodb.net/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api', apiRoutes);
app.get('/admin', (req, res) => {
    res.render('admin');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

