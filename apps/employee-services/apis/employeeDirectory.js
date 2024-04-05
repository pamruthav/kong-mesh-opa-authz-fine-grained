const express = require('express');
const router = express.Router();

// Dummy data for employee IDs
const employeeIds = {
  Amrutha: [123, 234],
  Vivian: [234],
  Charlie: [345, 234],
  Max: [456, 234]
};

// Endpoint to get employee IDs for a specific employee
router.get('/:name', (req, res) => {
  const employeeName = req.params.name;

  // Check if the employee name exists in the employeeIds data
  if (employeeIds.hasOwnProperty(employeeName)) {
    const employeeIdsArray = employeeIds[employeeName];
    res.json({ employee_ids: employeeIdsArray });
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

module.exports = router;
