<script>
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import HeroSection from '../../components/Sections/HeroSection/HeroSection.svelte';
	import FollowingSection from '../../components/Sections/FollowingSection/FollowingSection.svelte';
	import TechnologiesSection from '../../components/Sections/TechnologiesSection/TechnologiesSlider.svelte';
	import CompaniesSection from '../../components/Sections/CompaniesSection/Companies.svelte';
	import WhySection from '../../components/Sections/WhySection/Why.svelte';
	import BlogSection from '../../components/Sections/BlogSection/BlogSection.svelte';
	import AreYouReady from '../../components/Sections/AreYouReady/AreYouReady.svelte';
	import Footer from '../../components/common/Footer.svelte';
	


	export let data;


	$: currentLocale = $locale;
	let url = ``;
	onMount(() => (url = window.location.href));

	let colore =  "#042042";
	/*
	<!----><HeroSection />-->
	*/
</script>

<svelte:head>
	<title
		>{currentLocale == 'en-US'
			? 'Techsy - The Web Agency you can count on!'
			: 'Techsy - Veebiagentuur, kellele saab loota!'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? 'Techsy is a Web Agency that builds brands from every angle. We do high end web development, mobile app development and UX/UI design.'
			: 'Arendame ja disainime jalustrabavaid kodulehti, turgumuutvaid mobiilirakendusi ja Teie soovidele ja nõuetele vastavaid tarkvaralahendusi.'}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? `web agency, techsy web agency, web development, website development, creating a website, ordering a website, website ordering,
			 website design, web design, webdesign, making websites, developing websites, 
				mobile app development, mobile app making, making a mobile app, making an application for mobile, mobile apps
				software development, CRM development, ERP development, system development, devops as a service, devops
				UX design, UI design, UX/UI design, web design, making a logo, building a brand, website design, designing a website
				website maintenace, maintaining a website, web maintenance, vuejs development, vue development, react development, 
				angular development, python development, java development, flutter development, wordpress development, magento development, 
				directus development, strapi development, vue developers for hire, vue developer, react developers for hire, react developer, 
				angular developers, angular developers for hire, svelte developers for hire, svelte developers, php developers, php developers for hire, 
				javascript developers, javascript developers for hire, python developers, python developers for hire, java developers, java developers for hire, 
				flutter developers, flutter developers for hire, wordpress developers, wordpress developers for hire, directus developers, directus developers for hire, strapi developers,
				strapi developers for hire`
			: `veebiagentuur, veebiarendus, kodulehe arendus, veebilehe tegemine, kodulehe tellimine, veebilehe tellimine,  kodulehe disain, veebilehe disain, veebidisain, kodulehtede tegemine, kodulehtede arendus,
				mobiilirakenduste arendus, mobiilirakenduste tegemine, mobla äpi tegemine, mobiiliäpi tegemine, mobla äpi arendus, mobiiliäpi arendamine, 
				tarkvaraarendus, CRM arendus, ERP arendus, süsteemiarendus, 
				UX disain, UI disain, UX UI disain, veebidisain, logo tegemine, brändi ehitamine, kodulehe disainimine, 
				kodulehe haldus, kodulehehaldus, kodulehe hooldus, kodulehehooldus, kodulehtede hooldus ja haldus, kodulehtede haldus, kodulehtede hooldus,
				google ads, google ad kampaania tegemine, internetiturundus, sotsiaalmeeida turundus, turundusteenus, interneti müük
				vuejs arendus, vue arendus, react arendus, angular arendus, svelte arendus, php arendus, javascript arendus, python arendus, java arendus,
				flutter arendus, wordpress arendus, magento arendus, directus arendus, strapi arendus, vue arendaja, react arendaja, angular arendaja, 
				svelte arendaja, php arendaja, javascript arendaja, python arendaja, java arendaja, flutter arendaja, wordpressi arendaja, wordpressi tegija, 
				magento arendaja, directus arendaja, strapi arendaja`}
	/>
	<meta property="og:url" content={url} />
	<meta property="og:title" content={currentLocale == 'en-US'
	? 'Techsy - The Web Agency you can count on!'
	: 'Techsy - Veebiagentuur, kellele saab loota!'} />
	<meta property="og:description" content={currentLocale == 'en-US'
	? 'Techsy is a Web Agency that builds brands from every angle. We do high end web development, mobile app development and UX/UI design.'
	: 'Arendame ja disainime jalustrabavaid kodulehti, turgumuutvaid mobiilirakendusi ja Teie soovidele ja nõuetele vastavaid tarkvaralahendusi.'}
	 />
	<meta property="og:image:width" content="720" />
	<meta property="og:image:height" content="720" />
	<meta property="og:image" content="https://www.techsy.io/img/signature.svg" />
