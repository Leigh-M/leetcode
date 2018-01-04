Production file returns to pass each test on Leetcode website and outputs any errors to a txt file rather than console log
Test folder contains passing tests and console logs results.

For this problem in finding the the longest prefix match across input strings, there are several approaches, first approach (V1) was to run two loops from a single character on the first string in the array, then check the next, if they all match then loop++ to build on the matched prefix. 

Next approach (2) was to work in reverse, find the shortest string in the array, and see if that whole string is contained in each other input string, if not then slice at a lower character and re-check all indexes in array for the match. 

Which is most efficient would require some knowledge of the usual string inputs, if usually it is a low number of characters that match then approach 1, if usually the majority of strings do match more efficient to use approach 2 - as it turns out V2 for the Leetcode sample data, the V2 solution was in the top 15% and ran in less time.
