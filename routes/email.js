const express = require('express');
const router = express.Router();

const verifier = require('email-exist');

// Router 1 - For single email check
router.get('/:email', (req, res) => {
  verifier.verify(req.params.email, function (err, info) {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      //   console.log('Success: ' + info.success);
      //   console.log('Response from smtp: ' + info.response);
      res.send(info.info);
    }
  });
});

module.exports = router;
