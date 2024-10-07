<script>
    import { _, locale } from 'svelte-i18n';
    import TopPanel from '../../../components/Panels/TopPanel.svelte';
    import Footer from '../../../components/common/Footer.svelte';
    import Mission from '../../../components/Sections/Mission/MissionSection.svelte';
	import CompaniesSection from '../../../components/Sections/CompaniesSection/Companies.svelte';
	import OurTeam from '../../../components/Sections/OurTeam/OurTeam.svelte'
	import HaveAnswer from '../../../components/Sections/HaveAnswer/HaveAnswer.svelte';

    import teamIMG from '$lib/assets/img/team.webp';

	$: currentLocale = $locale;
</script>


<div class="fixed z-[1] top-0 h-[100vh] w-full bg-techsyBlue"></div>

<div class="absolute top-0 w-screen">
	<div class="relative overflow-hidden">


         <!--Desktop Circle-->
         <div class="circlePos greenCircle hidden lg:block"/>
         <div class="circlePos purpleCircle hidden lg:block"/>
         <div class="circlePos redCircleMiddle hidden lg:block"/>
         <div class="circlePos redCircleBottom hidden lg:block"/>
         <div class="circlePos blueCircle hidden lg:block"/>

         <!--Desktop Dots-->
        <div class = "dotsPos blueDots5 hidden lg:block" />
        <div class = "dotsPos blueDots4 hidden lg:block" />
        <div class = "dotsPos blueDots3 hidden lg:block" />
        <div class = "dotsPos blueDots2 hidden lg:block" />
        <div class = "dotsPos blueDots1 hidden lg:block" />

         <!--Mobile Circle-->
         <div class="circlePos redCircleMobile block lg:hidden"/>
        <div class="circlePos purpleCircleMobile block lg:hidden"/>
        <div class="circlePos greenCircleMobile block lg:hidden"/>

        


        <TopPanel imgSrc="{teamIMG}" 
            imageConClass="!pl-0 lg:!mt-[161px]"
            imageClass="max-w-[528px] !float-left "    
            btnText={$_('sections.aboutUsTopSection.btn1')}
            googleRatingShow={false}
            videoIcoShow={false}
            btnGroupClass={"!mt-[75px]"}
            customAction={true}
            on:btnClick={()=>{
               document.querySelectorAll('[data-pointer="OurTeam"]')[0].scrollIntoView({behavior: 'smooth'});
            }}>
            <div slot="headers" class="lg:w-[566px] w-auto">
                <h1 class="lg:block hidden topPanelHeader2">
                    {@html $_('sections.aboutUsTopSection.headerSecondP1')}
                </h1>
                <h1 class="lg:hidden block font-poppins font-bold leading-[46px] text-[48px] text-white">
                    {@html $_('sections.aboutUsTopSection.headerSecondP1Mobile')}
                </h1>
                <div class="">
                    <p class="topPanelDescription lg:w-[598px] w-auto lg:mt-[55px] mt-[60px] " 
                    style="{currentLocale == "et-ET" ? "padding-bottom:20px" : ""}">
                        {@html $_('sections.aboutUsTopSection.description')}
                    </p>
                </div>
            </div>

            <div slot="others" class="">
                <div class=" hidden
                lg:block
                 absolute
                 right-0
                 z-[-1]
                 top-[194px]
                w-[295px] h-[562px] bg-red-500"></div>
            </div>
           
        </TopPanel>
        <Mission />
        <OurTeam specialPointer="OurTeam"/>
        <CompaniesSection/>
        <div class="hidden lg:block  container relative 
            max-w-[852px] w-[852px]
            pl-0 pr-0
            z-[1] m-auto mt-[73px] 
            text-center  text-white text-[19px] font-light font-['Inter']">
            {@html $_('sections.aboutUsTopSection.littleTextAfterCompany')}
        </div>
        <div class="block lg:hidden container relative 
            z-[1] m-auto mt-[33px] 
            max-w-[852px]
            pl-[30px] pr-[30px]
            text-center  text-white text-[19px] font-normal font-['Inter']">
            {@html $_('sections.aboutUsTopSection.littleTextAfterCompanyMobile')}
        </div>
        <HaveAnswer generalPanelClass="lg:mb-[140px]"/>
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

    /*Desktop Dots*/
    .blueDots1{
		bottom:208px;
	}

    .blueDots2{
		bottom:1440px;
        width: 50%;
	}

    .blueDots3{
		top:1469px;
      
	}
    .blueDots4{
		top:1193px;
	}
    .blueDots5{
		top:675px;
	}

    
    /*Desktop Circle*/
    .greenCircle{
        top:613px;
		left: 16px;

        width: 560px;
        height: 457px;
        flex-shrink: 0;

        border-radius: 560px;
        opacity: 0.6;
        background: rgba(60, 222, 96, 0.75);
        filter: blur(250px);
    }
    .purpleCircle{
        top:1266px;
		right: -139px;

        width: 415px;
        height: 739px;
        flex-shrink: 0;

        border-radius: 739px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(250px);
    } 
    .redCircleBottom{
        bottom:-11px;
		right: -386px;

		width: 726px;
        height: 499px;
        flex-shrink: 0;

        border-radius: 726px;
        background: rgba(222, 60, 75, 0.75);
        filter: blur(250px);
    } 
    .redCircleMiddle{
        bottom:1440px;
		left: -417px;

		width: 726px;
        height: 499px;
        flex-shrink: 0;

        border-radius: 726px;
        background: rgba(222, 60, 75, 0.75);
        filter: blur(250px);
    } 
    @supports (-webkit-hyphens:none){
		.redCircleMobile {
			width: 350px;
			filter: blur(120px) brightness(2);
		}
	}
    .blueCircle{
        bottom:1160px;
		right: -65px;

        width: 247px;
        height: 297px;
        flex-shrink: 0;

        border-radius: 297px;
        opacity: 0.6;
        background: #00A3FF;
        filter: blur(125px);
    }

    /*Mobile Circle*/
    .redCircleMobile{

        top:148px;
        right: -166px;

        width: 397px;
        height: 599px;
        flex-shrink: 0;

        border-radius: 599px;
        opacity: 0.6;
        background: var(--Techsy-red, #DE3C4B);
        filter: blur(75px);
    }

    .purpleCircleMobile{
        top:969px;
		right: -136px;

        width: 330px;
        height: 856px;
        flex-shrink: 0;

        border-radius: 856px;
        opacity: 0.6;
        background: #DB3CDE;
        filter: blur(250px);
    }

    .greenCircleMobile{
        top:2500px;
		left: -282px;

        width: 409px;
        height: 600px;
        flex-shrink: 0;

        border-radius: 600px;
        background: rgba(60, 222, 115, 0.57);
        filter: blur(225px);
    }


</style>
