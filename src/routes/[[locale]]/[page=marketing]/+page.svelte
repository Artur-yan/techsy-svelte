<script>
    import { _, locale } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import TopPanel from '../../../components/Panels/TopPanel.svelte';
    import Footer from '../../../components/common/Footer.svelte';
    import HowDoWe from '../../../components/Sections/HowDoWe/HowDoWe.svelte';
    import WhatWe from '../../../components/Sections/WhatWe/WhatWe.svelte'
	import CompaniesSection from '../../../components/Sections/CompaniesSection/Companies.svelte';
	import AreYouReady from '../../../components/Sections/AreYouReady/AreYouReady.svelte';
    import SocialProof from '../../../components/Sections/SocialProof/SocialProof.svelte';
	import DiscussProjectModal from '../../../components/Sections/HeroSection/DiscussProjectModal.svelte';

    import rocketIMG from '$lib/assets/img/space_rocket.webp';

    let isModalOpen  = false;

	const closeFormModal = () => {
		isModalOpen  = false;
	}
	

    $: currentLocale = $locale;
    let url = ``;
	onMount(() => (url = window.location.href));
</script>
<svelte:head>
	<title
		>{currentLocale == 'en-US'
			? 'Boost Your Online Visibility | Google Ads, B2B Lead Generation, SEO, Social Media, Email Marketing, Brand Awareness'
			: 'Turundusteenused, mis toovad tulemusi | Techsy Veebiagentuur'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? "Elevate your online presence and drive growth with our comprehensive marketing services. Targeted Google Ads, B2B lead generation to strategic SEO, Social Media marketing, Email campaigns, and brand awareness – we've got your business covered."
			: 'Suurenda oma brändi nähtavust meie turundusteenuste abil. Google reklaamid, Sotsiaalmeedia reklaamid, B2B ärikontaktid, E-posti turundus, Online-reklaam'}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? ` Marketing services, marketing solutions, google ads services, Google Ads pay-per-click services, 
                google ads ppc services, B2B lead generation, business contacts in europe, business contacts in estonia,
                business contacts in finland, Social media marketing services, facebook marketing services, SEO solutions,
                SEO service, Email marketing campaigns,
                email marketing service, Brand awareness strategies,
                brand awareness service, Online advertising,
                google advertising services
            `
			: `turundusteenused, müügiteenused, sotsiaalmeediaturundus, online-turundus, online turundus, google reklaamid, google ads reklaamid, ärikontaktid, ärikontaktid turundus, b2b ärikontaktid, müügivihjed, lead generation, sotsiaalmeediareklaam, sotsiaalmeedia turundus, seo, otsingumootorite optimeerimine, email turundus, automaatne email turundus, brändi nähtavus, brand awareness, turunduskonsultatsioon, turundusstrateegia, strateegiline turundus`}
	/>
    
	<meta property="og:url" content={url} />
	<meta property="og:title" content={currentLocale == 'en-US'
        ? 'Boost Your Online Visibility | Google Ads, B2B Lead Generation, SEO, Social Media, Email Marketing, Brand Awareness'
        : 'Turundusteenused, mis toovad tulemusi | Techsy Veebiagentuur'} />
	<meta property="og:description" content={currentLocale == 'en-US'
        ? "Elevate your online presence and drive growth with our comprehensive marketing services. Targeted Google Ads, B2B lead generation to strategic SEO, Social Media marketing, Email campaigns, and brand awareness – we've got your business covered."
        : 'Suurenda oma brändi nähtavust meie turundusteenuste abil. Google reklaamid, Sotsiaalmeedia reklaamid, B2B ärikontaktid, E-posti turundus, Online-reklaam'}
	 />
	<meta property="og:image:width" content="720" />
	<meta property="og:image:height" content="720" />
    <meta property="og:image" content="https://www.techsy.io/img/signature.svg" />


</svelte:head>

<DiscussProjectModal openFormModal={isModalOpen } on:close={closeFormModal}/>

<div class="fixed z-[1] top-0 h-[100vh] w-full bg-techsyBlue"></div>

