<script>
	import { _, locale } from 'svelte-i18n';

	import FeaturedBlog from '../../../components/FeaturedBlog/FeaturedBlog.svelte';
	import BlogCard from '../../../components/common/BlogCard.svelte';
	import GeneralPanel from '../../../components/Panels/GeneralPanel.svelte';

 

	$: currentLocale = $locale;

	export let data;
	$: ({ featuredBlog, articles } = data);
</script>

<svelte:head>
	<title
		>{currentLocale == 'en-US'
			? 'Techsy - Web agency you can count on!'
			: 'Techsy - Veebiagentuur, kellele saab loota!'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? 'Techsy is a web agency that builds brands from every angle. Today, tomorrow and years from now. Web & mobile app development, maintenance and marketing. Software development, programming.'
			: 'Veebiagentuur, mis tegeleb veebi- ja mobiilirakenduste arendamisega. Ehitame brände igast küljest.'}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? 'making a website, programming, software development, web development, making web pages, blogs'
			: 'kodulehe tegemine, programmeerimine, tarkvaraarendus, veebiarendus, veebilehtede tegemine, blogi'}
	/>
</svelte:head>

<div class="fixed z-0 top-0 h-[100vh] w-full bg-white"></div>

<div class="absolute top-0 w-screen">
	<div class="relative overflow-hidden">
		<div class="container mx-auto">
			{#if featuredBlog}
				<FeaturedBlog
					image={featuredBlog.image.id}
					title={featuredBlog.title}
					timeToRead={featuredBlog.time_to_read}
					description={featuredBlog.short_description}
					slug={featuredBlog.slug}
					date={featuredBlog.date_created}
				/>
			{/if}
			
			<!--
			<div class="text-center pb-10 lg:pb-16 pt-12 lg:pt-20 z-20 relative">
				<h6 class="text-bgDarkBlue font-semibold font-inter text-xl mx-auto">
					{$_('our_latest')}
				</h6>
				<h4
					class="text-bgDarkBlue 
					font-extrabold 
					font-poppins text-[1.75rem] lg:text-6xl mx-auto leading-[42px] lg:leading-[60px] mt-6 lg:mt-2"
				>
					{$_('blog_articles')}
				</h4>

				<div
					class="relative flex flex-col items-center md:flex-wrap lg:flex-nowrap md:items-start md:flex-row justify-center mt-5 lg:mt-20 gap-12 flex-wrap lg:gap-y-28 lg:min-w-[63rem]"
				>
					<img
						src="/img/blog-list-dots.svg"
						alt="blog list dots"
						class="absolute left-[-5rem] top-[-3rem] z-0 hidden lg:block"
					/>
					<img
						src="/img/blog-list-dots.svg"
						alt="blog list dots"
						class="absolute right-[-5rem] bottom-0 z-0 hidden lg:block"
					/>
					<img
						src="/img/blog-list-dots.svg"
						alt="blog list dots"
						class="absolute mx-auto top-[-1rem] z-0 lg:hidden"
					/>
					
				</div>
			</div>
			-->
		</div>
				
		<GeneralPanel 
			headerOne={$_('our_latest')}
			headerSecond="{$_('blog_articles')}"
			headerColor1="text-bgDarkBlue"
			headerColor2="text-bgDarkBlue"
			headerStandart="false"
			classNames="lg:mt-[170px] mt-[80px] mb-[141px]">
			<div class="flex lg:flex-row flex-col justify-between items-center mt-0 lg:mt-[39px]">
				{#each articles as blog}
					<BlogCard
						image={blog.image.id}
						date={blog.date_created}
						timeToRead={blog.time_to_read}
						title={blog.title}
						slug={blog.slug}
						className="bg-white mt-[52px]"
						colorIcon="#042042"
					/>
				{/each}
				<img
					src="/img/blog-list-dots.svg"
					alt="blog list dots"
					class="absolute left-[-5rem] top-[140px] z-0 hidden lg:block"
				/>
				<img
					src="/img/blog-list-dots.svg"
					alt="blog list dots"
					class="absolute right-[-5rem] bottom-0 z-0 hidden lg:block"
				/>
			</div>
		
		</GeneralPanel>
		<!--
		<div class="container mx-auto text-center pb-10 lg:p-0 z-20 relative">
			<div class="flex lg:flex-row flex-col justify-between mt-0 lg:mt-20">
				{#each articles as blog}
					<BlogCard
						image={blog.image.id}
						date={blog.date_created}
						timeToRead={blog.time_to_read}
						title={blog.title}
						slug={blog.slug}
						className="bg-white"
						colorIcon="#042042"
					/>
				{/each}
			</div>
		</div>
		-->
	</div>
</div>
