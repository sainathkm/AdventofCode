import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	//fetch data from the txt file
	const input = await fetch('https://adventofcode2022.vercel.app/day7.txt').then((res) =>
		res.text()
	);

	// Declare an array to store the results
	let part1Result = 0;
	let part2Result = 0;

	// Declare an array to store the data
	const lines = input.split('\n');

	// parse input
	const root: Directory = { name: '/', parent: null, files: [], directorieslist: {} };
	let currentDir = root;
	let currentLis = false;

	for (const line of lines) {
		if (line.startsWith('$ cd ')) {
			// changes directory
			currentLis = false;
			const path = line.slice(5);
			if (path === '/') {
				currentDir = root;
			} else if (path === '..') {
				currentDir = currentDir.parent ? currentDir.parent : root;
			} else {
				if (!currentDir.directorieslist.hasOwnProperty(path))
					throw new Error(`Invalid path: ${path} at ${line}`);
				currentDir = currentDir.directorieslist[path];
			}
		} else if (line === '$ ls') {
			// lists directory contents
			currentLis = true;
		} else if (line.startsWith('dir ')) {
			// starts with dir, is a directory
			const name = line.slice(4);
			if (!currentDir.directorieslist.hasOwnProperty(name)) {
				currentDir.directorieslist[name] = {
					name,
					parent: currentDir,
					files: [],
					directorieslist: {}
				};
			}
		} else if (line.match(/^\d+ .+$/)) {
			// starts with number, is a size & file
			const [size, name] = line.split(' ');
			currentDir.files.push({ name, size: Number(size) });
		} else if (line === '') {
			continue;
		} else {
			throw new Error('Invalid line: ' + line);
		}
	}

	const sizes: { name: string; size: number }[] = [];
	function part1(dir: Directory = root) {
		for (const [name, directory] of Object.entries(dir.directorieslist)) {
			sizes.push({ name, size: calcDirSize(directory) });
			part1(directory);
		}
	}
	part1();
	sizes.sort((a, b) => a.size - b.size);
	part1Result = sizes.filter((s) => s.size <= 100_000).reduce((a, b) => a + b.size, 0);

	const TOTAL_DISK_SIZE = 70_000_000;
	const NEED_FREE = 30_000_000;

	const currentUsed = calcDirSize(root);
	const currentFree = TOTAL_DISK_SIZE - currentUsed;
	const needToFree = NEED_FREE - currentFree;

	part2Result = sizes.find((s) => s.size > needToFree)?.size;

	function currentLoc(directory: Directory | null): string {
		if (directory?.parent === root) return '/';
		if (!directory?.parent) return '/';
		return currentLoc(directory.parent) + directory.parent.name + '/';
	}

	function calcDirSize(directory: Directory): number {
		let size = 0;
		for (const file of directory.files) {
			size += file.size;
		}
		for (const subdirectory of Object.values(directory.directorieslist)) {
			size += calcDirSize(subdirectory);
		}
		return size;
	}

	type File = {
		name: string;
		size: number;
	};

	interface Directory {
		name: string;
		files: File[];
		directorieslist: {
			[name: string]: Directory;
		};
		parent: Directory | null;
	}

	function isEmpty(obj: object) {
		return Object.keys(obj).length === 0;
	}

	// Return the results
	return { part1Result, part2Result };
};
