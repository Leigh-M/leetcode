Production file returns to pass each test on Leetcode website and outputs any errors to a txt file rather than console log
Test folder contains passing tests and console logs results.

For this problem in finding the the longest prefix match across input strings, there are several approaches, first approach (1) was to run two loops from single character matches across the first character in each array of strings, if they all match then loop++ to build on the matched prefix. 

Next approach (2) was to work the oppsite, find the shortest string in the array, and see if that whole string is contained in each other input string, if not then pop the last character and re-check, so the opposite approach to above. 

Which is most efficient would require some knowledge of the usual string inputs, if usually it is a low number of characters that match then approach 1, if usually the majority of strings do match more efficient to use approach 2.
