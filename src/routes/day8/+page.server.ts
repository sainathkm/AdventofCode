import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const input = await fetch('https://adventofcode2022.vercel.app/day8.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Declare an array to store the data
	const lines = input.split('\n');

	// Part 1 & 2
	// Loop through the lines
	for (let i = 0; i < lines.length; i++) {
		// Get the line
		const line = lines[i];

		if (i == 0 || i == lines.length - 1) {
			part1Result = part1Result + line.length;
			continue;
		}

		// Loop through the line
		for (let j = 0; j < line.length; j++) {
			// Current Tree position : lines[i][j]
			const currentTreeHight = parseInt(lines[i][j]);

			if (j == 0 || j == line.length - 1) {
				part1Result++;
				continue;
			}

			// Check top
			let topVisible = true;
			let topVisiblityScore = 1;
			for (let k = i - 1; k >= 0; k--) {
				const topTreeHight = parseInt(lines[k][j]);

				if (topTreeHight >= currentTreeHight) {
					topVisible = false;
					break;
				}
			}
			// Check bottom
			let bottomVisible = true;
			for (let k = i + 1; k < lines.length; k++) {
				const bottomTreeHight = parseInt(lines[k][j]);

				if (bottomTreeHight >= currentTreeHight) {
					bottomVisible = false;
					break;
				}
			}

			// Check left
			let leftVisible = true;
			for (let k = j - 1; k >= 0; k--) {
				const leftTreeHight = parseInt(lines[i][k]);
				if (leftTreeHight >= currentTreeHight) {
					leftVisible = false;
					break;
				}
			}

			// Check right
			let rightVisible = true;
			for (let k = j + 1; k < line.length; k++) {
				const rightTreeHight = parseInt(lines[i][k]);
				if (rightTreeHight >= currentTreeHight) {
					rightVisible = false;
					break;
				}
			}

			if (topVisible || bottomVisible || leftVisible || rightVisible) {
				part1Result++;
			}
		}
	}

	// Part 2
	const rows = lines.map((line) => line.split('').map(Number));

	// transpose
	const columns = rows[0].map((_, colIndex) => rows.map((row) => row[colIndex]));
	let highestScenicScore = 0;
	for (let y = 0; y < rows.length; y++) {
		for (let x = 0; x < rows[0].length; x++) {
			const tree = rows[y][x];
			const treesToLeft = rows[y].slice(0, x).reverse();
			const treesToRight = rows[y].slice(x + 1);
			const treesAbove = columns[x].slice(0, y).reverse();
			const treesBelow = columns[x].slice(y + 1);
			let scenicScore = 0;
			if (y in [0, rows.length - 1] || x in [0, rows[0].length - 1]) {
				scenicScore = 0;
			} else {
				const seeLeft = treesViewable(tree, treesToLeft);
				const seeRight = treesViewable(tree, treesToRight);
				const seeAbove = treesViewable(tree, treesAbove);
				const seeBelow = treesViewable(tree, treesBelow);
				scenicScore = seeLeft * seeRight * seeAbove * seeBelow;
			}
			if (scenicScore > highestScenicScore) {
				highestScenicScore = scenicScore;
			}
		}
	}

	part2Result = highestScenicScore;

	// Return the results
	return { part1Result, part2Result };
};

function treesViewable(treeHeight: number, inFront: number[]) {
	if (inFront.length === 0) return 0;
	let viewable = 1;
	let i = 0;
	while (i < inFront.length - 1 && inFront[i] < treeHeight) {
		viewable++;
		i++;
	}
	return viewable;
}
