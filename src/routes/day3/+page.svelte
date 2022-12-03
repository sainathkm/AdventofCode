<script lang="ts">
	import Page from '../+page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

Day 1 of 2022 adventofcode.com/2022/day/1

<ul>
	<li>
		Answer of Part 1: <strong> {data.part1Result} </strong>
	</li>
	<li>
		Answer of Part 2: <strong> {data.part2Result} </strong>
	</li>
</ul>
