'use strict';

var check = require('zan').check;
var forOwn = require('lodash.forown');

function compare (branch, props, returnErrors) {

	returnErrors = returnErrors || false;

	var errors = [];

	forOwn(branch, function (test, key) {

		if ( key in props && typeof test === 'function' ) {

			var invalid = check(test, props[key]);

			if ( invalid ) {
				errors.push(invalid);
			}
		}

		else if ( key in props ) {
			compare(test, props[key])
		}

		else if ( test && !test.inspectIsOptional() ) {
			errors.push(new Error('Property ' + key + ' is missing'))
		}
	});

	return returnErrors ? errors : !errors.length;
}
