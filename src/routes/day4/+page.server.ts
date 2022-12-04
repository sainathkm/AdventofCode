import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day4.txt').then((res) =>
		res.text()
	);

	//split the data into an array
	const dataArray = data.split('\n');

	console.log(dataArray);

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Loop through the array for Part 1
	for (let i = 0; i < dataArray.length; i++) {
		// find the length of the each line
		const lineLength = dataArray[i].length;
	}

	// Return the results
	return { part1Result, part2Result };
};
