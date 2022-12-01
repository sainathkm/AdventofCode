<script lang="ts">
	import Page from '../+page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

Day 1 of 2022 adventofcode.com/2022/day/1

<ul>
	<li>
		Highest Calories Carried: <strong> {data.highest} </strong>
	</li>
	<li>
		Sum of top 3 Calories Carried: <strong> {data.top3sum} </strong>
	</li>
</ul>
