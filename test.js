var hello = require('./hello');
var assert = require('assert');

describe('Running test', function () {


	it('should say hello', function (done) {

		assert.equal('Hello World', hello());
		done();

	});
})