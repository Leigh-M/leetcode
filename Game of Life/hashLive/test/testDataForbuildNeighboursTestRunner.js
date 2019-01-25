const tests = [
  {
    liveCells: [
      [100, 100], [101, 100], [102, 100],
    ],
    expectedMapLength: 15,
    // [key, count] pairs
    adj: [['100,100', 1], ['101,100', 2], ['102,100', 1]],
  },
  {
    liveCells: [
      [100, 100], [101, 100], [102, 100], [101, 99],
    ],
    expectedMapLength: 18,
    adj: [['100,100', 2], ['101,100', 3], ['101,99', 3], ['102,100', 2]],
  },
  {
    // 'acorn' seed
    liveCells: [
      [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
    ],
    expectedMapLength: 34,
    adj: [['101,99', 3], ['102,99', 3], ['102,100', 2], ['103,100', 2], ['99,100', 1], ['99,99', 1], ['100,99', 3], ['100,98', 1], ['100,97', 1], ['101,97', 1], ['102,97', 1], ['102,98', 2], ['103,98', 1], ['104,98', 1], ['104,99', 3], ['105,99', 3], ['106,99', 2], ['107,99', 1], ['107,100', 1], ['107,101', 1], ['106,101', 2], ['105,101', 3], ['104,101', 2], ['103,101', 1], ['102,101', 1], ['101,101', 2], ['100,101', 2], ['99,101', 1], ['100,100', 1], ['101,100', 1], ['103,99', 1], ['104,100', 2], ['105,100', 2], ['106,100', 0]],
  },
];

module.exports = tests;