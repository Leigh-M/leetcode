# Leetcode
Solutions to https://leetcode.com programming problems - view all 700 problems here: https://leetcode.com/problemset/all/

Production file returns to pass each test on Leetcode website and if appropriate outputs any errors to a txt file

Test folder contains passing tests from dynamically generated tests using Mocha/ chai and console logs results including some test/ debug working

To run each puzzle, assuming NodeJS installed, copy the main js file in the test folder (eg: ../leetcode/longest_prefix/test/longest_prefix.js) to your local system, and execute it from a terminal as: node longest_prefix.js it will call the main function and run with a test example

To run all the tests git clone the Leetcode repo and in your local Leetcode folder, NPM install Mocha & Chai if not already installed: 
npm i -D Mocha Chai

From terminal navigate to the desired subfolder within Leetcode and run: 
mocha

It defaults to the test folder within the current subfolder and should run all tests via Mocha/ Chai BDD style

*note, Mocha uses anonymous function() rather than () => to ensure correct context object

