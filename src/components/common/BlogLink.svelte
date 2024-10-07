<script>
	import { _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {handleRouteChange } from '../../lib/navigate';

	import blogArrow from '$lib/assets/img/blog-arrow.svg';

	export let slug;
	const handleClick = () => {
		//goto(`/${$page.params.locale}/blog/${slug}`);
		handleRouteChange($page,"/blog/"+slug);
	};
</script>

<button
	class="group w-[10.5rem] lg:w-14 ml-[-1rem] lg:hover:w-[10.5rem] h-10 link-wrapper relative cursor-pointer z-30"
	on:click={handleClick}
>
	<p
		class="link-text font-inter font-bold text-base underline underline-offset-4 leading-5 absolute top-0 bottom-0 text-center py-2 left-[1rem] whitespace-nowrap text-Red lg:text-transparent lg:group-hover:text-Red"
	>
		{$_('read_article')}
	</p>
	<img
		class="float-right lg:group-hover:rotate-[45deg] transition duration-300"
		src={blogArrow}
		alt="red arrow link"
		height="40"
		width="40"
	/>
</button>

<style lang="postcss">
	.link-wrapper {
		transition: all 250ms cubic-bezier(0.03, -0.17, 0.07, 1.77);
		transition-delay: 60ms;
		transition-duration: 400ms;
	}
	.link-text {
		transition-duration: 300ms, 200ms;
	}
</style>
