<script>
	import { _, locale } from 'svelte-i18n';
	import Card from './Card.svelte';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

	import Web_dev_logo from '$lib/assets/img/web_dev_logo.svg';
	import mob_dev_logo from '$lib/assets/img/mob_dev_logo.svg';
	import custom_soft_logo from '$lib/assets/img/custom_soft_logo.svg';
	import UXUI_logo from '$lib/assets/img/UX-UI_logo.svg';
	import maintenance from '$lib/assets/img/maintenance.svg';
	import marketing_sales_logo from '$lib/assets/img/marketing_sales_logo.svg';
	

	export let svgs = [];
	export let location = "";
	export let classDescription = "";
	export let readMores = [];


	/*
	const svgs = [
		Web_dev_logo,
		mob_dev_logo,
		custom_soft_logo,
		UXUI_logo,
		maintenance,
		marketing_sales_logo
	];
	*/

	let cardsComponents = [];
    let cardsInfo = [];
	const upDateVal = () => {
        cardsInfo = [];
		for (let index = 0; index < 3; index++) {
			let readStatus0 = readMores.find((element) => (element.index-1)==index*2);
			let readStatus1 = readMores.find((element) => (element.index-1)==index*2+1);

			cardsInfo.push([
				{
					title: $_(`${location}.data.${index*2}.title`),
					text: $_(`${location}.data.${index*2}.text`),
					icon: svgs[index*2],
					iconAlt: "web development logo",
					readMore: readStatus0 == undefined ? false : readStatus0.index,
					go: readStatus0 == undefined ? false : readStatus0.go,
					colorTextAndArrow: readStatus0 == undefined ? false : readStatus0.colorTextAndArrow

				},
				{
					title: $_(`${location}.data.${index*2+1}.title`),
					text: $_(`${location}.data.${index*2+1}.text`),
					icon: svgs[index*2+1],
					iconAlt: "web development logo",
					readMore: readStatus1 == undefined ? false : readStatus1.index,
					go: readStatus1 == undefined ? false : readStatus1.go,
					colorTextAndArrow: readStatus1 == undefined ? false : readStatus1.colorTextAndArrow										
				}

			])
		}
    }
	upDateVal();
    $: $locale, upDateVal();

	const closeOther = (i) => {
		console.log(cardsComponents);
        cardsComponents.forEach((element,index) => {
            if(index != i){
                element.closeCon();
            }
        });
       
    }

</script>


