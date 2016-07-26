var request = require('supertest');
var app = require('../app');

describe('Routes index', function(){
  it('Should return 200', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });
});


