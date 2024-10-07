<script>
	import { _ } from 'svelte-i18n';
	import BlogCard from '../common/BlogCard.svelte';

	export let blogs = [];
</script>

<div class="relative pt-16">
	<div class="container mx-auto text-center pb-10 lg:pb-16 z-20 relative">
		<h6 class="text-Red font-semibold font-inter text-xl mx-auto">
			{$_('our_latest')}
		</h6>
		<h2
			class="text-bgDarkBlue font-extrabold font-poppins text-5xl lg:text-6xl mx-auto leading-[44px] lg:leading-[60px] mt-6 lg:mt-2"
		>
			{$_('blog_articles')}
		</h2>

		<div
			class="flex flex-col items-center md:flex-wrap lg:flex-nowrap md:items-start md:flex-row justify-center mt-14 lg:mt-20 gap-12"
		>
			{#each blogs as blog}
				<BlogCard
					image={blog.image.id}
					date={blog.date_created}
					timeToRead={blog.time_to_read}
					title={blog.title}
					slug={blog.slug}
					className="bg-transparent"
				/>
			{/each}
		</div>
	</div>
	<div class="absolute lg:hidden bg-bgGrey z-0 top-0 left-0 right-0 bottom-0" />
</div>
