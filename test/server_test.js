'use strict';

var server = require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('time', function() {

  it('should respond to a time request', function(done) {
    chai.request('localhost:3000')
    .get('/time')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    })
  })
})

describe('greet GET', function () {

  it('should respond to a greet GET request', function(done) {
    chai.request('localhost:3000')
    .get('/greet')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    })
  })
})

describe('greet POST', function() {

  it('should respond to a greet POST request', function(done) {
    var res;
    var err;

    before(function() {
      chai.request('localhost:3000')
      .post('/greet')
      .send({name: 'Test'})
      .end(function(error, response) {

        var expected = 'hello Test';
        res = response;
        err = error;
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.msg).to.equal(expected);
      })
    })
    done();
  })
})
