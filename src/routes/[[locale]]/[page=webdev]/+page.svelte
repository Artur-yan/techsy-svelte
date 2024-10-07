<script>
    import { _, locale } from 'svelte-i18n';
	import TopPanel from '../../../components/Panels/TopPanel.svelte';
    import DevProcessSection from '../../../components/Sections/DevProcessSection/DevProcessSection.svelte';
	import SocialProof from '../../../components/Sections/SocialProof/SocialProof.svelte';
    import CompaniesSection from '../../../components/Sections/CompaniesSection/Companies.svelte';
	import AreYouReady from '../../../components/Sections/AreYouReady/AreYouReady.svelte';
    import Footer from '../../../components/common/Footer.svelte';
	import WhySection from '../../../components/Sections/WhySection/Why.svelte';
	import TechnologiesSection from '../../../components/Sections/TechnologiesSection/TechnologiesSlider.svelte';
	import WeOffer from '../../../components/Sections/WeOffer/WeOffer.svelte';
	import { onMount } from 'svelte';
	import DiscussProjectModal from '../../../components/Sections/HeroSection/DiscussProjectModal.svelte';


    import webDevSec_landing from '$lib/assets/img/webDevSec.webp';

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
			? 'Award Winning Custom Websites | SPA, PWA, WordPress, Custom Websites'
			: 'Kodulehe arendus ja UX/UI disain | Techsy Veebiagentuur'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? 'Looking for a web development team? We create high-quality dynamic websites that meet all of your business needs.'
			: 'Arendame ja disainime mobiilisõbralikke kodulehti, mis toovad päriselt ka kasu ning vastavad Teie ärivajadustele ja eelarvele.'}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? `Web development services,
                Single Page Apps (SPAs),
                Progressive Web Apps (PWAs),
                WordPress website development,
                Custom website design,
                Innovative web solutions,
                Responsive web development,
                Tailored online experiences,
                Web development in tallinn,
                Web development in tallin,
                Web development agency in tallinn,
                Single page app development in tallinn,
                Single page app development,
                Progressive web app development,
                Single page app developers,
                Custom website in tallinn,
                Custom website developers in tallinn,
                Custom website developers,
                Responsive web development,
                Custom made websites,
                Custom made websites in Tallinn,
                Web development agency in estonia,
                website developers in estonia`
			: `kodulehe arendus,
                kodulehtede arendus,
                kodulehe arendus tallinn,
                kodulehtede arendus tallinn,
                veebilehe arendus,
                veebilehtede arendus,
                mobiilisõbralik koduleht,
                mobiilisõbraliku kodulehe arendus,
                wordpress koduleht,
                wordpress kodulehe arendus,
                single page application,
                progressive web application,
                nullist tehtud koduleht,
                nullist arendatud koduleht,
                kodulehe disain,
                progressive veebirakendus,
                üheleheline veebirakendus,
                veebiagentuur tallinnas`}
	/>
	<meta property="og:url" content={url} />
	<meta property="og:title" content={currentLocale == 'en-US'
	? 'Award Winning Custom Websites | SPA, PWA, WordPress, Custom Websites'
	: 'Kodulehe arendus ja UX/UI disain | Techsy Veebiagentuur'} />
	<meta property="og:description" content={currentLocale == 'en-US'
	? 'Looking for a web development team? We create high-quality dynamic websites that meet all of your business needs.'
	: 'Arendame ja disainime mobiilisõbralikke kodulehti, mis toovad päriselt ka kasu ning vastavad Teie ärivajadustele ja eelarvele.'}
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
         <div class="circlePos circle1 hidden lg:block"/>
         <div class="circlePos circle2 hidden lg:block"/>
         <div class="circlePos circle3 hidden lg:block"/>
         <div class="circlePos circle4 hidden lg:block"/>
         <div class="circlePos circle5 hidden lg:block"/>
         <div class="circlePos circle6 hidden lg:block"/>
         <div class="circlePos circle7 hidden lg:block"/>
         <div class="circlePos circle8 hidden lg:block"/>
         <div class="circlePos circle9 hidden lg:block"/>

        <!--Desktop Dots-->
        <div class = "dotsPos dots1 hidden lg:block" />
        <div class = "dotsPos dots2 hidden lg:block" />
        <div class = "dotsPos dots3 hidden lg:block" />
        <div class = "dotsPos dots4 hidden lg:block" />


        <!--Mobile Circle-->
        <div class="circlePos circleMobile1 block lg:hidden"/>
        <div class="circlePos circleMobile2 block lg:hidden"/>
        <div class="circlePos circleMobile3 block lg:hidden"/>
        <div class="circlePos circleMobile4 block lg:hidden"/>
        <div class="circlePos circleMobile5 block lg:hidden"/>
        <div class="circlePos circleMobile6 block lg:hidden"/>

        {#if currentLocale == "en-US"}
            <TopPanel 
            imgSrc="{webDevSec_landing}" 
            btnText={$_('landing_page.webdev.btnText')}
            btnGroupClass="mt-[64px]"
            imageClass="w-[775px] "
            imageConClass="w-[775px] !pl-0 ml-[-45px] !mt-[175px]"
            on:btnClick={()=>{isModalOpen = true;}}>
                <div slot="headers" class="lg:w-[596px] w-auto">
                    <h1 class="lg:block hidden topPanelHeader2">
                        {@html $_('landing_page.webdev.header2')}
                    </h1>
                    <h1 class="lg:hidden block font-poppins font-bold leading-[46px] text-[48px] text-white">
                        {@html $_('landing_page.webdev.header2Mobile')}
                    </h1>
                    <h2 class="topPanelHeader3 !font-medium">
                        {$_('landing_page.webdev.header3')}
                    </h2>
                    <p class="topPanelDescription lg:w-[470px] mt-[48px]" style="line-height: 32px;">
                        {@html $_('landing_page.webdev.description')}
                    </p>
                </div>
            </TopPanel>
        {:else if currentLocale == "et-ET"}
            <TopPanel 
            imgSrc="{webDevSec_landing}" 
            btnText={$_('landing_page.webdev.btnText')}
            btnGroupClass="mt-[64px]"
            imageClass="w-[773px] "
            imageConClass="w-[773px] !pl-0 ml-[-60px] !mt-[215px]"
            on:btnClick={()=>{isModalOpen = true;}}>
                <div slot="headers" class="lg:w-[604px] w-auto">
                    <h1 class="lg:block hidden topPanelHeader2 ">
                        {@html $_('landing_page.webdev.header2')}
                    </h1>
                    <h1 class="lg:hidden block font-poppins font-bold leading-[46px] text-[48px] text-white">
                        {@html $_('landing_page.webdev.header2Mobile')}
                    </h1>
                    <h2 class="topPanelHeader3 !font-medium">
                        {$_('landing_page.webdev.header3')}
                    </h2>
                    <p class="topPanelDescription lg:w-[470px] mt-[48px]" style="line-height: 32px;">
                        {@html $_('landing_page.webdev.description')}
                    </p>
                </div>
            </TopPanel>
        {/if}
        <WeOffer/>
        <SocialProof location="sections.socialProofForWeb"/>
        <DevProcessSection/>
		<TechnologiesSection />
        <WhySection />
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

    /*Desktop circle*/

     .circle1{
        top:-120px;
        right:-170px;

        width: 501px;
        height: 516px;
        flex-shrink: 0;

        border-radius: 516px;
        background: #DE3C4B;
        filter: blur(200px);
     }
     @supports (-webkit-hyphens:none){
		.circle1 {
			width: 350px;
			filter: blur(120px) brightness(2);
		}
	}

    .circle2{
        top:927px;
        left:-85px;

        width: 433px;
        height: 511px;
        flex-shrink: 0;

        border-radius: 511px;
        background: var(--Techsy-red, #DE3C4B);
        filter: blur(200px);
     }

     .circle3{
        top:927px;
        right:-261px;

        width: 566.322px;
        height: 566.322px;
        flex-shrink: 0;

        border-radius: 566.322px;
        background: #3C69DE;
        filter: blur(250px);
     }

     .circle4{
        top:2249px;
        left:-95px;

        width: 528px;
        height: 582px;
        flex-shrink: 0;

        border-radius: 582px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(250px);
     }

     .circle5{
        top:2211px;
        right:-251px;

        width: 566px;
        height: 576px;
        flex-shrink: 0;

        border-radius: 576px;
        background: rgba(60, 222, 115, 0.57);
        filter: blur(162.5px);
     }

     .circle6{
        bottom:1062px;
        left:-123px;

        width: 528px;
        height: 582px;
        flex-shrink: 0;

        border-radius: 582px;
        opacity: 0.6;
        background: #1976D2;
        filter: blur(175px);
     }
     .circle7{
        bottom:1018px;
        right:-326px;

        width: 566px;
        height: 516px;
        flex-shrink: 0;

        border-radius: 566px;
        background: #DE3C4B;
        filter: blur(225px);
     }

     .circle8{
        bottom:-87px;
        left:-160px;

        width: 528px;
        height: 582px;
        flex-shrink: 0;

        border-radius: 582px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(250px);
     }
     .circle9{
        bottom:-107px;
        right:-291px;

        width: 566px;
        height: 576px;
        flex-shrink: 0;

        border-radius: 576px;
        background: rgba(60, 222, 115, 0.57);
        filter: blur(162.5px);
     }

     
    /*Desktop dots*/
    .dots1{
		top:936px;
	}
    .dots2{
		top:2273px;
	}
    .dots3{
        bottom:1086px;
	}
    .dots4{
		bottom:129px;
	}

    /*Mobile circle*/
    .circleMobile1{
        top:58px;
        right:-166px;

        width: 449.352px;
        height: 669.344px;
        flex-shrink: 0;

        border-radius: 669.344px;
        opacity: 0.8;
        background: var(--Techsy-red, #DE3C4B);
        filter: blur(150px);
     }
     @supports (-webkit-hyphens:none){
		.circleMobile1 {
			width: 350px;
			filter: blur(120px) brightness(2);
		}
	}

    .circleMobile2{
        top:845px;
        left:-161px;

        width: 381px;
        height: 863px;
        flex-shrink: 0;

        border-radius: 863px;
        background: #3C69DE;
        filter: blur(250px);
     }

     .circleMobile3{
        top:1950px;
        left:-74px;

        width: 504px;
        height: 584px;
        flex-shrink: 0;

        border-radius: 584px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(157.5px);
     }

     .circleMobile4{
        bottom:2100px;
        left:-134px;

        width: 514px;
        height: 822px;
        flex-shrink: 0;

        border-radius: 822px;
        opacity: 0.6;
        background: rgba(222, 60, 60, 0.80);
        filter: blur(125px);
     }

     .circleMobile5{
        bottom:1276px;
        left:-231px;

        width: 421px;
        height: 550px;
        flex-shrink: 0;

        border-radius: 550px;
        background: rgba(60, 222, 115, 0.50);
        filter: blur(162.5px);
     }

     .circleMobile6{
        bottom:542px;
        right:-92px;

        width: 301px;
        height: 488px;
        flex-shrink: 0;

        border-radius: 488px;
        background: #3C69DE;
        filter: blur(175px);
     }


</style>