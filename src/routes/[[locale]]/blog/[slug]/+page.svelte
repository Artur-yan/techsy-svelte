<script>
	import { _, locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { browser} from '$app/environment';
	import { monthNames } from '../../../../utils/constants.js';
	import BlogContent from '../../../../components/BlogContent/BlogContent.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_API_URL } from '$env/static/public'
	import { langBtnDisable, colorLogo } from '../../../../store/stores';
	import { page } from '$app/stores';
	import ShareBlogs from '../../../../components/ShareBlogs/ShareBlogs.svelte';

	export let data;


	let url = ``;
	onMount(() => (url = window.location.href));
	$: currentLocale = $locale;
	let formatDate = new Date(data.information.date_created);

	
	/*
	*	id article dont has other language hide navbat lang btn
	*/
	const checkLang = $locale == "et-ET" ? "en-US" : "et-ET";
	if(data.information.translations.find(x => x.languages_id.code == checkLang) == undefined){
		console.log("article doesnt has other language")
		langBtnDisable.set(true);
	}



	/*
	*	lang btn behavior changes.
	*	when nav lang btn click, change url and article
	*/
	const changeLocal = () =>{
		if(data.information.languages_id.code != $locale && $page.route.id == '/[[locale]]/blog/[slug]'){
			const findLang = data.information.translations.find(x => x.languages_id.code == $locale);
			let langPart = findLang.languages_id.code.split("-")[0];
			if(langPart == "et") {
				langPart = "";
			}
			else{
				langPart = langPart +"/";
			}
			console.log(`${langPart}blog/${findLang.slug}`)
			goto(`/${langPart}blog/${findLang.slug}`);
		}

	}
	$: $locale, changeLocal()

	let screenWidth;
    $: if (screenWidth < 1024) {
		console.log("mobile")
		colorLogo.set("#042042");
    } else {
		colorLogo.set("white");
    }

</script>

<svelte:window bind:innerWidth={screenWidth}/>

<svelte:head>
	<script src="https://platform.linkedin.com/in.js" type="text/javascript">
		lang: en_US;
	</script>

		<!--
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
		-->

	<title>{data.information.meta_title}</title>
	<meta name="description" content={data.information.meta_description} />

	<meta
		name="keywords"
		content={`${data.information.keywords?.join(', ') || ''}`}
	/>

	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.information.title} />
	{#if data.information.short_description}
		<meta name="twitter:description" content={data.information.short_description} />
	{/if}
	<meta name="twitter:url" content={url} />
	<meta name="twitter:image" content={`${PUBLIC_API_URL}/assets/${data.information.image.id}`} />
	<meta name="twitter:image:alt" content="blog image" />
	<meta name="twitter:label1" content="Written by" />
	<meta
		name="twitter:data1"
		content={`${data.information.user_created.first_name} ${data.information.user_created.last_name}`}
	/>
	<meta name="twitter:label2" content="Est. reading time" />
	<meta
		name="twitter:data2"
		content={data.information.time_to_read !== 1 ? `${data.information.time_to_read} minutes` : '1 minute'}
	/>
	<meta property="og:url" content={url} />
	<meta property="og:title" content={data.information.title} />
	<meta property="og:description" content={data.information.short_description} />
	<meta property="og:image" content={`${PUBLIC_API_URL}/assets/${data.information.image.id}`} />
</svelte:head>



<div class="fixed z-0 top-0 h-[100vh] w-full bg-white"></div>


<div
	class="relative w-full 
	h-[400px] lg:h-[34rem] overflow-hidden 
	lg:mt-0 text-center flex flex-col "
>
	<img
		src={`${PUBLIC_API_URL}/assets/${data.information.image.id}`}
		alt="blog"
		class="absolute top-[112px] lg:top-0 right-0 left-0 bottom-0 object-cover w-full h-full"
	/>
	<div class="absolute top-[112px] lg:top-0 left-0 right-0 bottom-0 image-gradient" />
	<h2
		class="font-poppins font-bold text-6xl text-white leading-[3.75rem] z-10 m-auto relative max-w-[41rem] hidden lg:block"
	>
		{@html data.information.title}
	</h2>
	<div
		class="lg:flex gap-5 justify-between font-inter font-medium text-sm text-white z-10 relative pb-7 mx-auto container px-0 pr-2  hidden"
	>
		<div class="flex items-center gap-4">
			<div class="absolute">
				<ShareBlogs />
			</div>
			<img src="/img/clock-white.svg" alt="clock" width="24" height="24" />
			<p>{data.information.time_to_read} {$_('min_read')}</p>
		</div>
		<div class="flex items-center gap-4">
			<img src="/img/calendar-white.svg" alt="calendar" width="24" height="24" />
			<p>
				{`${String(formatDate.getDate()).padStart(2, '0')} ${
					monthNames[formatDate.getMonth()]
				}, ${formatDate.getFullYear()}`}
			</p>
		</div>
	</div>
	
</div>
<div class="relative lg:w-1/2 px-7 sm:px-10 lg:px-0 mx-auto">
	<div
		class="flex justify-between font-inter font-medium text-sm text-bgDarkBlue lg:hidden mt-3"
	>
		<div class="flex items-center gap-4">
			<img src="/img/clock.svg" alt="clock" width="24" height="24" />
			<p>{data.information.time_to_read} {$_('min_read')}</p>
		</div>
		<div class="flex items-center gap-4">
			<img src="/img/calendar.svg" alt="calendar" width="24" height="24" />
			<p>
				{`${String(formatDate.getDate()).padStart(2, '0')} ${
					monthNames[formatDate.getMonth()]
				}, ${formatDate.getFullYear()}`}
			</p>
		</div>
	</div>
	<h4
		class="font-poppins font-bold text-bgDarkBlue 
		text-[1.75rem] leading-[2.625rem] mt-5 text-left lg:hidden"
	>
		{@html data.information.title}
	</h4>
	<div class="lg:mt-[74px]
		mt-[18px]
		text-sky-950
		text-base
		font-normal
		font-['Poppins']
		leading-[30px]">
		<span>{data.information.short_description}</span>
	</div>
	<BlogContent content={data.content} />
	<div
		class="bg-gradient-to-b to-bgBlue from-bgRed px-6 lg:px-16 pt-[3.75rem] text-center pb-28 lg:pb-24 relative mt-9 lg:mt-[4.375rem] mb-24 lg:mb-[7.5rem]"
	>
		<img src="/img/quote-left.svg" alt="quote" class="mx-auto mb-8" />
		{#if data.information.quote}
			<h5
				class="font-inter font-normal text-2xl lg:text-[2rem] leading-[2.375rem] lg:leading-[3.75rem] text-white"
			>
				{data.information.quote}
			</h5>
		{/if}
		<p class="font-inter font-normal text-lg leading-[1.375rem] text-white mt-7">
			{data.information.user_created.first_name}
			{data.information.user_created.last_name}
		</p>
		{#if data.information.user_created.avatar}
		<img
			src={`${PUBLIC_API_URL}/assets/${data.information.user_created.avatar.id}`}
			class="avatar-image absolute bottom-[-3.75rem] left-0 right-0 object-cover mx-auto"
			width="120"
			height="120"
			alt="author avatar"
		/>
		{/if}
	</div>
</div>

<div class="relative flex flex-wrap lg:w-1/2 px-7 sm:px-10 lg:px-0 mx-auto text-base font-normal font-poppins leading-[1.875rem] pb-20">

	<p>{$_('keywords')}&nbsp;</p>


	{#each data.information.keywords || [] as keyword}
		<p class="text-Red underline">{keyword}</p>
		{#if data.information.keywords[data.information.keywords.length - 1] !== keyword}
			<p>,&nbsp;</p>
		{/if}
	{/each}
</div>


<style class="postcss">
	.image-gradient {
		background: linear-gradient(182.75deg, #042042 3.32%, #de3c4b 185.93%);
		opacity: 0.56;
	}
	.avatar-image {
		width: 120px;
		height: 120px;
	}
</style>
