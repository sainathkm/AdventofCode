<script lang="ts">
	import Page from '../+page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

Day 1 of 2022 adventofcode.com/2022/day/1

<ul>
	<li>
		Elf Score from Part 1: <strong> {data.ScoreElfPart1} </strong>
	</li>
	<li>
		Elf Score from Part 2: <strong> {data.ScoreElfPart2} </strong>
	</li>
</ul>
