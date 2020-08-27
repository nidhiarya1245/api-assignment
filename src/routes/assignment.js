import { Router } from 'express';

const router = Router();

router.get('/oneTo100', (req, res) => {
  let oneTo100 = (Array.from(Array(100), (v, x) => {
    return "<div>" + (x + 1) + "</div>";
  })).join('');
  return res.send(oneTo100);
});

router.get('/oneTo/:count', (req, res) => {
  let count = parseInt(req.params.count) || 100;
  var oneTo100 = (Array.from(Array(count), (v, x) => {
    return "<div>" + (x + 1) + "</div>";
  })).join('');
  return res.send(oneTo100);
});

router.get('/multipleOf3', (req, res) => {
  let result = (Array.from(Array(100), (v, x) => {
    let num = x + 1;
    return "<div>" + ((num % 3 == 0) ? 'Fizz' : num) + "</div>";
  })).join('');
  return res.send(result);
});

router.get('/multipleOf5', (req, res) => {
  let result = (Array.from(Array(100), (v, x) => {
    let num = x + 1;
    return "<div>" + ((num % 5 == 0) ? 'Buzz' : num) + "</div>";
  })).join('');
  return res.send(result);
});

router.get('/multipleOf/:number/:printVal', (req, res) => {
  let multipleOfNum = parseInt(req.params.number) || 1;
  let result = (Array.from(Array(100), (v, x) => {
    let num = x + 1;
    return "<div>" + ((num % multipleOfNum == 0) ? req.params.printVal : num) + "</div>";
  })).join('');
  return res.send(result);
});

router.get('/multipleOf3And5', (req, res) => {
  let result = (Array.from(Array(100), (v, x) => {
    let num = x + 1;
    return ((num % 3 == 0) && (num % 5 == 0)) ? 'FizzBuzz' : num;
  }));
  return res.send(result);
});

export default router;
