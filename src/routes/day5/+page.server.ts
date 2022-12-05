import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day5.txt').then((res) =>
		res.text()
	);


	// [N]         [C]     [Z]            
	// [Q] [G]     [V]     [S]         [V]
	// [L] [C]     [M]     [T]     [W] [L]
	// [S] [H]     [L]     [C] [D] [H] [S]
	// [C] [V] [F] [D]     [D] [B] [Q] [F]
	// [Z] [T] [Z] [T] [C] [J] [G] [S] [Q]
	// [P] [P] [C] [W] [W] [F] [W] [J] [C]
	// [T] [L] [D] [G] [P] [P] [V] [N] [R]
	//  1   2   3   4   5   6   7   8   9 

	let CrateStackArray[1][] = ['T', 'P', 'Z', 'C', 'S', 'L', 'Q', 'N'];
	let CrateStackArray[2][] = ['L', 'P', 'T', 'V', 'H', 'C', 'G'];
	let CrateStackArray[3][] = ['D', 'C', 'Z', 'F'];
	let CrateStackArray[4][] = ['G', 'W', 'T', 'D', 'L', 'M', 'C', 'V'];
	let CrateStackArray[5][] = ['P', 'W', 'C'];
	let CrateStackArray[6][] = ['P', 'F', 'J', 'D', 'C', 'T', 'S', 'Z'];
	let CrateStackArray[7][] = ['V', 'W', 'G', 'B', 'D'];
	let CrateStackArray[8][] = ['N', 'J', 'S', 'Q', 'H', 'W'];
	let CrateStackArray[9][] = ['R', 'C', 'Q', 'F', 'S', 'L', 'V'];






	//split the data into an array
	const dataArray = data.split('\n');

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Loop through the array for Part 1
	for (let i = 0; i < dataArray.length; i++) {
		const sectionArray = dataArray[i].split(',');
	}

	// Return the results
	return { part1Result, part2Result };
};