<GeneralPanel 
	headerOne={$_(location+'.headerOne')} 
	headerSecond={$_(location+'.headerSecond')}
	description={$_(location+'.description') == location+'.description' ? "" : $_(location+'.description')}
	classNames="lg:mt-[170px] mt-[40px]"
	classDescription="max-w-[812px] m-auto {classDescription}">

	<div class="xl:h-[250px] h-[800px]" style="position: relative;">
        <div style="position:absulute">
            <div class="flex xl:flex-row flex-col justify-center gap-[28px] mt-[66px]">
				{#each cardsInfo as card1D, n}
					<div class="flex flex-col gap-[25px]">
						{#each card1D as info, i}
							<Card 
								defaultOpenForMobile={n==0&&i==0?true:false} 
								isMobile={true} 
								readMore={info.readMore}
								readMoreClickGoTo={info.go}
								colorTextAndArrow={info.colorTextAndArrow}
								title={info.title}
								text={info.text}
								icon={info.icon}
								iconAlt={info.iconAlt} 
								bind:this="{cardsComponents[n*2+i]}" 
								on:close={() => {closeOther(n*2+i)}}
							/>
						{/each}
					</div>
				{/each}
            </div>
        </div>
    </div>
	
		<!--
	<div class="xl:block hidden" style="position: relative; height:300px;">
		<div style="position:absulute">
			
			<div class="flex xl:flex-row flex-col gap-[28px] mt-[66px]">
				<div class="flex flex-col gap-[25px]">

					<Card 
						isMobile= false
						title={$_('web_development')}
						text={$_('web_development_text')}
						icon={web_dev_logo}
						iconAlt="web development logo" />
					<Card 
						isMobile= false
						title={$_('mobile_development')}
						text={$_('mobile_development_text')}
						icon={mob_dev_logo}
						iconAlt="mobile development logo" />
				</div>
				<div class="flex flex-col gap-[25px]">

					<Card 
						isMobile= false
						title={$_('custom_software')}
						text={$_('custom_software_text')}
						icon={custom_soft_logo}
						iconAlt="custom software development logo" />
					<Card 
						isMobile= false
						title={$_('ux_ui_design')}
						text={$_('ux_ui_design_text')}
						icon={UXUI_logo}
						iconAlt="UX/UI design logo" />

				</div>
				<div class="flex flex-col gap-[25px]">

					<Card 
						isMobile= false
						title={$_('website_maintenance')}
						text={$_('website_maintenance_text')}
						icon={maintenance}
						iconAlt="website maintenance logo" />
					<Card 
						isMobile= false
						title={$_('marketing_sales')}
						text={$_('marketing_sales_text')}
						icon={marketing_sales_logo}
						iconAlt="Marketing & Sales logo" />


					
				</div>
			</div>
		</div>
	</div>
	<div class="xl:hidden block">
		<div class="flex xl:flex-row flex-col gap-[28px] mt-[66px]">
			<div class="flex flex-col gap-[25px]">

				<Card 
					isMobile={true}
					title={$_('web_development')}
					text={$_('web_development_text')}
					icon={web_dev_logo}
					iconAlt="web development logo" />
				<Card 
					isMobile={true}
					title={$_('mobile_development')}
					text={$_('mobile_development_text')}
					icon={mob_dev_logo}
					iconAlt="mobile development logo" />
			</div>
			<div class="flex flex-col gap-[25px]">

				<Card 
					isMobile={true}
					title={$_('custom_software')}
					text={$_('custom_software_text')}
					icon={custom_soft_logo}
					iconAlt="custom software development logo" />
				<Card 
					isMobile={true}
					title={$_('ux_ui_design')}
					text={$_('ux_ui_design_text')}
					icon={UXUI_logo}
					iconAlt="UX/UI design logo" />

			</div>
			<div class="flex flex-col gap-[25px]">

				<Card 
					isMobile={true}
					title={$_('website_maintenance')}
					text={$_('website_maintenance_text')}
					icon={maintenance}
					iconAlt="website maintenance logo" />
				<Card 
					isMobile={true}
					title={$_('marketing_sales')}
					text={$_('marketing_sales_text')}
					icon={marketing_sales_logo}
					iconAlt="Marketing & Sales logo" />
			</div>
		</div>
	</div>


	<div class="grid grid-rows-2 grid-flow-col gap-3">
		<TechnologyCard
			title={$_('web_development')}
			text={$_('web_development_text')}
			icon="/img/web_dev_logo.svg"
			iconAlt="web development logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13rem]' : 'lg:hover:h-[13rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 11.6 : 11.4}
			smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 14.2}
			xsOpenHeight={currentLocale === 'et-ET' ? 15 : 14.2}/>
		<TechnologyCard
			title={$_('mobile_development')}
			text={$_('mobile_development_text')}
			icon="/img/mob_dev_logo.svg"
			iconAlt="mobile development logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.5rem]' : 'lg:hover:h-[13rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 12.8 : 11.4}
			smOpenHeight={currentLocale === 'et-ET' ? 15.6 : 14.2}
			xsOpenHeight={currentLocale === 'et-ET' ? 16.4 : 15.4}
			/>
		<TechnologyCard
			title={$_('custom_software')}
			text={$_('custom_software_text')}
			icon="/img/custom_soft_logo.svg"
			iconAlt="custom software development logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13.2rem]' : 'lg:hover:h-[13rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 11.5 : 11.5}
			smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 14.2}
			xsOpenHeight={currentLocale === 'et-ET' ? 15 : 15}
		/>
		<TechnologyCard
			title={$_('ux_ui_design')}
			text={$_('ux_ui_design_text')}
			icon="/img/UX-UI_logo.svg"
			iconAlt="UX/UI design logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 13 : 11.4}
			smOpenHeight={currentLocale === 'et-ET' ? 17 : 14.2}
			xsOpenHeight={currentLocale === 'et-ET' ? 17 : 15.2}
		/>
		<TechnologyCard
			title={$_('website_maintenance')}
			text={$_('website_maintenance_text')}
			icon="/img/maintenance.svg"
			iconAlt="website maintenance logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 13 : 11.4}
			smOpenHeight={currentLocale === 'et-ET' ? 17 : 14.2}
			xsOpenHeight={currentLocale === 'et-ET' ? 17 : 14.8}
		/>
		<TechnologyCard
			title={$_('marketing_sales')}
			text={$_('marketing_sales_text')}
			icon="/img/marketing_sales_logo.svg"
			iconAlt="Marketing & Sales logo"
			xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13.3rem]' : 'lg:hover:h-[11.5rem]'}
			mdOpenHeight={currentLocale === 'et-ET' ? 11.4 : 10}
			smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 11.4}
			xsOpenHeight={currentLocale === 'et-ET' ? 14.2 : 11.4}
		/>
	</div>
	-->
		<!--
	<div class="flex flex-col xl:flex-row lg:hidden xl:flex gap-5 mt-[4.5rem] lg:mt-12">
		<div class="flex flex-col xl:flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('web_development')}
				text={$_('web_development_text')}
				icon="/img/web_dev_logo.svg"
				iconAlt="web development logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 11.6 : 11.4}
				smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 14.2}
				xsOpenHeight={currentLocale === 'et-ET' ? 15 : 14.2}
			/>
			<TechnologyCard
				title={$_('mobile_development')}
				text={$_('mobile_development_text')}
				icon="/img/mob_dev_logo.svg"
				iconAlt="mobile development logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.5rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 12.8 : 11.4}
				smOpenHeight={currentLocale === 'et-ET' ? 15.6 : 14.2}
				xsOpenHeight={currentLocale === 'et-ET' ? 16.4 : 15.4}
			/>
		</div>
		<div class="flex flex-col xl:flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('custom_software')}
				text={$_('custom_software_text')}
				icon="/img/custom_soft_logo.svg"
				iconAlt="custom software development logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13.2rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 11.5 : 11.5}
				smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 14.2}
				xsOpenHeight={currentLocale === 'et-ET' ? 15 : 15}
			/>
			<TechnologyCard
				title={$_('ux_ui_design')}
				text={$_('ux_ui_design_text')}
				icon="/img/UX-UI_logo.svg"
				iconAlt="UX/UI design logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 13 : 11.4}
				smOpenHeight={currentLocale === 'et-ET' ? 17 : 14.2}
				xsOpenHeight={currentLocale === 'et-ET' ? 17 : 15.2}
			/>
		</div>
		<div class="flex flex-col lg:flex-row xl:flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('website_maintenance')}
				text={$_('website_maintenance_text')}
				icon="/img/maintenance.svg"
				iconAlt="website maintenance logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.7rem]' : 'lg:hover:h-[13rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 13 : 11.4}
				smOpenHeight={currentLocale === 'et-ET' ? 17 : 14.2}
				xsOpenHeight={currentLocale === 'et-ET' ? 17 : 14.8}
			/>
			<TechnologyCard
				title={$_('marketing_sales')}
				text={$_('marketing_sales_text')}
				icon="/img/marketing_sales_logo.svg"
				iconAlt="Marketing & Sales logo"
				xlOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13.3rem]' : 'lg:hover:h-[11.5rem]'}
				mdOpenHeight={currentLocale === 'et-ET' ? 11.4 : 10}
				smOpenHeight={currentLocale === 'et-ET' ? 14.2 : 11.4}
				xsOpenHeight={currentLocale === 'et-ET' ? 14.2 : 11.4}
			/>
		</div>
	</div>

	<div class="hidden lg:flex xl:hidden gap-5 mt-[4.5rem] lg:mt-12">
		<div class="flex flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('web_development')}
				text={$_('web_development_text')}
				icon="/img/web_dev_logo.svg"
				iconAlt="web development logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.6rem]' : 'lg:hover:h-[13rem]'}
			/>
			<TechnologyCard
				title={$_('mobile_development')}
				text={$_('mobile_development_text')}
				icon="/img/mob_dev_logo.svg"
				iconAlt="mobile development logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13rem]'}
			/>
			<TechnologyCard
				title={$_('custom_software')}
				text={$_('custom_software_text')}
				icon="/img/custom_soft_logo.svg"
				iconAlt="custom software development logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13.1rem]'}
			/>
		</div>
		<div class="flex flex-col xl:flex-col z-10 gap-5">
			<TechnologyCard
				title={$_('ux_ui_design')}
				text={$_('ux_ui_design_text')}
				icon="/img/UX-UI_logo.svg"
				iconAlt="UX/UI design logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13rem]'}
			/>
			<TechnologyCard
				title={$_('website_maintenance')}
				text={$_('website_maintenance_text')}
				icon="/img/maintenance.svg"
				iconAlt="website maintenance logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[14.8rem]' : 'lg:hover:h-[13.2rem]'}
			/>
			<TechnologyCard
				title={$_('marketing_sales')}
				text={$_('marketing_sales_text')}
				icon="/img/marketing_sales_logo.svg"
				iconAlt="Marketing & Sales logo"
				lgOpenHeight={currentLocale === 'et-ET' ? 'lg:hover:h-[13.3rem]' : 'lg:hover:h-[11.6rem]'}
			/>
		</div>
	</div>
	-->
</GeneralPanel>


<style class="postcss">
	
</style>
