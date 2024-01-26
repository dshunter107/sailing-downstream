import { pruneArray } from "../../main/PruneArray/PruneArray";

// these are bad arrays 
let nullArray = null;
let undefinedArray = undefined;
let emptyArray = [];
let emptyObject = {}
let integerFilledObject = {firstInteger: 1, secondInteger: 2};
let insufficientArray = [3, 6, 2, 5];
let badSizeArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let stringInArray = ['a', 1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubleInArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9.2];

// these are good arrays
let integers = [1, 4, 6, 3, 2, 0, 7, 5, 7, 1];
let integers20 = [0, 1.0, 2, 3, 4, 5, 6, 7, 8.00, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let largeArray = generateLargeArray();


test("null array error", () => expect( () => 
		{ pruneArray(nullArray)}).toThrow("The input parameter must be an array of integers"));
test("undefined object error", () => expect( () => 
		{ pruneArray(nondefinedObject)}).toThrow("nondefinedObject is not defined"));
test("undefined parameter error", () => expect( () => 
		{ pruneArray()}).toThrow("The input parameter must be an array of integers"));
test("undefined object value error", () => expect( () => 
		{ pruneArray(undefinedArray)}).toThrow("The input parameter must be an array of integers"));
test("empty array error", () => expect( () => 
		{ pruneArray(emptyArray)}).toThrow("The input parameter must be an array of integers"));
test("empty object error", () => expect( () => 
		{ pruneArray(emptyObject)}).toThrow("The input parameter must be an array of integers"));
test("integer object error", () => expect( () => 
		{ pruneArray(integerFilledObject)}).toThrow("The input parameter must be an array of integers"));
test("insufficient array error", () => expect( () => 
		{ pruneArray(insufficientArray)}).toThrow("The amount of integers must be a multiple of 10"));
test("bad array error", () => expect( () => 
		{ pruneArray(badSizeArray)}).toThrow("The amount of integers must be a multiple of 10"));

test("string in array error", () => expect( () => 
		{ pruneArray(stringInArray)}).toThrow(
				"All elements in array must be integers. " + stringInArray[0] + " found at " + 0));
test("double in array error", () => expect( () => 
		{ pruneArray(doubleInArray)}).toThrow(
				"All elements in array must be integers. " + doubleInArray[9] + " found at " + 9));

test("base array size test", () => expect(pruneArray(integers).length).toEqual(sizeAfterTrimming(integers.length)));
test("array 20 size test", () => expect(pruneArray(integers20).length).toEqual(sizeAfterTrimming(integers20.length)));
test("base array size test", () => expect(pruneArray(largeArray).length).toEqual(sizeAfterTrimming(largeArray.length)));

test("base test", () => expect(pruneArray(integers)).toStrictEqual([4, 0, 5]));
test("good test 20 ", () => expect(pruneArray(integers20)).toStrictEqual([1, 5, 7, 11, 13, 17, 19]));


function generateLargeArray(){
	let largeArray = [];
	for(let i = 0; i < 500; i++) {
		largeArray.push(i);
	}
	return largeArray;
}

function sizeAfterTrimming(length) {
	let firstPruning = length / 2;
	let secondPruning = Math.ceil(length / 3);
	let doublyRemoved = Math.ceil(length / 6);
	
	return length - firstPruning - secondPruning + doublyRemoved;
}

