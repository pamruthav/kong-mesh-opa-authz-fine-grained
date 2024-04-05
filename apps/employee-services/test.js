const express = require('express');
const employeeDirectoryRouter = require('./apis/employeeDirectory');
const employeeRatingRouter = require('./apis/employeeRating');

const app = express();

// Use employeeDirectoryRouter and employeeRatingRouter as middleware
app.use('/employeeDirectory', employeeDirectoryRouter);
app.use('/employeeRating', employeeRatingRouter);

// Start the server on a temporary port (e.g., 3002)
const port = 3002;
app.listen(port, () => {
  console.log(`Test server is running on http://localhost:${port}`);
});

