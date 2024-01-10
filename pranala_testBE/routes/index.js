var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const generateSegitiga = async (req, res, next) => {
  try {
    console.log(req.body);
    data = req.body.toString();
    expectedVal = [];
    for (let i = data.length - 1; i >= 0; i--) {
      let x = '0'.repeat(data.length - 1 - i);
      let z = data[i] + x;
      expectedVal.unshift(z);
    }
    const result = expectedVal.join('\n');
    return result;
  } catch (error) {
    next(error);
  }
};
router.post('/genSegitiga', generateSegitiga);
module.exports = router;
