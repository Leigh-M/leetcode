const { createRandomGrid, createBlankGrid, setSeed } = require('./perfTestGridSetup');
const timer = require('./timer');

// for randomly populated test, create a large grid 1000 * 1000
const randomG = (createRandomGrid(1000, 1000));

// smaller 200 * 200 random grid
const randomG2 = (createRandomGrid(200, 200));

// for initial seed test, create all zero's grid
const initialGrid = createBlankGrid(200, 200);
// 'acorn' seed initial start
const seed = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];
const acornGrid = setSeed(seed, initialGrid);


// large 1000 x 1000 grid ~ 1000ms on my machine for 15 cycles, not including draw function
console.log(`Large 1000 * 1000 randomly populated grid, ms for 15 frames : ${timer(randomG, 15)}`);

// smaller 200 * 200 random grid ~ 1000ms on my machine for 430 cycles, not including draw func
console.log(`200 * 200 random grid, ms for 430 frames : ${timer(randomG2, 430)}`);

// 'acorn' seed on 200 * 200 grid ~ 1000ms for 500 frames, not incl draw func
console.log(`Acorn grid 200 * 200, ms for 450 frames : ${timer(acornGrid, 450)}`);


//  ----------- observations ---------------  //
// 200 * 200 grid runs 28* faster than 1000 * 1000
// In line with On^2 time complexity for the 2D array solution as expected
// 1000 / 2000 = 5 ^ 2 = 25

// The acorn seed initial only 7 live cells, 200 * 200 also ran 5% more quickly than
// random 200 * 200 grid

// will test 2d array version against hash version
