const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Vandra Matram');
});

app.get('/email', (req, res) => {
  res.send('Vandra Matram');
});

app.use('/email', require('./routes/email'));

app.listen(port, () => {
  console.log(
    `Autheticmailsolution-Backend app listening on port http://localhost:${port}`
  );
});
