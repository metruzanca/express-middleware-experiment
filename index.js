const test = require('tap').test
const express = require('express')
const app = express()

app.get(
  '/',
  (req, res, next) => {
    res.status(200).json({ message: 1 })
    // next()
  },
  // (req, res, next) => {
  //   res.json(msg(2))
  // },
)


const supertest = require('supertest')(app);


test('Get / with no params', async tap => {
  const {status, body} = await supertest.get('/')
  tap.equal(status, 200)
  tap.equal(body.message, 1)
})

