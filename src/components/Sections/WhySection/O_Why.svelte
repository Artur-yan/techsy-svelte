<script>
    import { _ } from 'svelte-i18n';
	import Card from './O_Card.svelte';
    import Button from '../../common/Button.svelte';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';
	/*import { register } from 'swiper/element/bundle';*/
	import Carousel from '../../common/Carousel.svelte';
   	/*register();*/
	

	import whyPartnerLeft from '$lib/assets/img/whyPartnerLeft.svg';
	import whyPartnerLeftIcon from '$lib/assets/img/whyPartnerLeftIcon.svg';

	import whyPartnerMiddle from '$lib/assets/img/whyPartnerMiddle.svg';
	import whyPartnerMiddleIcon from '$lib/assets/img/whyPartnerMiddleIcon.svg';

	import whyPartnerRight from '$lib/assets/img/whyPartnerRight.svg';
	import whyPartnerRightIcon from '$lib/assets/img/whyPartnerRightIcon.svg';

	import mobileWhyOrange from '$lib/assets/img/mobileWhy-Orange.svg';

	import mobileWhyPurple from '$lib/assets/img/mobileWhy-Purple.svg';

	import mobileWhyBlue from '$lib/assets/img/mobileWhy-Blue.svg';


</script>

<GeneralPanel 
headerOne={$_('sections.whySection.headerOne')}
 headerSecond="{$_('sections.whySection.headerSecond')}" 
 classNames="lg:mt-[170px] mt-[80px] pl-0 pr-0">


	<div class="hidden xl:flex flex items-center flex-row justify-center mt-14 lg:mt-20">
		<!--
		{#each companiesList as company}
			<div class="companies">
				<a href={company.link} target="”_blank”">
					<img src={company.src} alt={company.alt}  style="color: white;"/>
				</a>
			</div>
		{/each}
		-->
		<Card 
			src={whyPartnerLeft}
			srcIcon={whyPartnerLeftIcon}
			iconClass={"top-[65px] left-[37px]"}
			header={$_('sections.whySection.cardLeft.header')}
			headerClass={"left-[121px] top-[70px]"}
			description={$_('sections.whySection.cardLeft.description')}
			descriptionClass={"top-[152px] left-[43px] w-[330px]"}
			height="435"
			width="402">
		</Card>
		<Card 
			src={whyPartnerMiddle}
			srcIcon={whyPartnerMiddleIcon}
			iconClass={"top-[75px] left-[65px]"}
			header={$_('sections.whySection.cardMiddle.header')}
			headerClass={"left-[145px] top-[82px]"}
			description={$_('sections.whySection.cardMiddle.description')}
			descriptionClass={"top-[160px] left-[65px] w-[287px]"}
			height="386"
			width="416">
		</Card>
		<Card 
			src={whyPartnerRight}
			srcIcon={whyPartnerRightIcon}
			iconClass={"top-[71px] left-[65px]"}
			header={$_('sections.whySection.cardRight.header')}
			headerClass={"left-[145px] top-[80px]"}
			description={$_('sections.whySection.cardRight.description')}
			descriptionClass={"top-[153px] left-[65px] w-[246px]"}
			height="382"
			width="372">
		</Card>
		
	</div>

	<div class="block xl:hidden mt-14 lg:mt-20">
		<Carousel>
			<Card 
				slot="item1"
				src={mobileWhyOrange}
				srcIcon={whyPartnerLeftIcon}
				header={$_('sections.whySection.cardLeft.header')}
				description={$_('sections.whySection.cardLeft.description')}
				iconClass={"top-[65px] left-[30px]"}
				headerClass={"left-[114px] top-[74px]"}
				descriptionClass={"top-[149px] left-[30px] w-[289px]"}
				height="456"
				width="367">
			</Card>
			<Card 
				slot="item2"
				src={mobileWhyPurple}
				srcIcon={whyPartnerMiddleIcon}		
				header={$_('sections.whySection.cardMiddle.header')}
				description={$_('sections.whySection.cardMiddle.description')}
				iconClass={"top-[65px] left-[40px]"}
				headerClass={"left-[114px] top-[74px]"}
				descriptionClass={"top-[140px] left-[40px] w-[287px]"}
				height="350"
				width="363">
			</Card>
			<Card 
				slot="item3"
				src={mobileWhyBlue}
				srcIcon={whyPartnerRightIcon}
				header={$_('sections.whySection.cardRight.header')}
				description={$_('sections.whySection.cardRight.description')}
				iconClass={"top-[65px] left-[40px]"}
				headerClass={"left-[114px] top-[74px]"}
				descriptionClass={"top-[150px] left-[40px] w-[280px]"}
				height="374"
				width="352">
			</Card>
		</Carousel>
	</div>
	
	<!--
	<swiper-container
		class="block  xl:hidden h-[430px] mt-14 lg:mt-20"
		pagination={{
			hideOnClick: false,
			clickable: true
		}}
	>
		<swiper-slide>
			<div class="flex flex-col items-center justify-around">
				<Card 
					src="/img/whyPartnerLeft.svg"
					srcIcon="/img/whyPartnerLeftIcon.svg"
					header={$_('sections.whySection.cardLeft.header')}
					description={$_('sections.whySection.cardLeft.description')}>
				</Card>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="flex flex-col items-center justify-around">
				<Card 
					src="/img/whyPartnerMiddle.svg"
					srcIcon="/img/whyPartnerMiddleIcon.svg"
					header={$_('sections.whySection.cardMiddle.header')}
					description={$_('sections.whySection.cardMiddle.description')}>
				</Card>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="flex flex-col items-center justify-around">
				<Card 
					src="/img/whyPartnerRight.svg"
					srcIcon="/img/whyPartnerRightIcon.svg"
					header={$_('sections.whySection.cardRight.header')}
					description={$_('sections.whySection.cardRight.description')}>
				</Card>
			</div>
		</swiper-slide>
	  </swiper-container>
	  -->
	<!--
	<p class="text-white font-poppins text-[24px] mt-[90px]">{$_('sections.whySection.waitingFor')}</p>

	
	
	<div>
		<div style="margin-left: 50%;  transform: translateX(-50%);">
			<div style="float:left;">
				<Button
					label={$_('sections.whySection.btn1')}
					type={"btn-arrow"}
					onClick={() => {
					}}
					style=""
				/>
			</div>
			<div style="float:left; padding-left:20px;">
				<Button
					label={$_('sections.whySection.btn2')}
					type={"btn-arrow-trans mt-5 lg:mt-0"}
					onClick={() => {
					}}
					style=""
				/>
			</div>
		</div>
	</div>
	-->
	<!--
	<div class="flex lg:flex-row flex-col items-center justify-center mt-[17px]">
		<div class="w-[300px] h-[50px] relative">
			<Button
				label={$_('sections.whySection.btn1')}
				type={"btn-arrow"}
				onClick={() => {
				}}
				style="margin-right:10px; position:absolute; left:0;"
			/>
		</div>
		<div class="w-[250px] h-[50px] relative">
			
			<Button
				label={$_('sections.whySection.btn2')}
				type={"btn-arrow-trans mt-5 lg:mt-0"}
				onClick={() => {
				}}
				style="position:relative; float:left;"
			/>
		</div>
		
		
	</div>	
	
	-->
	

</GeneralPanel>
