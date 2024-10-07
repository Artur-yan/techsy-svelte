<script>
    import { _, locale } from 'svelte-i18n';
	import TopPanel from '../../../components/Panels/TopPanel.svelte';
    import DevProcessSectionMobile from '../../../components/Sections/DevProcessSectionMobile/DevProcessSectionMobile.svelte';
	import SocialProof from '../../../components/Sections/SocialProof/SocialProof.svelte';
    import CompaniesSection from '../../../components/Sections/CompaniesSection/Companies.svelte';
	import AreYouReady from '../../../components/Sections/AreYouReady/AreYouReady.svelte';
    import Footer from '../../../components/common/Footer.svelte';
	import WhySection from '../../../components/Sections/WhySection/Why.svelte';
    import TechnologiedSliderMobilMobStatic from '../../../components/Sections/TechnologiesSection/TechnologiedSliderMobilMob.Static.svelte';
	import TechnologiedSliderMobilMob from '../../../components/Sections/TechnologiesSection/TechnologiedSliderMobilMob.svelte';
	import MobileDevCards from '../../../components/Sections/MobileDevCards/MobileDevCards.svelte';
	import { onMount } from 'svelte';
	import DiscussProjectModal from '../../../components/Sections/HeroSection/DiscussProjectModal.svelte';


    import mobDevHero from '$lib/assets/img/mobDevHero.webp';

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
			? 'Expert Mobile App Development for iOS and Android | Top Mobile Developers'
			: 'Mobiilirakenduste arendus ja disain iOS ja Androidile'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? 'Discover the power of expert mobile app development for iOS and Android. Our seasoned developers bring years of experience, crafting cutting-edge mobile applications to propel your success in the dynamic mobile marketplace.'
			: "Otsid mobiilirakenduse arendajaid? Mobiilirakenduste arendus kogenud spetsialistidelt - Native, Hybrid, IoT ja Progressive rakendused nii iOS'le kui Androidile."}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? `Mobile app development,
                mobile development,
                mobile app development in tallinn,
                mobile app development in estonia,
                iOS app development,
                iOS mobile app development,
                Android app development,
                Android mobile app development,
                IoT app development,
                internet of things app development,
                Expert mobile developers,
                expert mobile developers in estonia,
                expert mobile developers in tallinn,
                Cutting-edge mobile apps,
                Mobile marketplace success,
                mobile development services,
                Top mobile development services,
                Cross-platform app development`
			: `mobiilirakenduste arendus,
                mobiilirakenduse tegemine,
                mobiilirakenduste tegemine,
                mobiilirakenduste disain,
                mobiilirakenduse disain,
                mobiili äpi arendus,
                mobla äpi arendus,
                mobiilirakenduste arendus tallinnas,
                mobiilirakenduste arendamine tallinnas,
                ios arendus,
                android arendus,
                iot arendus,
                ios rakenduse arendus,
                android rakenduse arendus,
                iot rakenduse arendus,
                progressive web app,
                hybrid äpp,
                hybrid rakendused,
                hybrid rakendus,
                native rakendus,
                native äpp,
                native rakendused,
                iot rakendus,
                iot rakendused,
                native mobiilirakendused,
                hybrid mobiilirakendused,
                iot mobiilirakendused,
                progressive mobiilirakendused`}
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
         <div class="circlePos circle6 hidden lg:block"/>
         <div class="circlePos circle7 hidden lg:block"/>
         <div class="circlePos circle8 hidden lg:block"/>
         <div class="circlePos circle9 hidden lg:block"/>

        <!--Desktop Dots-->
        <div class = "dotsPos dots1 hidden lg:block" />
        <div class = "dotsPos dots3 hidden lg:block" />
        <div class = "dotsPos dots4 hidden lg:block" />


        <!--Mobile Circle-->
        <div class="circlePos circleMobile1 block lg:hidden"/>
        <div class="circlePos circleMobile2 block lg:hidden"/>
        <div class="circlePos circleMobile3 block lg:hidden"/>
        <div class="circlePos circleMobile4 block lg:hidden"/>
        <div class="circlePos circleMobile5 block lg:hidden"/>
        <div class="circlePos circleMobile6 block lg:hidden"/>

        <TopPanel 
        imgSrc="{mobDevHero}" 
        btnText={$_('landing_page.mobdev.btnText')}
        btnGroupClass="mt-[64px]"
        imageClass="w-[690px]"
        imageConClass="w-[690px] !pl-0 ml-[-45px] !mt-[175px]"
        on:btnClick={()=>{isModalOpen = true;}}>
        
            <div slot="headers" class="lg:w-[596px] w-auto">
                <h1 class="lg:block hidden topPanelHeader2">
                    {@html $_('landing_page.mobdev.header2')}
                </h1>
                <h1 class="lg:hidden block font-poppins font-bold leading-[46px] text-[48px] text-white">
                    {@html $_('landing_page.mobdev.header2Mobile')}
                </h1>
                <h2 class="topPanelHeader3">
                    {$_('landing_page.mobdev.header3')}
                </h2>
                <p class="topPanelDescription lg:w-[470px] mt-[48px]" style="line-height: 32px;">
                    {@html $_('landing_page.mobdev.description')}
                </p>
            </div>
        </TopPanel>
       
        <MobileDevCards/>
        <div class="hidden lg:block">
            <TechnologiedSliderMobilMobStatic />
        </div>
        <div class="block lg:hidden">
            <TechnologiedSliderMobilMob />
        </div>
        <DevProcessSectionMobile/>
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