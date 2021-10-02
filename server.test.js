const app = require('./server.js')
const supertest = require('supertest')(app);
const { test } = require('tap');

test('Get / with no params', async ({equal, end}) => {
  const {status, body} = await supertest.get('/');

  equal(status, 200);
  equal(body.message, 1);

  end();
});


test('Get / query: id = 2', async ({equal, end}) => {
  const {status, body} = await supertest.get('/?id=2');

  equal(status, 200);
  equal(body.message, 2);

  end();
});


test('Get / query: id = 3', async ({equal, end}) => {
  const {status, body} = await supertest.get('/?id=3');

  equal(status, 200);
  equal(body.message, 3);

  end();
});
