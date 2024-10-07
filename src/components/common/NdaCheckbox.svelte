<script>
	import { _, locale} from 'svelte-i18n';
	import { ndaProtection } from '../../store/stores';
	import RadioButton from './RadioButton.svelte';

	export let isCenter;
	export let labelClass;
	export let iconClass;

	$: currentLocale = $locale;
</script>
<div class="information flex flex-row" 
	style="--position-tooltip: {isCenter ? '-50%' : '-90%'}; 
	--sizeT:{currentLocale == 'et' ? -65 : -95}px;">
	<div class="flex-row items-center pr-4 gap-4 hidden lg:flex">
		<RadioButton
			type="radio"
			name={$_('common.nda.destop')}
			value={$ndaProtection}
			onChange={(value) => ndaProtection.set(value)}
			className={labelClass}
		/>

		<div class="group tooltip h-12" data-tip={$_('nda_tooltip')}>
			<div class="border-div group-hover:border-t-GrayLight delay-200 transition-all" />
			<img src="/img/info.svg" alt="i logo" class="mt-3" />
		</div>
	</div>

			<!-- THIS IS MOBILE VERSION CHECKBOX -->
	<div class="flex flex-row items-center relative lg:hidden">
		<RadioButton
			type="radio"
			name={$_('common.nda.mobile')}
			value={$ndaProtection}
			onChange={(value) => ndaProtection.set(value)}
			className={labelClass}
		/>
		<div class="group tooltip h-12 ml-5" data-tip={$_('nda_tooltip')}>
			<div class="border-div group-hover:border-t-GrayLight 
			delay-200 transition-all" />
			<img src="/img/info.svg" alt="i logo" class="mt-3" />
		</div>
		<!-- <div class="group tooltip h-12 absolute left-44 top-4" data-tip={$_('nda_tooltip')}>
			<div class="border-div group-hover:border-t-GrayLight delay-200 transition-all" />
			<img
				src="/img/info.svg"
				alt="i logo"
				class={`${iconClass || ''} mt-3`}
				height="20"
				width="20"
			/>
		</div> -->
	</div>
</div>

<style lang="postcss">
	.modal-box {
		max-width: none;
		min-width: 42.5rem;
	}

	.tooltip:before {
		transform: translateX(var(--position-tooltip));
		/*box-shadow: 3px 6px 2px 2px rgba(195, 202, 209, 0.2);*/
		border: 0.5px solid #c3cad1;
		bottom: 3.6rem;
		right: 3.6rem;

		@apply px-5 pb-4 pt-3 bg-white font-inter text-Black font-normal text-xs;
	}

	.tooltip::after {
		/*
		border-width: 0.875rem;
		bottom: 3.2rem;
		border-color: white transparent transparent transparent;
		z-index: 9999999;
		position: relative;
		*/
	}
	@media (max-width: 1280px) {
		.tooltip:after {
			/*bottom: 20
			*/
		}
	}

	@media (min-width: 768px) {
		.tooltip:before {
			transform: translate(calc(var(--sizeT)), 150px);
		}
		.border-div {
			position: absolute;
			top: 25px;
			right: -1px;
			border: 0.938rem solid;
			border-color: transparent transparent transparent transparent;
			transition-delay: 0.1s;
			transform: rotate(180deg);
		
		}
	}

	@media (max-width: 768px) {
		.tooltip:before {
			transform: translateX(-90%);
		}
		.border-div {
		position: absolute;
		width: 0;
		height: 0;
		top: -0.66rem;
		right: -1px;


		/*
		border-bottom: solid 50px transparent !important;
		border-top: solid 50px black !important;
		border-left: solid 50px transparent !important;
		border-right: solid 50px transparent !important;*/
		
		
		/*
		border-left: 20px solid rgb(55, 0, 255);
  		border-right: 20px solid rgb(255, 0, 157);
		border-top: 20px solid rgb(166, 10, 10) !important;
		border-bottom: 20px solid rgb(195, 255, 0);

		outline-style: solid;
		outline-color: black;
		outline-width: thin;
		*/

		
		border: 0.938rem solid rgb(232, 13, 13);
		border-color: transparent transparent transparent transparent;
		transition-delay: 0.1s;
		
		//color: rgb(255, 0, 0);
		//background-color: red;
		
	}
	}



	.tooltip{
		--tooltip-tail: 0px !important;
	}
</style>
