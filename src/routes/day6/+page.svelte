<script lang="ts">
	import Page from '../+page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="bg-white ">
	<div class="px-8 pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
		<h1 class="text-4xl font-bold tracking-tight sm:text-4xl text-yellow-600">
			Advent of Code 2022 - Day 6
		</h1>
		<p class=" tracking-tight sm:text-xl">
			Visit <a href="https://adventofcode.com/2022/day/6" class="underline text-yellow-700">day 6</a
			> to read the documentation
		</p>

		<div class="pt-3 pb-3">
			<ul>
				<li>
					Part One Result: <strong> {data.part1Result} </strong>
				</li>
				<li>
					Part Two Result: <strong> {data.part2Result} </strong>
				</li>
			</ul>
		</div>
		<a href="/" class="underline text-yellow-800">Back</a>
	</div>
</div>
