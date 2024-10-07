
<script>
	import { _ } from 'svelte-i18n';
	import Button from '../common/Button.svelte';
	import GoogleRating from '../common/GoogleRating.svelte';
	import { createEventDispatcher } from 'svelte'
	import Modal from '../common/Modal.svelte';
    import Clendly from '../common/Clendly.svelte';
    const dispatch = createEventDispatcher()
	export let imgSrc  = "";
	export let classNames  = "";
	export let imageConClass  = "";
	export let imageClass  = "";
	export let btnGroupClass  = "";
	export let btnText  = "panels.topPanel.btn";
	export let googleRatingShow  = true;
	export let videoIcoShow  = true;
	

	let openFormModal = false;

</script>
<div class="container mx-auto pb-10 lg:p-0 z-20 relative {classNames}">
	<slot name="others"></slot>

	<div class="grid grid-flow-col justify-stretch ">
		
		<div class="lg:mt-[223px] mt-[178px] max-w-[580px]">
			<slot name="headers"></slot>
			
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="grid grid-flow-row mt-[47px] mb-[40px] {btnGroupClass}">
				{#if googleRatingShow}
					<GoogleRating className="mb-[9px]"/>
				{/if}
				<div class="flex lg:flex-row flex-col" >
					<div style="">
						<Button
							label={$_(btnText)}
							type={"btn-arrow extraSmall"}
							classInside={"w-[253px] lg:w-auto"}
							onClick={() => {
								dispatch("btnClick")
							}}
							
						/>
					</div>
					{#if videoIcoShow}

					
						<div class="hidden lg:flex items-center justify-center w-[52px] text-center">
							<span class="textOr">{$_('panels.topPanel.or')}</span>
						</div>
						<div class="hidden lg:block">
							<Button
								ariaLabel="book for video meeting"
								label={""}
								type={"btn-calendly"}
								onClick={() => {
									openFormModal = true;
								}}
							/>
						</div>
						<div class="flex lg:hidden items-center justify-start text-left mt-[10px]" style="">

							<Button
								label={$_('panels.topPanel.orMobile_XS')}
								type={"btn-video extraSmall"}
								classInside={"w-[253px]"}
								onClick={() => {
									openFormModal = true;
								}}
								
							/>

							<!--
							<span on:click={() => {openFormModal = true;}} class="textOrMobile">{@html $_('panels.topPanel.orMobile')}</span>
							<span on:click={() => {openFormModal = true;}} class="textOrMobileXS hidden">{@html $_('panels.topPanel.orMobile_XS')}</span>

							<Button
								ariaLabel="book for video meeting"
								label={""}
								type={"btn-calendly-trans"}
								onClick={() => {
									openFormModal = true;
								}}
								className="w-[70px] h-[40px] ml-[10px]"
							/>
								-->
						</div>
						
					
					{/if}
					<!--
				
					<div class="lg:mt-0 mt-[10px]">
						<slot name="warning"></slot>
					</div>-->
				</div>
			</div>
			
		</div>
		<div class="xl:mt-[191px] w-[100%] pl-10 lg:mt-[200px] lg:block hidden {imageConClass}">
			<img class="right-0 float-right {imageClass}" src="{imgSrc}" 
			width="710" height="500"
			 alt="construction" fetchpriority="high"/>
		</div>
	  </div>
	
</div>

<div>
	<Modal open={openFormModal} on:close={() => {openFormModal = false;}}>
		<Clendly />
		<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
	</Modal>
</div>


<style lang="postcss">

	.textOr {
		color: #FFF;
		text-align: center;
		font-family: Inter;
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.textOrMobile,
	.textOrMobileXS {
		color: #FFF;
		font-family: Inter;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-decoration: underline;
		/*border-bottom: 1px solid #FFF;*/

	}

	
	
	@media (max-width: 382px){
		.textOrMobile{
			display: none;
		}
		.textOrMobileXS{
			display: block;
		}

	
	}

	



	@media (min-width: 1280px){
		.heroSec {
			max-width: 1354px;
		}
	}

	@media (min-width: 1536px){
		.heroSec {
			max-width: 1536px;
		}
	}

	@media (max-width: 480px){
		.txt2 {
			font-size: 40px;
			line-height: 45px;
		}

	}


	.leftPanel{
		float: left;
	}
	.rightPanel{
		float: right;
	}

	.mobile-background {
		background-image: radial-gradient(125% 45% at 100% 50%, #de3c4b 0%, transparent 100%);
		top: 11px;
		left: -160px;
		right: -200px;
		rotate: -15deg;
	}

	.image-background {
		background-image: radial-gradient(ellipse at center, #de3c4b 5%, transparent 50%);
		rotate: -35deg;
		top: 120px;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 0;
		height: 600px;
		width: 1100px;
	}
	@media (max-width: 1536px) {
		.image-background {
			left: -150px;
		}
	}
	@media (max-width: 1280px) {
		.image-background {
			top: 110px;
			height: 480px;
			width: 880px;
		}
		.gradient-text {
			background: white;
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
</style>
