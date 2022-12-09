import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const input = await fetch('https://adventofcode2022.vercel.app/day9.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Declare an array to store the data
	const lines = input.split('\n');

	// Return the results
	return { part1Result, part2Result };
};
