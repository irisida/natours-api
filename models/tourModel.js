const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Tour records must have a name property'],
      maxlength: [40, 'The Tour name must be 40 characters or less'],
    },
    slug: {
      type: String,
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
    ratingsAverage: {
      type: Number,
      default: 5,
    },
    ratingsQuantity: {
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
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});

tourSchema.pre('find', function (next) {
  this.find({ secretTour: { $ne: true } });
  next();
});

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
