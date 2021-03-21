const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Running custom middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// top level read of the tours data
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// router middelwares
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/**
 * setup the port and listener for the express server
 * using port 3000
 */
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
