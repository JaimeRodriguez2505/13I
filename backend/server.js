const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/moviesRoutes');
const app = express();

app.use(express.json()); // Para parsear JSON

mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
