/**
*
*	COMPUTE: cross
*
*
*	DESCRIPTION:
*		- Computes the cross product between two numeric arrays.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// CROSS PRODUCT //

/**
* FUNCTION: cross( x, y )
*	Computes the cross product between two numeric arrays.
*
* @param {Array} x - numeric array
* @param {Array} y - numeric array
* @returns {Number} cross product
*/
function cross( x, y ) {
	if ( !Array.isArray( x ) ) {
		throw new TypeError( 'cross()::invalid input argument. First argument must be an array.' );
	}
	if ( !Array.isArray( y ) ) {
		throw new TypeError( 'cross()::invalid input argument. Second argument must be an array.' );
	}
	if ( x.length !== 3 || y.length !== 3 ) {
		throw new Error( 'cross()::invalid input argument. Input arrays must be of length 3.' );
	}
	return [
		x[1]*y[2]-x[2]*y[1],
		x[2]*y[0]-x[0]*y[2],
		x[0]*y[1]-x[1]*y[0]
	];
} // end FUNCTION cross()


// EXPORTS //

module.exports = cross;
