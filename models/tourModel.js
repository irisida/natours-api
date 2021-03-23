const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Tour records must have a name property'],
  },
  duration: {
    type: Number,
    required: [true, 'Tour records must have a duration.'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Tour records must have a maximum group size set.'],
  },
  difficulty: {
    type: String,
    required: [true, 'Tour records must have a difficulty setting'],
  },
  ratingAverage: {
    type: Number,
    default: 5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Tour records must have a price for the tour'],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Tour records must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'Tour records must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
