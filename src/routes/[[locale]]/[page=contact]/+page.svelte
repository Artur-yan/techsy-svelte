<script>
	// import { PUBLIC_RECAPTCHA_KEY } from '$env/static/public';

	import FifthStep from '../../../components/ContactSteps/FifthStep.svelte';
	import FirstStep from '../../../components/ContactSteps/FirstStep.svelte';
	import FourthStep from '../../../components/ContactSteps/FourthStep.svelte';
	import SecondStep from '../../../components/ContactSteps/SecondStep.svelte';
	import ThenksTab from '../../../components/ContactSteps/ThenksTab.svelte';
	import ThirdStep from '../../../components/ContactSteps/ThirdStep.svelte';


	
	import { _, locale } from 'svelte-i18n';
	import { currentStepValue } from '../../../store/stores'; // Import the store

	import { onMount } from 'svelte';


	let element;
	let currentStep;
	currentStepValue.subscribe((value) => {
  	currentStep = value;
	});
	$: currentLocale = $locale;


	const handleNextStep = () => {
		currentStep += 1;
		//element.scrollIntoView({ behavior: 'smooth' });
	
		/*
		setTimeout(function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
        },100);
		*/
	};

	const handlePreviousStep = () => {
		currentStep -= 1;
		//element.scrollIntoView({ behavior: 'smooth' });
		//window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div bind:this={element}></div>

<svelte:head>
	<title
		>{currentLocale == 'en-US'
			? 'Techsy - Web agency you can count on!'
			: 'Techsy - Veebiagentuur, kellele saab loota!'}</title
	>
	<meta
		name="description"
		content={currentLocale == 'en-US'
			? 'Techsy is a web agency that builds brands from every angle. Today, tomorrow and years from now. Web & mobile app development, maintenance and marketing. Software development, programming.'
			: 'Veebiagentuur, mis tegeleb veebi- ja mobiilirakenduste arendamisega. Ehitame brände igast küljest.'}
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="keywords"
		content={currentLocale == 'en-US'
			? 'making a website, programming, software development, web development, making web pages'
			: 'kodulehe tegemine, programmeerimine, tarkvaraarendus, veebiarendus, veebilehtede tegemine'}
	/>
	<script
		src="https://www.google.com/recaptcha/api.js?render=6Lcsrt4lAAAAAOUL1GSgOl4m0g1q4LM50aTzyNjs"
		async
		defer
	></script>
</svelte:head>



<!--bg-gradient-to-b to-bgRed from-bgBlue -->
<div class="background lg:fixed h-[158px] w-full top-0 lg:min-h-full" />



<!--
<div class="grid grid-cols-3" style="z-index: 99;">
	<div class="redDotsLeft lg:block hidden" style="">01</div>
	<div class="" style="width:680px">
		<div style=" position:relative;" class="mt-10">
			<div class="page-wrapper relative h-fit">
	
				<div class="mt-[58px] h-auto">
					<div class="form-wrapper px-[3.75rem] pb-[4.125rem] pt-[55px] md:pt-[4.75rem]">
	
						{#if currentStep === 0}
							<FirstStep onNextStep={handleNextStep} />
						{/if}
						{#if currentStep === 1}
								<SecondStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 2}
								<ThirdStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 3}
								<FourthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 4}
								<FifthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 5}
								<ThenksTab onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
	
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="redDotsRight" style="">03</div>
  </div>
-->

