/**
 * This function takes as a parameter a list of integers and returns a new array with 
 * elements that are at positions that are multiples of 2 or 3 removed. position '0' is 
 * considered a multiple of 2 & 3. 
 * 
 * An error is thrown if the parameter is not an array  of integers with a size equal to 
 * a multiple of 10. 
 */
export function pruneArray(integers) {
	if(integers == null || !Array.isArray(integers) || integers.length == 0) {
		throw "The input parameter must be an array of integers";
	} else if(integers.length %10 != 0) {
		throw "The amount of integers must be a multiple of 10";
	} else {
		for(let index in integers) {
			if(!Number.isInteger(integers[index])) {
				throw "All elements in array must be integers. " + integers[index] + " found at " + index;
			}
		}
	}
	let prunedIntegers = [];
	for(let arrayLocation in integers) {
		if(arrayLocation % 2 != 0 && arrayLocation % 3 != 0) {
			prunedIntegers.push(integers[arrayLocation]);
		}
	}
	return prunedIntegers;
}