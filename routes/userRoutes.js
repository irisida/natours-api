const express = require('express');

const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'fail',
    msg: 'Route not yet implemented',
  });
};

const createOneUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    msg: 'Route not yet implemented',
  });
};

const getOneUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    msg: 'Route not yet implemented',
  });
};

const updateOneUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    msg: 'Route not yet implemented',
  });
};

const deleteOneUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    msg: 'Route not yet implemented',
  });
};

router.route('/').get(getAllUsers).post(createOneUser);
router.route('/:id').get(getOneUser).patch(updateOneUser).delete(deleteOneUser);

module.exports = router;
