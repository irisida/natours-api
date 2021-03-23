const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'A tour must have a name property'],
  },
  rating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price associated to it'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
