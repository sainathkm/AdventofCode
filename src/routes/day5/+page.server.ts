import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day5.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = '';
	let part2Result = '';

	// [N]         [C]     [Z]
	// [Q] [G]     [V]     [S]         [V]
	// [L] [C]     [M]     [T]     [W] [L]
	// [S] [H]     [L]     [C] [D] [H] [S]
	// [C] [V] [F] [D]     [D] [B] [Q] [F]
	// [Z] [T] [Z] [T] [C] [J] [G] [S] [Q]
	// [P] [P] [C] [W] [W] [F] [W] [J] [C]
	// [T] [L] [D] [G] [P] [P] [V] [N] [R]
	//  1   2   3   4   5   6   7   8   9

	// part 1
	let crateStack1Array: string[][] = [
		['T', 'P', 'Z', 'C', 'S', 'L', 'Q', 'N'],
		['L', 'P', 'T', 'V', 'H', 'C', 'G'],
		['D', 'C', 'Z', 'F'],
		['G', 'W', 'T', 'D', 'L', 'M', 'C', 'V'],
		['P', 'W', 'C'],
		['P', 'F', 'J', 'D', 'C', 'T', 'S', 'Z'],
		['V', 'W', 'G', 'B', 'D'],
		['N', 'J', 'S', 'Q', 'H', 'W'],
		['R', 'C', 'Q', 'F', 'S', 'L', 'V']
	];

	// part 2
	let crateStack2Array: string[][] = [
		['T', 'P', 'Z', 'C', 'S', 'L', 'Q', 'N'],
		['L', 'P', 'T', 'V', 'H', 'C', 'G'],
		['D', 'C', 'Z', 'F'],
		['G', 'W', 'T', 'D', 'L', 'M', 'C', 'V'],
		['P', 'W', 'C'],
		['P', 'F', 'J', 'D', 'C', 'T', 'S', 'Z'],
		['V', 'W', 'G', 'B', 'D'],
		['N', 'J', 'S', 'Q', 'H', 'W'],
		['R', 'C', 'Q', 'F', 'S', 'L', 'V']
	];

	//split the data into an array
	const dataArray = data.split('\n');

	const sectionArray: string[] = [];

	// Loop through the array for Part 1
	for (let i = 0; i < dataArray.length; i++) {
		sectionArray[i] = dataArray[i].split(' ');
	}

	// Loop through the section array
	for (let i = 0; i < sectionArray.length; i++) {
		const howmanytoMove = parseInt(sectionArray[i][1]);
		const movefrom = parseInt(sectionArray[i][3]);
		const moveto = parseInt(sectionArray[i][5]);

		let crateStack2TempArray: string[] = [];
		let k = 1;

		for (let j = 0; j < howmanytoMove; j++) {
			// Move the crate
			const crate1 = crateStack1Array[movefrom - 1].pop();
			crateStack1Array[moveto - 1].push(crate1);

			// Move the crate
			const crate2 = crateStack2Array[movefrom - 1].pop();
			crateStack2TempArray[howmanytoMove - k] = crate2;
			k++;
		}

		// Move the crateSrack2TempArray to crateStack2Array push
		for (let j = 0; j < crateStack2TempArray.length; j++) {
			crateStack2Array[moveto - 1].push(crateStack2TempArray[j]);
		}

		console.log(howmanytoMove, movefrom, moveto);

		console.log('1 : ' + crateStack2Array[0]);
		console.log('2 : ' + crateStack2Array[1]);
		console.log('3 : ' + crateStack2Array[2]);
		console.log('4 : ' + crateStack2Array[3]);
		console.log('5 : ' + crateStack2Array[4]);
		console.log('6 : ' + crateStack2Array[5]);
		console.log('7 : ' + crateStack2Array[6]);
		console.log('8 : ' + crateStack2Array[7]);
		console.log('9 : ' + crateStack2Array[8]);
	}

	// Loop through the crate stack array
	for (let i = 0; i < crateStack1Array.length; i++) {
		// Check if the stack is empty
		if (crateStack1Array[i].length != 0) {
			part1Result = part1Result + crateStack1Array[i][crateStack1Array[i].length - 1];
		}
	}

	// Loop through the crate stack array
	for (let i = 0; i < crateStack2Array.length; i++) {
		// Check if the stack is empty
		if (crateStack2Array[i].length != 0) {
			part2Result = part2Result + crateStack2Array[i][crateStack2Array[i].length - 1];
		}
	}

	// Return the results
	return { part1Result, part2Result };
};
