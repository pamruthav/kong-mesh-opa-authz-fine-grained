const express = require('express');
const router = express.Router();

// Dummy data for annual performance ratings
const ratings = {
  Amrutha: 4.5,
  Vivian: 3.6,
  Charlie: 4.6,
  Max: 3.2
};

// Endpoint to get the rating for a specific employee
router.get('/:name', (req, res) => {
  const employeeName = req.params.name;

  // Check if the employee name exists in the ratings data
  if (ratings.hasOwnProperty(employeeName)) {
    const rating = ratings[employeeName];
    res.json({ "Employee Name": employeeName, "Annual rating": rating });
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

module.exports = router;
