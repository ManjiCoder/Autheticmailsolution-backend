const express = require('express');
const app = express();
const port = 3000;

app.use('/email', require('./routes/email'));

app.listen(port, () => {
  console.log(
    `Autheticmailsolution-Backend app listening on port http://localhost:${port}`
  );
});
