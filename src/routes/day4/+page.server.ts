import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('https://adventofcode2022.vercel.app/day4.txt').then((res) =>
		res.text()
	);

	//split the data into an array
	const dataArray = data.split('\n');

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Loop through the array for Part 1
	for (let i = 0; i < dataArray.length; i++) {
		const sectionArray = dataArray[i].split(',');

		//console.log(sectionArray);

		const Elf1SectionArray = sectionArray[0].split('-');
		const Elf2SectionArray = sectionArray[1].split('-');

		// Check if the first elf's section is within the second elf's section
		if (
			(parseInt(Elf1SectionArray[0]) <= parseInt(Elf2SectionArray[0]) &&
				parseInt(Elf1SectionArray[1]) >= parseInt(Elf2SectionArray[1])) ||
			(parseInt(Elf1SectionArray[0]) >= parseInt(Elf2SectionArray[0]) &&
				parseInt(Elf1SectionArray[1]) <= parseInt(Elf2SectionArray[1]))
		) {
			part1Result++;
		}

		// Check if the two sections overlap
		if (
			(parseInt(Elf1SectionArray[0]) <= parseInt(Elf2SectionArray[0]) &&
				parseInt(Elf1SectionArray[1]) >= parseInt(Elf2SectionArray[0])) ||
			(parseInt(Elf1SectionArray[0]) >= parseInt(Elf2SectionArray[0]) &&
				parseInt(Elf1SectionArray[0]) <= parseInt(Elf2SectionArray[1]))
		) {
			part2Result++;
		}
	}

	// Return the results
	return { part1Result, part2Result };
};
