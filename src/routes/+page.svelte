<script>
	import Star from '$lib/star.svelte';
</script>

<div class="bg-white ">
	<div class="px-8 pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
		<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
			Advent of Code <span class="text-yellow-700"> 2022</span>
		</h1>
		<p class=" tracking-tight sm:text-xl">
			Visit <a href="https://adventofcode.com/" class="underline text-yellow-700"
				>adventofcode.com</a
			> to read the documentation
		</p>
		<p class=" tracking-tight sm:text-xl">
			Code at <a href="https://github.com/sainathkm/AdventofCode" class="underline text-yellow-500"
				>github.com/sainathkm</a
			>
		</p>

		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block py-2 align-middle md:px-6 lg:px-8">
					<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<table class="min-w-full divide-y divide-gray-300">
							<thead class="bg-gray-50">
								<tr>
									<th
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
										>Day</th
									>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>Details</th
									>
									<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"> Result </th>
									<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6" />
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								{#each Array(4) as _, i}
									<tr>
										<td
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
											>{i + 1}</td
										>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											><a href="https://adventofcode.com/2022/day/{i + 1}" class="underline">link</a
											></td
										>
										<td
											class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
										>
											<a href="/day{i + 1}" class="text-yellow-600 hover:text-indigo-900">Result</a>
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											><div class="flex-shrink-0 flex pr-5"><Star /><Star /></div></td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
