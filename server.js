const mongoose = require('mongoose');

/**
 * We must set the path to the custom environment
 * settings  before we are requiring the app.
 */
const dotenv = require('dotenv');

dotenv.config({
  path: `${__dirname}/config.env`,
});

/**
 * app, app and away
 */
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

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

const testTour = new Tour({
  name: 'Speedy walks',
  rating: 7,
  price: 500,
});

testTour.save();

/**
 * setup the port and listener for the express server
 * using port 3000
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
