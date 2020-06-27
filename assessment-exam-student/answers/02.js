/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  const sorted = arr.sort(function(a, b) {
    return a - b;
  });
  const half = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    return round(sorted[half]);

  } else {
    return round(Math.round(sorted[half - 1] + sorted[half]) / 2);
  }
};

// Don't change below:

module.exports = { median };
