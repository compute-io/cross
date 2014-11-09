'use strict';

var cross = require( './../lib' );

// Parallel vectors:
console.log( cross( [1,-2,3], [2,-4,6] ) );
// returns [ 0, 0, 0 ]

// Anti-parallel vectors:
console.log( cross( [-1,2,-3], [2,-4,6] ) );
// returns [ 0, 0, 0 ]

// Non-parallel vectors:
console.log( cross( [4,-2,1], [1,-1,3] ) );
// returns [ -5, -11, -2 ]
