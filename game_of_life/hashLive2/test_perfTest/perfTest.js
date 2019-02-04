const createRandomSeed = require('./seedSetup');
const timer = require('./timer');

// 'acorn' seed initial start
const acorn = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];
console.log(`Acorn grid 200 * 200, ms for 1700 frames : ${timer(acorn, 200, 200, 1700)}`);
// ~ 1700 cycles per second on 'acorn', 7 initial seed cells

// for randomly populated test, emulate a large grid of live cells 1000 * 1000
const randomG = (createRandomSeed(1000, 1000));
// large 1000 x 1000 grid ~ 1000ms on my machine for 15 cycles, not including draw function
console.log(`Large 1000 * 1000 randomly populated grid, 9000ms for 5 frames : ${timer(randomG, 1000, 1000, 5)}`);

// smaller 200 * 200 random cells
const randomG2 = (createRandomSeed(200, 200));
// smaller 200 * 200 random grid ~ 1000ms on my machine for 430 cycles, not including draw func
console.log(`200 * 200 random grid, ms for 27 frames : ${timer(randomG2, 200, 200, 27)}`);

//  ----------- observations ---------------  //
/*
For small seed input very fast irrespective of size of World. For large World, ~ 500,000 live
cells, algorithm struggles to build neighbouring cell hash Map ~ 1,000,000. 5secs per cycle

Will test hashWorld method and use similar to array version but hashed keys
Also memoization for known data

In production would count input length, for smaller live cells size use this hashLife version,
for larger live cells use other options
*/

module.exports = timer;