<div class="absolute top-0 w-screen">
	<div class="relative overflow-hidden">
		<div class="lg:mt-[126px] mt-[150px]">
			<div class = "redDotsLeft lg:block hidden">
				
			</div>
			<div class = "middlebox mr-0 ml-0 lg:mr-[20px] lg:ml-[20px] lg:w-[952px] w-[100%]">
				<div style=" position:relative;" class="">
					<div class="page-wrapper relative h-fit">
		
						<div class="h-auto">
							<div class="form-wrapper px-[3.75rem] pb-[4.125rem] pt-[55px] md:pt-[4.75rem]">
		
								{#if currentStep === 0}
									<FirstStep onNextStep={handleNextStep} />
								{/if}
								{#if currentStep === 1}
										<SecondStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
								{/if}
								{#if currentStep === 2}
										<ThirdStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
								{/if}
								{#if currentStep === 3}
										<FourthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
								{/if}
								{#if currentStep === 4}
										<FifthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
								{/if}
								{#if currentStep === 5}
										<ThenksTab onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
								{/if}
		
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class = "redDotsRight lg:block hidden">
				
			</div>
		</div>
	</div>
</div>







<!--
	<div style=" position:relative;" class="">
			<div class="page-wrapper relative h-fit">

				<div class="mt-[58px] h-auto">
					<div class="form-wrapper px-[3.75rem] pb-[4.125rem] pt-[55px] md:pt-[4.75rem]">

						{#if currentStep === 0}
							<FirstStep onNextStep={handleNextStep} />
						{/if}
						{#if currentStep === 1}
								<SecondStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 2}
								<ThirdStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 3}
								<FourthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 4}
								<FifthStep onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}
						{#if currentStep === 5}
								<ThenksTab onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />
						{/if}

					</div>
				</div>
			</div>
		</div>
<img src="../img/Uniondots.svg" alt="form_stars_mobile" class="stars" />
<img src="../img/Uniondots.svg" alt="form_stars_mobile" class="starsR" />
<img src="../img/form_stars_mobile.svg" alt="form_stars_mobile" class="starsMobile block md:hidden"/>
-->

<!--
	<img src="../img/Uniondots.svg" alt="form_stars_mobile" class="stars" />
<img src="../img/Uniondots.svg" alt="form_stars_mobile" class="starsR" />
-->


<img src="../img/form_stars_mobile.svg" alt="form_stars_mobile" class="starsMobile block md:hidden" />
	



<style lang="postcss">

	.background{/*
		background: linear-gradient(to top,rgb(222, 60, 75) , rgb(222, 60, 75) 50%,rgb(4, 32, 66), rgb(4, 32, 66) 50%);
		*/
		z-index:0;
		/*background: linear-gradient(to top, #DE3C4B 10%, #042042 70%);*/
		background: linear-gradient(171deg, #042042 14.19%, #DE3C4B 109.56%);
	}
	.middlebox{
		float:left; 
	}
	.redDotsRight{

		margin-top:90px;
		background-repeat: repeat-x;
		background-image: url("/img/Uniondots.svg");
		
		height: 363px;
		width:calc((100% - 995px) / 2);
		float: right;
		z-index: 999;

		-moz-transform: scaleX(1);
		-o-transform: scaleX(1);
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
	.redDotsLeft{

		margin-top:90px;
		background-repeat: repeat-x;
		background-image: url("/img/Uniondots.svg");
		
		height: 363px;
		
		width:calc((100% - 995px) / 2);
		float: left;
		
		-moz-transform: scaleX(-1);
		-o-transform: scaleX(-1);
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
		filter: FlipH;
		-ms-filter: "FlipH";
		
	}

	.stars {
		position: absolute;
		top: 250px;
		left: 8%;
	}

	.starsR {
		position: absolute;
		top: 250px;
		right: 8%;
	}

	.starsMobile {
		position: absolute;
		top: 125px;
		left:0;
		right:0;
		margin: auto;
		z-index: 10;
		width:330.32px;
		height:44.66px;
	}


	@media screen and (max-width:1700px) {
		.stars {
			position: absolute;
			top: 250px;
			left: 5%;
		}

		.starsR {
			position: absolute;
			top: 250px;
			right: 5%;
		}
	}

	@media screen and (max-width:1550px) {
		.stars {
			position: absolute;
			top: 250px;
			left: 1%;
		}

		.starsR {
			position: absolute;
			top: 250px;
			right: 1%;
		}
	}
	
	.form-modal {
		@apply form-wrapper px-[3.75rem] pt-[4.75rem] pb-[4.125rem];
	}
	.form_stars {
		position: relative;
		z-index: 10;
	}

	.form_stars::before {
		content: '';
		position: absolute;
		top: 4rem;
		left: 1rem;
		background-image: url(img/form_stars.svg);
		background-repeat: repeat-x;
		width: 99%;
		height: 30rem;
		overflow: hidden;
	}

	.form_stars_mob {
		position: absolute;
		top: 8rem;
		margin: 0 auto;
		width: 88%;
		z-index: 20;
		right: 0;
		left: 0;
	}

	@media screen and (max-width: 1024px) {
		.form_stars_mob {
			display: block;
		}
		.form_stars {
			display: none;
		}
	}

	.form-wrapper {
		background-color: #ffffff;
		height: auto;
		width: 100%;
		background-color: #ffffff;
		border-radius: 2rem;
		max-width: 60rem;
		margin: auto auto;
		-webkit-box-shadow: 18px 17px 6px rgba(38, 34, 34, 0.49);
		box-shadow: 15px 15px 3px -5px rgba(53, 48, 48, 0.49);
		position: relative;
		left: 0;
		right: 0;
		z-index: 10;
	}

	.steps-wrapper {
		height: auto;
		width: 100%;
		width: 75%;
		max-width: 60rem;
		margin: auto auto;
		position: relative;
	}

	@media screen and (max-width: 1024px) {
		.steps-wrapper {
			width: 100%;
			margin-top: 6rem;
		}
	}

	@media screen and (max-width: 768px) {
		.steps-wrapper {
			width: 100%;
			margin-top: 3rem;
		}
	}

	@media screen and (max-width: 1024px) {
		.form-wrapper {
			width: 100% !important;
			min-height: 85vh !important;
			border-radius: 0 !important;
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
	/*
	@media screen and (min-width: 1024px) and (min-height: 1400px) {
		
		.form-wrapper {
			transform: translateY(30%);
		}
	}*/

	.form_nda {
		display: flex;
		align-items: center;
		margin-top: 1rem;
	}


	.drawer-content::-webkit-scrollbar {
		display: none;
	}
	.menu {
		height: fit-content;
		border-radius: 20px 0px 0px 20px;
		background: linear-gradient(199.85deg, #042042 0%, #de3c4b 112.58%);
	}
	.drawer {
		position: absolute !important;
		height: auto !important;
		z-index: 99;
	}
	.drawer-toggle ~ .drawer-side > .drawer-overlay {
		position: fixed;
		transform: translate(0);
		will-change: transform;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
	}
</style>
