const request = require('supertest');
const app = require('../index.js');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

describe('Test the database response', () => {
  test('It should send a response on a GET request to /rooms/details/1', () => {
    return request(app).get('/rooms/details/1').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('It should send a response on a GET request to /rooms/details/20', () => {
    return request(app).get('/rooms/details/20').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('It should send a response on a GET request to /rooms/details/50', () => {
    return request(app).get('/rooms/details/50').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('It should send a response on a GET request to /rooms/details/100', () => {
    return request(app).get('/rooms/details/100').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Test serving static files', () => {
  test('It should send back bundle.js', () => {
      return request(app).get('/rooms/1/bundle.js').expect(200);
  });
  test('It should send back style.css', () => {
      return request(app).get('/rooms/1/style.css').expect(200);
  });
})