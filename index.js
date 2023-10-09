const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const verifier = require('email-exist');

app.get('/', (req, res) => {
  verifier.verify('bmetha@gmail.com', function (err, info) {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      // res.json({ info: info.info });
      res.send('Vandra Matram ' + info.info);
    }
  });
});

app.get('/single', (req, res) => {
  verifier.verify('manji9@gmail.com', function (err, info) {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.json({ info: info.info });
    }
  });
});

app.use('/email', require('./routes/email'));

app.listen(port, () => {
  console.log(
    `Autheticmailsolution-Backend app listening on port http://localhost:${port}`
  );
});
