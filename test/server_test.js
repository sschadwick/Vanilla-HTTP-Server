'use strict';

var server = require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp)

describe('time', function() {

  var server = 'localhost:3000';

  it('should respond to a time request', function(done) {
    chai.request(server)
    .get('/time')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    })
  })
})

describe('greet GET', function () {

  var server = 'localhost:3000';
  it('should respond to a greet GET request', function(done) {
    chai.request(server)
    .get('/greet')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    })
  })
})

describe('greet POST', function() {

  var server = 'localhost:3000';
  it('should respond to a greet POST request', function(done) {
    chai.request(server)
    .post('/greet')
    .send({name: 'Test'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    })
  })
})
