# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mckennaleo/lotide`

**Require it:**

`const _ = require('@mckennaleo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first element of an array
* `function2(tail)`: returns the last element of an array
* `function3(middle)`: returns the middle element of an odd-numbered      array, and the two middle elements of an even-numbered array
* `function4(assertEqual)`: checks if two strings are equal
* `function5(eqArrays)`:  checks if two arrays are equal
* `function6(eqObjects)`: checks if two objects are equal
* `function7(countLetters)`:  returns an object with each letter from a string as keys, and the number of iterations of said letters as a value
* `function8(countOnly)`: takes an array as a first parameter, an object as the second parameter, returns an object counting the number of times each keys from the second parameter appear in the array
* `function9(findKeyByValue)`: finds which keys have a designated value within an object
* `function10(findKey)`: returns first key with searched value in object
* `function11(flatten)`: flattens nested arrays one level
* `function12(letterPositions)`: takes a string as a parameter and returns an object with the letters within the string for keys, and the position of each iteration of the letter as a value
* `function13(map)`: takes in an array as a parameter, returns a new array with just the first letter from each string within the first array
* `function14(takeUntil)`: takes in an array as a first parameter, a string or number as the second. returns a new array formed from the first array, stopping at the first iteration of the secon parameter 
* `function15(without)`: takes in an array as a first parameter, and an array as a second parameter. returns a new array constituted of every number or string in the first array that didn't also exist in the first
