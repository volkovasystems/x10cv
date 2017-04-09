
const x10cv = require( "./x10cv.js" );

let Hello = function Hello( ){ };

Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

console.log( x10cv( Hello ) );
