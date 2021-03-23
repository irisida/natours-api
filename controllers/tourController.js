const fs = require('fs');

// top level read of the tours data
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.validateTourID = (req, res, next, val) => {
  console.log(`Validate tour id: ${val}`);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      msg: 'Invalid ID',
    });
  }
  next();
};

exports.validatePostRequestBody = (req, res, next) => {
  console.log('ValidateRequestBody was fired');
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      msg: 'Invalid body data',
    });
  }

  return next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getOneTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

exports.updateOneTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

exports.deleteOneTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

exports.createNewTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign(
    {
      id: newId,
    },
    req.body
  );
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
