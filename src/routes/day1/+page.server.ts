import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day1.txt').then((res) =>
		res.text()
	);

	//split the data into an array
	const dataArray = data.split('\n');

	//convert the array into numbers
	const datanumbers = dataArray.map((num) => parseInt(num));

	// Define an array to store the results
	const calories = [];
	let calorysum = 0;
	let calorycount = 0;

	// Loop through the array
	for (let i = 0; i < datanumbers.length; i++) {
		if (!isNaN(datanumbers[i])) {
			calorysum = calorysum + datanumbers[i];
		} else {
			calories[calorycount] = calorysum;
			calorycount = calorycount + 1;
			calorysum = 0;
		}
	}

	// Find the highest number in the array
	const highest = Math.max(...calories);

	// Find the top 3 numbers in the array
	const top3 = calories.sort((a, b) => b - a).slice(0, 3);

	// Sum of the top 3 numbers
	const top3sum = top3.reduce((a, b) => a + b, 0);

	// Return the results
	return { highest, top3sum };
};
