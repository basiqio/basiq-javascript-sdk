/*
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BasiqApi);
  }
}(this, function(expect, BasiqApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BasiqApi.TokenApi();
  });

  describe('(package)', function() {
    describe('TokenApi', function() {
      describe('postToken', function() {
        it('should call postToken successfully', function(done) {

          var basiqVersion = "2.0";
          var opts = {
            scope: "CLIENT_ACCESS"
          };

          var defaultClient = BasiqApi.ApiClient.instance;
          var api_key = defaultClient.authentications['api_key'];
          
          // add api key to run tests, do not commit your api key to github or display anywhere public
          api_key.apiKey = '';
      
          api_key.apiKeyPrefix = 'Basic';

          instance.postToken(basiqVersion, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            expect(data).to.be.a(BasiqApi.TokenPostResponse);
            expect(data.accessToken).to.be.a('string');
            expect(data.expiresIn).to.be.a('number');
            expect(data.expiresIn).to.be(3600);
            expect(data.tokenType).to.be.a('string');
            expect(data.tokenType).to.be("Bearer");

            done();
          });

          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
