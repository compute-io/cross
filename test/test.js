'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	cross = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-cross', function tests() {

	it( 'should export a function', function test() {
		expect( cross ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not an array', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				cross( value, [] );
			};
		}
	});

	it( 'should throw an error if the second argument is not an array', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				cross( [], value );
			};
		}
	});

	it( 'should throw an error if the input arrays are not of length 3', function test() {
		expect( foo ).to.throw( Error );
		expect( bar ).to.throw( Error );
		function foo() {
			cross( [1,2,3,4], [1,2,3] );
		}
		function bar() {
			cross( [1,2,3], [1,2] );
		}
	});

	it( 'should compute the cross product', function test() {
		var x, y,
			expected,
			actual;

		x = [ 1, 2, 3 ];

		y = [ 4, 5, 6 ];
		expected = [ -3, 6, -3 ];
		actual = cross( x, y );

		assert.deepEqual( actual, expected );

		// Parallel vectors:
		y = [ 2, 4, 6 ];
		expected = [ 0, 0, 0 ];
		actual = cross( x, y );

		assert.deepEqual( actual, expected );

		// Anti-parallel vectors:
		y = [ -2, -4, -6 ];
		expected = [ 0, 0, 0 ];
		actual = cross( x, y );

		assert.deepEqual( actual, expected );

		x = [ 4, -2, 1 ];
		y = [ 1, -1, 3 ];
		expected = [ -5, -11, -2 ];
		actual = cross( x, y );

		assert.deepEqual( actual, expected );
	});

});
