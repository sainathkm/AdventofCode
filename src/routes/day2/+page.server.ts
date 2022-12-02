import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const data = await fetch('http://localhost:5174/day2.txt').then((res) => res.text());

	//split the data into an array
	const dataArray = data.split('\n');

	// Replace the array with an array of objects of Number
	const dataReplace = dataArray.map((num) =>
		num
			.replace(/A/g, '1')
			.replace(/B/g, '2')
			.replace(/C/g, '3')
			.replace(/X/g, '1')
			.replace(/Y/g, '2')
			.replace(/Z/g, '3')
	);

	let ScoreElfPart1 = 0;
	let ScoreElfPart2 = 0;

	//Rock Paper Scissor
	// 3 < 1 - 1 Rock wins
	// 3 > 2 - 3 Scissor wins
	// 1 < 2 - 2 Paper wins

	// Loop through the array
	for (let i = 0; i < dataReplace.length; i++) {
		ScoreElfPart1 = ScoreElfPart1 + parseInt(dataReplace[i][2]);
		if (dataReplace[i][0] != dataReplace[i][2]) {
			if (dataReplace[i][2] == '3') {
				// 3 > 2 - 3 Scissor wins
				if (dataReplace[i][0] == '2') {
					ScoreElfPart1 = ScoreElfPart1 + 6;
				}
			} else if (dataReplace[i][2] == '2') {
				// 1 < 2 - 2 Paper wins
				if (dataReplace[i][0] == '1') {
					ScoreElfPart1 = ScoreElfPart1 + 6;
				}
			} else if (dataReplace[i][2] == '1') {
				// 3 < 1 - 1 Rock wins
				if (dataReplace[i][0] == '3') {
					ScoreElfPart1 = ScoreElfPart1 + 6;
				}
			}
		} else {
			// Draw
			ScoreElfPart1 = ScoreElfPart1 + 3;
		}
	}

	//Rock Paper Scissor
	// 3 < 1 - 1 Rock wins
	// 3 > 2 - 3 Scissor wins
	// 1 < 2 - 2 Paper wins

	// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
	// Loop through the array
	for (let i = 0; i < dataReplace.length; i++) {
		if (dataArray[i][2] == 'X') {
			// You need to lose
			if (dataReplace[i][0] == '1') {
				ScoreElfPart2 = ScoreElfPart2 + 3;
			} else if (dataReplace[i][0] == '2') {
				ScoreElfPart2 = ScoreElfPart2 + 1;
			} else if (dataReplace[i][0] == '3') {
				ScoreElfPart2 = ScoreElfPart2 + 2;
			}
			console.log(dataArray[i][0], dataArray[i][2], dataReplace[i][0], 0, ' Loss - X');
		} else if (dataArray[i][2] == 'Y') {
			// You need to end the round in a draw
			ScoreElfPart2 = ScoreElfPart2 + parseInt(dataReplace[i][0]) + 3;
			console.log(dataArray[i][0], dataArray[i][2], dataReplace[i][0], 3, ' Draw Y ');
		} else if (dataArray[i][2] == 'Z') {
			// You need to win
			if (dataReplace[i][0] == '1') {
				ScoreElfPart2 = ScoreElfPart2 + 2 + 6;
			} else if (dataReplace[i][0] == '2') {
				ScoreElfPart2 = ScoreElfPart2 + 3 + 6;
			} else if (dataReplace[i][0] == '3') {
				ScoreElfPart2 = ScoreElfPart2 + 1 + 6;
			}
			console.log(dataArray[i][0], dataArray[i][2], dataReplace[i][0], 6, ' Win - Z');
		}
	}

	// Return the results
	return { ScoreElfPart1, ScoreElfPart2 };
};
