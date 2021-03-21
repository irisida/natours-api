const app = require('./app');

/**
 * setup the port and listener for the express server
 * using port 3000
 */
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
