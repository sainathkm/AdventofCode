import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('http://localhost:5174/day3.txt').then((res) => res.text());

	//split the data into an array
	const dataArray = data.split('\n');

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Loop through the array for Part 1
	for (let i = 0; i < dataArray.length; i++) {
		// find the length of the each line
		const lineLength = dataArray[i].length;
		const halfLineLength = lineLength / 2;

		for (let j = 0; j < halfLineLength; j++) {
			const char1 = dataArray[i][j];
			let result1Found = false;
			for (let k = halfLineLength; k < lineLength; k++) {
				const char2 = dataArray[i][k];
				if (char1 == char2) {
					// check if uppercase
					if (char1 == char1.toUpperCase()) {
						part1Result = part1Result + char1.charCodeAt(0) - 96 + 58;
					} else {
						part1Result = part1Result + char1.charCodeAt(0) - 96;
					}
					result1Found = true;
					break;
				}
			}
			if (result1Found) {
				break;
			}
		}
	}

	// Loop through the array for Part 2
	for (let i = 0; i < dataArray.length; i++) {
		// find the length of the each line

		// loop through each line
		const lineLength1 = dataArray[i].length;
		const lineLength2 = dataArray[i + 1].length;
		const lineLength3 = dataArray[i + 2].length;

		for (let k = 0; k < lineLength1; k++) {
			const char1 = dataArray[i][k];
			let result2Found = false;
			for (let l = 0; l < lineLength2; l++) {
				const char2 = dataArray[i + 1][l];
				if (char1 == char2) {
					for (let m = 0; m < lineLength3; m++) {
						const char3 = dataArray[i + 2][m];
						if (char1 == char3) {
							// check if uppercase

							if (char1 == char1.toUpperCase()) {
								part2Result = part2Result + char1.charCodeAt(0) - 96 + 58;
							} else {
								part2Result = part2Result + char1.charCodeAt(0) - 96;
							}
							result2Found = true;
							break;
						}
					}
					if (result2Found) {
						break;
					}
				}
				if (result2Found) {
					break;
				}
			}
			if (result2Found) {
				break;
			}
		}
		i = i + 2;
	}

	// Return the results
	return { part1Result, part2Result };
};
