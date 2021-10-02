const express = require('express');
const app = express();

async function one() {
  return { message: 1 }
}

async function two(req) {
  const id = +req.query.id
  if(id === 2) {
    return { message: 2 }
  }
}

async function three(req) {
  const id = +req.query.id
  if(id === 3) {
    return { message: 3 }
  }
}

// 80% coverage
// async function handler(req, res) {
//   let error;
//   if(!error) error = await three(req);
//   if(!error) error = await two(req);
//   if(!error) error = await one(req);
//   if(error) {
//     res.status(200).json(error)
//   }
// }

// 100% everything
// Very sad theres duplication here. Reminds me of golang's `if err != nil`
async function handler(req, res) {
  let data;

  data = await three(req);
  if (data) {
    return res.status(200).json(data);
  }
  
  data = await two(req);
  if (data) {
    return res.status(200).json(data);
  }

  return res.status(200).json(await one(req));
}

app.get('/', handler);

module.exports = app
