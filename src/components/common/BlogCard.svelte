<script>
	import { _ } from 'svelte-i18n';
	import BlogLink from './BlogLink.svelte';
	import BlogDateTime from './BlogDateTime.svelte';
	import { PUBLIC_API_URL } from '$env/static/public'


	export let image;
	export let date;
	export let timeToRead;
	export let title;
	export let slug;
	export let className;
	export let colorIcon = "white";

</script>

<div class={`flex flex-col 
	xl:w-[365px]
	w-[337px]
	h-full z-20 relative ${className}`}>
	<div class="h-[17rem] xl:h-80 overflow-hidden mb-4">
		<img
			class="object-cover h-full w-full"
			src={PUBLIC_API_URL+`/assets/${image}?width=400&height=400&fit=cover&format=webp&quality=50`}
			alt="blog thumbnail"
			fetchpriority="low"
		/>
	</div>
	<BlogDateTime {date} {timeToRead} className="" color={colorIcon}/>
	<h3
		class="font-inter font-semibold text-[1.375rem] leading-[1.938rem] mt-8 text-left mb-5"
	>
		{@html title}
	</h3>
	<BlogLink {slug} />
</div>