<div class="absolute top-0 w-screen">
	<div class="relative overflow-hidden">

         <!--Desktop Circle-->
        <div class="circlePos redCircle hidden lg:block"/>
        <div class="circlePos blueCircle hidden lg:block"/>
        <div class="circlePos purpleCircle hidden lg:block"/>
        <div class="circlePos greenCircle hidden lg:block"/>
        <div class="circlePos greenCircle2 hidden lg:block"/>
        <div class="circlePos blueCircle2 hidden lg:block"/>

         <!--Desktop Dots-->
        <div class = "dotsPos blueDots1 hidden lg:block" />
        <div class = "dotsPos blueDots2 hidden lg:block" />

         <!--Mobile Circle-->
        <div class="circlePos redCircleMobile block lg:hidden"/>
        <div class="circlePos blueCircleMobile block lg:hidden"/>
        <div class="circlePos purpleCircleMobile block lg:hidden"/>
        <div class="circlePos greenCircleMobile block lg:hidden"/>
        <div class="circlePos purpleCircleMobile2 block lg:hidden"/>
        

         <!--Mobile Dots-->
        <div class = "dotsPos blueDotsMobile1 block lg:hidden" />
        <div class = "dotsPos blueDotsMobile2 block lg:hidden" />
        <div class = "dotsPos blueDotsMobile3 block lg:hidden" />
        <div class = "dotsPos blueDotsMobile4 block lg:hidden" />

        <TopPanel imgSrc="{rocketIMG}" 
            imageConClass="!pl-0"
            imageClass="max-w-[528px] !float-left"    
            btnText={$_('sections.rocketSection.btn1')}
            btnGroupClass="!mt-[64px]"
            on:btnClick={()=>{isModalOpen = true;}}>
            <div slot="headers" class="lg:w-[678px] w-auto">
                <h1 class="lg:block hidden topPanelHeader2">
                    {@html $_('sections.rocketSection.headerSecondP1')}
                </h1>
                <h1 class="lg:hidden block font-poppins font-bold leading-[46px] text-[48px] text-white">
                    {@html $_('sections.rocketSection.headerSecondP1Mobile')}
                </h1>
                <div class="lg:w-[528px]">
                    <p class="lg:w-[528px] w-auto lg:mt-[48px] mt-[60px] topPanelDescription !leading-[32px]">
                        {@html $_('sections.rocketSection.description')}
                    </p>
                </div>
            </div>
        </TopPanel>
        <WhatWe />
        <SocialProof />
        <HowDoWe />
        <CompaniesSection/>
        <AreYouReady generalPanelClass="lg:mb-[171px]"/>
		<Footer />

	
    </div>
</div>

<style>
    @import '../../../styles/landingstyle.css'; 

    .circlePos{
        z-index: 2;
        position: absolute;
    }
    .dotsPos{
        z-index: 3;
        position: absolute;

        left: 0;

        height: 440px;
		width: 100%;

		background-repeat: repeat-x;
		background-image: url("$lib/assets/img/redDotBlue.svg");
    }
    .redCircle{
        top:1233px;
		left: -181px;

		width: 585px;
        height: 589px;
        flex-shrink: 0;

        border-radius: 589px;
        background: rgba(222, 60, 75, 0.75);
        filter: blur(200px);
    } 
    .blueCircle{
        top:947px;
		right: -307px;

		width: 566px;
        height: 914px;
        flex-shrink: 0;

        border-radius: 914px;
        background: #3C69DE;
        filter: blur(250px);
    } 

    .purpleCircle{
        bottom:1608px;
		left: -33px;

		width: 528px;
        height: 582px;
        flex-shrink: 0;

        border-radius: 582px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(250px);
    } 
   

    .greenCircle{
        bottom:1558px;
		right: -132px;

		width: 566px;
        height: 576px;
        flex-shrink: 0;

        border-radius: 576px;
        background: rgba(60, 222, 115, 0.57);
        filter: blur(162.5px);
    } 
    .blueCircle2{
        bottom:124px;
		right: -362px;

		width: 532px;
        height: 495px;
        flex-shrink: 0;

        border-radius: 532px;
        opacity: 0.6;
        background: #00A3FF;
        filter: blur(175px);
    } 

    .greenCircle2{
        bottom:33px;
		left: -200px;

		width: 566px;
        height: 576px;
        flex-shrink: 0;

        border-radius: 576px;
        background: rgba(60, 222, 115, 0.57);
        filter: blur(162.5px);
    } 

    .blueDots1{
		top:1353px;
	}

    .blueDots2{
		bottom: 150px;
	}

    .redCircleMobile{

        top:58px;
        right: -166px;

        width: 449.352px;
        height: 669.344px;
        flex-shrink: 0;

        border-radius: 669.344px;
        opacity: 0.8;
        background: var(--Techsy-red, #DE3C4B);
        filter: blur(150px);
    }
    .blueCircleMobile{

        top:868px;
        left: -161px;

        width: 381px;
        height: 863px;
        flex-shrink: 0;

        border-radius: 863px;
        background: #3C69DE;
        filter: blur(250px);
    }
    .purpleCircleMobile{

        bottom:1558px;
        right: -220px;

        width: 514px;
        height: 822px;
        flex-shrink: 0;

        border-radius: 822px;
        opacity: 0.6;
        background: var(--Purple-2, #BB6BD9);
        filter: blur(250px);
    }

    .purpleCircleMobile2{
        top:2500px;
        width: 504px;
        height: 670px;
        flex-shrink: 0;
        border-radius: 670px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(157.5px);
    }

    .greenCircleMobile{

        bottom:725px;
        left: -164px;

        width: 484px;
        height: 455px;
        flex-shrink: 0;

        border-radius: 484px;
        background: rgba(60, 222, 115, 0.50);
        filter: blur(162.5px);
    }

    .blueDotsMobile1{
		top:914px;
	}

    .blueDotsMobile2{
		bottom: 725px;
	}
    .blueDotsMobile3{
		top: 2500px;
	}
    .blueDotsMobile4{
		top: 2778px;
	}

    

</style>
