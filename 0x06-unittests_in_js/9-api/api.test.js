const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const url = 'http://localhost:7865/';

  it('should return status 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status 200 when :id is a number', function(done) {
    request(`${baseUrl}12`, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', function(done) {
    request(`${baseUrl}12`, function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 when :id is NOT a number', function(done) {
    request(`${baseUrl}hello`, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
