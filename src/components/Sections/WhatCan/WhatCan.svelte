<script>
	import { _, locale } from 'svelte-i18n';
	import TechnologyCard from '../FollowingSection/Card.svelte';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

	import AlwaysOnSameHeight from '../../common/RectangularCards/AlwaysOnSameHeight.svelte';

	import Logo1 from '$lib/assets/img/NMA.svg';
	import Logo2 from '$lib/assets/img/HMA.svg';
	import Logo3 from '$lib/assets/img/IOT.svg';
	import Logo4 from '$lib/assets/img/PWA.svg';

	
	const svgs = [
		Logo1,
		Logo2,
		Logo3,
		Logo4
	];

	/*

    let cardsComponents = [];
    let cardsInfo = [];
    const upDateVal = () => {
		cardsInfo = [];
		for (let index = 0; index < 4; index++) {
			cardsInfo.push(
			{
                title: $_(`sections.mobdevCardSection.data.${index}.title`),
                text: $_(`sections.mobdevCardSection.data.${index}.text`),
                icon:svgs[index],
                iconAlt: "web development logo"

            })
		}
    }
    upDateVal();
    $: $locale, upDateVal();

	let parentDiv = null;
	*/

</script>

<GeneralPanel 
	headerOne={$_('sections.whatCanSection.headerOne')} 
	headerSecond={$_('sections.whatCanSection.headerSecond')}
	description={$_('landing_page.webdev.description2')}
	classNames="lg:mt-[170px] mt-[94px]">


	<AlwaysOnSameHeight svgs={svgs}  location={"sections.whatCanSection"} lenght={4}/>
	
	<!--
    <div  bind:this={parentDiv} class="" style="position: relative;">
        <div class="flex xl:flex-row flex-col justify-center items-stretch gap-[28px] mt-[66px]">
            {#each cardsInfo as info, i}
                <CardFollowin  
					sameHight={true}
                    alwaysOn={true}
                    defaultOpenForMobile={i==0?true:false} 
                    parentDiv={parentDiv}
                    scrollIs={false}
                    isMobile={true} 
                    title={info.title}
                    text={info.text}
                    icon={info.icon}
                    iconAlt={info.iconAlt} 
                    bind:this="{cardsComponents[i]}" 
                    on:close={() => {}}
                />
            {/each}
        </div>
    </div>
	-->

	<!--
	<div class="flex flex-col xl:flex-row lg:hidden xl:flex gap-5 mt-[4.5rem] lg:mt-12">
		<div class="flex flex-col xl:flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('landing_page.mobdev.cardHead1')}
				text={$_('landing_page.mobdev.cardDesc1')}
				icon="/img/NMA.svg"
				iconAlt="Native Mobile Application logo"
				xlOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[13rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et' ? 11.6 : 11.4}
				smOpenHeight={currentLocale === 'et' ? 14.2 : 14.2}
				xsOpenHeight={currentLocale === 'et' ? 15 : 14.2}
			/>
		</div>
		<div class="flex flex-col xl:flex-col z-10 gap-5">
			<TechnologyCard
                title={$_('landing_page.mobdev.cardHead2')}
                text={$_('landing_page.mobdev.cardDesc2')}
                icon="/img/HMA.svg"
                iconAlt="Hybrid Mobile Application logo"
				xlOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[13.2rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et' ? 11.5 : 11.5}
				smOpenHeight={currentLocale === 'et' ? 14.2 : 14.2}
				xsOpenHeight={currentLocale === 'et' ? 15 : 15}
			/>
		</div>
		<div class="flex flex-col lg:flex-row xl:flex-col z-10 gap-5">
			<TechnologyCard
                title={$_('landing_page.mobdev.cardHead3')}
                text={$_('landing_page.mobdev.cardDesc3')}
                icon="/img/IOT.svg"
                iconAlt="IoT Mobile Applications logo"  
				xlOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et' ? 13 : 11.4}
				smOpenHeight={currentLocale === 'et' ? 17 : 14.2}
				xsOpenHeight={currentLocale === 'et' ? 17 : 14.8}
			/>
		</div>
        <div class="flex flex-col lg:flex-row xl:flex-col z-10 gap-5">
			<TechnologyCard
                title={$_('landing_page.mobdev.cardHead4')}
                text={$_('landing_page.mobdev.cardDesc4')}
                icon="/img/PWA.svg"
                iconAlt="Progressive Web Application logo"  
				xlOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et' ? 13 : 11.4}
				smOpenHeight={currentLocale === 'et' ? 17 : 14.2}
				xsOpenHeight={currentLocale === 'et' ? 17 : 14.8}
			/>
		</div>
	</div>
	<div class="hidden lg:flex xl:hidden gap-5 mt-[4.5rem] lg:mt-12">
		<div class="flex flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('landing_page.mobdev.cardHead1')}
				text={$_('landing_page.mobdev.cardDesc1')}
				icon="/img/NMA.svg"
				iconAlt="Native Mobile Application logo"
				lgOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.6rem]' : 'lg:hover:h-[13rem]'}
			/>
			<TechnologyCard
				title={$_('landing_page.mobdev.cardHead2')}
				text={$_('landing_page.mobdev.cardDesc2')}
				icon="/img/HMA.svg"
				iconAlt="Hybrid Mobile Application logo"
				lgOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13rem]'}
			/>
			<TechnologyCard
				title={$_('landing_page.mobdev.cardHead3')}
				text={$_('landing_page.mobdev.cardDesc3')}
				icon="/img/IOT.svg"
				iconAlt="IoT Mobile Applications logo"  
				lgOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13.1rem]'}
			/>
            <TechnologyCard
				title={$_('landing_page.mobdev.cardHead4')}
				text={$_('landing_page.mobdev.cardDesc4')}
				icon="/img/PWA.svg"
				iconAlt="Progressive Web Application logo"  
                lgOpenHeight={currentLocale === 'et' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13rem]'}
            />
		</div>
	</div>
	-->
</GeneralPanel>


<style class="postcss">
	
</style>