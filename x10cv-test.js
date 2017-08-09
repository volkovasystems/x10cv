const assert = require( "assert" );
const x10cv = require( "./x10cv.js" );

let Hello = function Hello( ){ };

Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

assert.equal( x10cv( Hello ), true, "should be equal to true" );

console.log( "ok" );
