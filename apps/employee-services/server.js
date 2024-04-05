const express = require('express');
const employeeDirectoryRouter = require('./apis/employeeDirectory');
const employeeRatingRouter = require('./apis/employeeRating');

const app = express();
const port = 3000;

// Routes for employeeDirectory
app.use('/employeeDirectory', employeeDirectoryRouter);

// Routes for employeeRating
app.use('/employeeRating', employeeRatingRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
