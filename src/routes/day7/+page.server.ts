import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day7.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = 0;
	let part1ResultFound = false;
	let part2Result = 0;
	let part2ResultFound = false;

	// Declare an array to store the data
	const dataArray = data.split('\n');

	console.log(dataArray);

	// Declare an array to store the answers
	let eachlineArray: string[];

	// Loop through the data array and store each line in the eachlineArray
	for (let i = 0; i < dataArray.length; i++) {
		eachlineArray[i] = dataArray[i].split('');
	}

	// Loop through the eachlineArray
	for (let i = 0; i < eachlineArray.length; i++) {
		console.log(eachlineArray[i]);
	}

	// Return the results
	return { part1Result, part2Result };
};
