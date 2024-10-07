<script>
	import { _, locale } from 'svelte-i18n';
	import DiscussProjectModal from './DiscussProjectModal.svelte';
	import TopPanel from '../../Panels/TopPanel.svelte';
	$: currentLocale = $locale;
	import logo from '$lib/assets/img/heroSec.webp';


	let isModalOpen  = false;

	const closeFormModal = () => {
		isModalOpen  = false;
	}
	
</script>

<DiscussProjectModal openFormModal={isModalOpen } on:close={closeFormModal}/>

<TopPanel imgSrc={logo} on:btnClick={()=>{isModalOpen = true;}}>

	<div slot="headers">
		
		<p class="txt1 
			text-white
			text-[22px]
			font-semibold
			font-['Inter']">
			{$_('sections.heroSection.headerOne')}

		</p>
			
		<!--Desktop -->
		<h1 class="lg:block hidden txt2 headerTwo font-poppins 
			lg:text-[64px] font-bold leading-[64px] 
			text-[48px]">
				{@html $_('sections.heroSection.headerSecondP1')}
			</h1>
		<h1 class="lg:block hidden txt2 headerTwo font-poppins 
			lg:text-[64px] font-bold 
			leading-[64px] text-[48px] mt-2 lg:mt-0">
				{@html $_('sections.heroSection.headerSecondP2')}
			</h1>

		<!--Mobile -->
		<h1 class="lg:hidden block txt2 headerTwo font-poppins 
			lg:text-[64px] font-bold leading-[55px] 
			text-[48px]">
				{@html $_('sections.heroSection.headerSecondP1Mobile')}
			</h1>
		<h1 class="lg:hidden block txt2 headerTwo font-poppins 
			lg:text-[64px] font-bold 
			leading-[55px] text-[48px] lg:mt-0">
				{@html $_('sections.heroSection.headerSecondP2Mobile')}
			</h1>
		<!--
		<p class="txt3 
		font-inter text-white text-[22px] 
		font-[300] leading-[32px] mt-[27px]
			">{$_('sections.heroSection.description')}
		</p>-->
		
		{#if currentLocale == 'en-US'}
		<div class="lg:w-[464px] lg:max-w-[464px] max-w-[339px] lg:mt-[27px] mt-[60px] description">
			{@html $_('sections.heroSection.description')}
		</div>
		{:else}
		<div class="lg:w-[503px] lg:max-w-[503px] max-w-[339px] lg:mt-[27px] mt-[60px] description">
			{@html $_('sections.heroSection.description')}
		</div>
		{/if}
		
	</div>
	<!--
	<h3 slot="warning" 
		class="block text-white text-lg 
		font-normal font-['Inter'] leading-snug lg:ml-5 ml-0 lg:max-w-[180px]"
	>
		{@html $_('sections.heroSection.littleWarning')}
	</h3>
	-->
</TopPanel>



<style lang="postcss">

	@media (max-width: 1024px){
		.description{
			color: #FFF5F5;
			font-family: Inter;
			font-size: 19px;
			font-style: normal;
			font-weight: 400;
			line-height: 30px; /* 157.895% */
		}

		.description > :global(span) {
			font-weight: 500;
		}
	}
	@media (min-width: 1024px){

		.description{
			color: #FFF;
			font-family: Inter;
			font-size: 19px;
			font-style: normal;
			font-weight: 300;
			line-height: 32px; /* 168.421% */
		}
		.description > :global(span) {
			font-weight: 400;
		}

		.txt2 > :global(span) {
			/*display: inline-block;*/
			background: linear-gradient(180deg, #FFF 63.84%, rgba(255, 255, 255, 0.38) 93.26%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		
		
	}
	@media (max-width: 1024px){
		.headerTwo{
			color: white;
		}
	}
	@media (max-width: 480px){
		.txt2 {
			font-size: 48px;
		}
	}
</style>
