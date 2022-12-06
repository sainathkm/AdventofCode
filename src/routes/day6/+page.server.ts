import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day6.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = 0;
	let part1ResultFound = false;
	let part2Result = 0;
	let part2ResultFound = false;

	// Part 1
	for (let i = 0; i < data.length; i++) {
		const char1 = data.charAt(i);
		const char2 = data.charAt(i + 1);
		const char3 = data.charAt(i + 2);
		const char4 = data.charAt(i + 3);

		// Check if char1, char2, char3, char4 are all different
		if (
			char1 != char2 &&
			char1 != char3 &&
			char1 != char4 &&
			char2 != char3 &&
			char2 != char4 &&
			char3 != char4
		) {
			part1ResultFound = true;
			part1Result = i + 4;
			break;
		}
	}

	// Part 2
	for (let i = 0; i < data.length; i++) {
		let uniqueflag = false;
		for (let j = i; j < i + 13; j++) {
			for (let k = j + 1; k < i + 13; k++) {
				const char1 = data.charAt(j);
				const char2 = data.charAt(k);
				if (char1 == char2) {
					uniqueflag = true;
					break;
				}
			}
		}
		if (!uniqueflag) {
			part2ResultFound = true;
			part2Result = i + 14;
			break;
		}
	}

	// Return the results
	return { part1Result, part2Result };
};
