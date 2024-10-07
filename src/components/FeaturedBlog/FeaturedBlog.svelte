<script>
	import { _ } from 'svelte-i18n';

	import BlogLink from '../common/BlogLink.svelte';
	import BlogDateTime from '../common/BlogDateTime.svelte';
	import { PUBLIC_API_URL } from '$env/static/public'
	import { colorLogo } from '../../store/stores';


	export let image;
	export let timeToRead;
	export let title;
	export let description;
	export let slug;
	export let date;

	let screenWidth;
    $: if (screenWidth < 1024) {
		console.log("mobile")
		colorLogo.set("#042042");
    } else {
		colorLogo.set("white");
    }

	//	src="/img/blog-list-dots.svg"
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<div class="relative lg:overflow-visible">
	<img
		src="/img/blog-dots.svg"
		class="absolute top-[117px] left-[-5rem] z-10 hidden lg:block"
		alt="blog-dots"
	/>
	<img
		src="/img/blog-dots.svg"
		class="absolute top-[117px] right-[-5rem] z-10 hidden lg:block"
		alt="blog-dots"
	/>

	<div
		class="absolute bg-gradient z-0 top-0 left-[-30rem] right-[-30rem] bottom-0 h-[34.25rem] hidden lg:block"
	/>

	<div class="h-full hidden lg:flex gap-10 xl:gap-0">
		<div class="relative w-full flex-grow hidden lg:block top-[228px]">
			<div class="absolute h-[33.5rem] w-[21rem] left-0 top-0 bg-bgRed z-20" />

			<div
				class="featured-blog-image-gradient absolute left-[2rem] top-[58px] object-cover z-40"
			/>
			<img
				src={`${PUBLIC_API_URL}/assets/${image}`}
				class="featured-blog-image absolute left-[2rem] top-[58px] object-cover z-30"
				alt="blog-thumbnail"
			/>
		</div>
		<div class="w-full h-fit flex flex-col justify-center">
			<div
				class="flex items-center gap-4 font-inter font-medium text-sm text-white z-10 mb-7 mt-[255px]"
			>
				<img src="/img/clock-white.svg" alt="clock" width="24" height="24" />
				<p>{timeToRead} {$_('min_read')}</p>
			</div>
			<h2
				class="font-poppins font-bold text-6xl text-white leading-[3.75rem] z-10 relative max-w-[41rem] mb-[11.5rem]"
			>
				{@html title}
			</h2>
			<h3
				class="font-poppins font-normal text-base leading-[1.875rem] text-bgDarkBlue max-w-xl mb-8"
			>
				{description}
			</h3>
			<BlogLink {slug} />
		</div>
	</div>
	<div class="relative lg:hidden w-full h-[16.25rem] mb-12 mt-[112px]">
		<div class="featured-blog-image-gradient-mobile absolute top-0 left-0 bottom-0 right-0 z-10" />
		<img
			src={`${PUBLIC_API_URL}/assets/${image}`}
			alt="blog-thumbnail"
			class="w-full h-full object-cover"
		/>
		<div class="h-5 w-72 mx-auto bg-bgRed" />
	</div>
	<div class="lg:hidden mx-auto">
		<BlogDateTime {date} {timeToRead} className="lg:hidden" color="#042042"/>
		<div class="flex w-full lg:hidden">
			<div class="relative float-right flex flex-col mt-5 lg:mt-[3.75rem]">
				<h4
					class="font-poppins font-bold text-[1.75rem] text-bgDarkBlue leading-[2.625rem] z-10 relative lg:hidden mb-5 max-w-md"
				>
					{@html title}
				</h4>
				<h3
					class="font-poppins font-normal text-base leading-[1.875rem] text-bgDarkBlue max-w-xl mb-8"
				>
					{description}
				</h3>
				<BlogLink {slug} />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.bg-gradient {
		background: linear-gradient(182.75deg, #042042 3.32%, #de3c4b 185.93%);
	}
	.featured-blog-image {
		width: 28.625rem;
		height: 26.25rem;
	}
	.featured-blog-image-gradient {
		width: 28.625rem;
		height: 26.25rem;
		background: linear-gradient(182.75deg, #042042 3.32%, #de3c4b 185.93%);
		opacity: 0.56;
	}
	.featured-blog-image-gradient-mobile {
		background: linear-gradient(182.75deg, #042042 3.32%, #de3c4b 185.93%);
		opacity: 0.56;
	}
</style>
