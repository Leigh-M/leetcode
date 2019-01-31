// Just copied all these perfTest in from hashLive - need to edit them to work for this hashWorld

const createRandomSeed = require('./seedSetup');
const timer = require('./timer');

// 'acorn' seed initial start
const seed = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];
console.log(`Acorn grid 200 * 200, ms for 36 frames : ${timer(seed, 200, 200, 36)}`);
// ~ 36 cycles per second on 'acorn', 7 initial seed cells

// for randomly populated test, emulate a large grid of live cells 1000 * 1000
const randomG = (createRandomSeed(1000, 1000));
// large 1000 x 1000 grid ~ 1000ms on my machine for 15 cycles, not including draw function
console.log(`Large 1000 * 1000 randomly populated grid, 7000ms for 5 frames : ${timer(randomG, 1000, 1000, 5)}`);

// smaller 200 * 200 random cells
const randomG2 = (createRandomSeed(200, 200));
// smaller 200 * 200 random grid ~ 1000ms on my machine for 430 cycles, not including draw func
console.log(`200 * 200 random grid, ms for 35 frames : ${timer(randomG2, 200, 200, 34)}`);


//  ----------- observations ---------------  //
/*
Populated / unpopulated doesn't make a difference as expected
Size of matrix increases runtime x O(n) as expected

Not faster than 2d array version currently, will look at improving performance

In production would count input length, for smaller live cells size use hashLife version,
tracking only live cells, for larger live cells use 2d array currently
*/

module.exports = timer;