</svelte:head>

<!--Background Color-->

<div class="background top-0 h-[100vh] w-full bg-techsyBlue"></div>

<div class="absolute top-0 w-screen">
	<div class="relative overflow-hidden">
		

		
		<!--Desktop Circle-->
		<div class="redCircle hidden lg:block"/>
		<div class="blueCircle hidden lg:block"/>
		<div class="greenCircle hidden lg:block"/>
		<div class="purpleCircle hidden lg:block"/>

		<!--Mobile Circle-->
		<div class="redCircleMobile block lg:hidden"/>
		<div class="blueCircleMobile block lg:hidden"/>
		<div class="purpleCircleMobile block lg:hidden"/>
		<div class="greenCircleMobile block lg:hidden"/>

		<!--Desktop Dots-->
		<div class = "blueDots1 hidden lg:block" />
		<div class = "blueDots2 hidden lg:block" />
		<div class = "blueDots3 hidden lg:block" />

		<!--Mobile Dots-->
		<div class = "blueDotsMobile1 block lg:hidden" />
		<div class = "blueDotsMobile2 block lg:hidden" />
		<div class = "blueDotsMobile3 block lg:hidden" />
		

		<HeroSection />
		<FollowingSection />

		<TechnologiesSection />
		<BlogSection  articles={data.articles}/>
		<CompaniesSection />
		<WhySection />
		
		<AreYouReady />
		<Footer />
	



		<!--BOTTOM circle desktop-->
		<div class = "purpleCircleBottom hidden lg:block" />
		<div class = "blueCircleBottom hidden lg:block" />
		
	</div>
</div>


<style>

	/*Desktop and Mobile background*/
	.background{
		position: fixed;
		z-index: 1;
	}

	/*Desktop Circle*/
	.redCircle{
		z-index: 2;
		position: absolute;
		top:818px;
		left: -299px;
		width: 681px;
		height: 726px;
		background: rgba(222, 60, 75, 1);
		border-radius: 726px;
		filter: blur(250px);
	}
	.blueCircle{
		z-index: 2;
		right: -187px;
		position: absolute;
		top:973px;
		width: 566px;
		height: 566px;
		background-color: #3C69DE;
		border-radius: 50%;
		filter: blur(250px);
	}
	.greenCircle{
		z-index: 2;
		position: absolute;
		top:1802px;
		left: -141px;
		width: 566px;
		height: 566px;
		background: rgba(60, 222, 115, 0.57);
		border-radius: 566px;
		filter: blur(250px);
	}
	.purpleCircle{
		z-index: 2;
		right: -202px;
		position: absolute;
		top:2268px;
		width: 669px;
		height: 637px;
		border-radius: 669px;
		opacity: 0.6;
		background: #DB3CDE;
		filter: blur(250px);
	}
	.purpleCircleBottom{
		z-index: 2;
		left: 0;
		position: absolute;
		bottom:217px;
		overflow: hidden;

		width: 500px;
		height: 500px;
		background-color: #db3cde6b;
		border-radius: 0 500px 0 0;

		
		filter: blur(200px);
  		-webkit-filter: blur(200px);
		mix-blend-mode: normal;
		
	}
	.blueCircleBottom{
		z-index: 2;
		right: 0;
		position: absolute;
		bottom:0;
		overflow: hidden;

		width: 500px;
		height: 500px;
		background-color: #3C69DE;
		border-radius: 500px 0 0 0;

		filter: blur(200px);
  		-webkit-filter: blur(200px);
		mix-blend-mode: normal;
	}

	/*Desktop dots*/
	.blueDots1{
		z-index: 3;
		left: 0;
		position: absolute;
		top:883px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}
	.blueDots2{
		z-index: 3;
		left: 0;
		position: absolute;
		top:2016px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}
	.blueDots3{
		z-index: 3;
		left: 0;
		position: absolute;
		/*top:calc(3856px - var(--HeaderMargin));*/
		bottom:96.3px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}




	/*Mobile Circle*/
	.redCircleMobile{
		position: absolute;
		z-index: 2;
		top:58px;
		right: -166px;
		width: 449.352px;
		height: 669.344px;	

		border-radius: 669.344px;
		opacity: 0.8;
		background: #DE3C4B;
		filter: blur(150px);
	}
	@supports (-webkit-hyphens:none){
		.redCircleMobile {
			width: 350px;
			filter: blur(120px) brightness(2);
		}
	}

	.blueCircleMobile{
		position: absolute;
		z-index: 2;
		top: 1066px;
		left: -166px;

		width: 415px;
		height: 828px;	

		border-radius: 828px;
		background: #3C69DE;
		filter: blur(250px);
	}
	.purpleCircleMobile{
		position: absolute;
		z-index: 2;
		top: 2627px;
		right: -329px;

		width: 525px;
		height: 864px;

		border-radius: 864px;
		opacity: 0.6;
		background: #DB3CDE;
		filter: blur(250px);
	}
	.greenCircleMobile{
		position: absolute;
		z-index: 2;
		bottom: 867px;
		left: -192px;

		width: 360px;
		height: 634px;

		border-radius: 634px;
		background: rgba(60, 222, 115, 0.57);
		filter: blur(250px);
	}


	.blueDotsMobile1{
		z-index: 3;
		left: 0;
		position: absolute;
		top:900px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}

	.blueDotsMobile2{
		z-index: 3;
		left: 0;
		position: absolute;
		top:2741px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}
	.blueDotsMobile3{
		z-index: 3;
		left: 0;
		position: absolute;
		bottom:716px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}


	/*
	.generalCircleMobile{
		position: absolute;
		
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		

		width: 300px;
		height: 600px;
		border-radius: 1500px 0 0 1500px;
		
		
		filter: blur(100px);
  		-webkit-filter: blur(100px);
		mix-blend-mode: normal;
		
	}

	.generalCircleMobileCon{
		z-index: 1;
		position: absolute;
		overflow: hidden;
		width: 600px;
		height: 1200px;
	}

	.redCircleMobile{
		z-index: 2;
		right: 0;
		position: absolute;
		top:80px;
		overflow: hidden;

		width: 250px;
		height: 600px;
		background-color: #DE3C4B;
		border-radius: 500px 0 0 500px ;

		
		filter: blur(100px);
  		-webkit-filter: blur(100px);
		mix-blend-mode: normal;
		
		

	}

	.blueCircleMobileCon{
		overflow-x: hidden;
		position: absolute;
		top:900px;
		width: 100%;
		height: 1500px;
		z-index: 2;
	}

	.blueCircleMobile{
		overflow-x: hidden;
		z-index: 2;
		left: 0;
		margin-top: 500px;
		width:500px; 
		height: 500px;
		background-color: #3C69DE;
		border-radius: 0 500px 500px 0;

		filter: blur(200px);
  		-webkit-filter: blur(200px);
		mix-blend-mode: normal;
	}
	.purpleCircleMobile{
		
		z-index: 2;
		right: 0;
		position: absolute;
		top:1700px;
		overflow: hidden;


		width: 500px;
		height: 1000px;
		background-color: #db3cde6b;
		border-radius: 500px 0 0 500px;

		
		filter: blur(200px);
  		-webkit-filter: blur(200px);
		mix-blend-mode: normal;
		

	}

	
	/*
	.blueDotsBottom{
		z-index: 2;
		left: 0;
		position: absolute;
		bottom:50px;
		height: 440px;
		width: 100%;
		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
	}
	*/
	/*
	*/
</style>
 

