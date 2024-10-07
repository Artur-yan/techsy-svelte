<script>
	import { _ } from 'svelte-i18n';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

	import Essti from '../../../svgs/Companies/eesti.svelte';
	import TrustCompany from '../../../svgs/Companies/trustCompany.svelte';
	import Olympic from '../../../svgs/Companies/olympic.svelte';
	import Yara_int from '../../../svgs/Companies/yara-int.svelte';

	import SpreadTheSign from '../../../svgs/Companies/spreadTheSign.svelte';
	import Uk_logo from '../../../svgs/Companies/uk_logo.svelte';

	export let className="";


	let companiesList = [
		{ link: 'https://www.eesti200.ee/', src: Essti, 
			alt: 'EESTI logo', 
			color: "#C3CAD1" },
		{ link: 'https://trustlynx.com', src: TrustCompany, alt: 'trust', color: "#C3CAD1" },
		{ link: 'https://www.olympic-casino.com/', src: Olympic, alt: 'olympic logo', color: "#C3CAD1" },
		{ link: 'https://www.yara.ee/', src: Yara_int, alt: 'yara international logo', color: "#C3CAD1" },

		{ link: 'https://press.spreadthesign.com/', src: SpreadTheSign, alt: 'RUMMU logo', color: "#C3CAD1" },
		{ link: 'https://valitsus.ee/en', src: Uk_logo, alt: 'republic of estonia logo', color: "#C3CAD1" },
	];
	function handleMouseOver(alt) {
		companiesList.find(x => x.alt == alt).color = "#DE3C4B";
		companiesList = [...companiesList];
		//console.log("handleMouseOver",company)
		
	}
	function handleMouseOut(alt) {
		companiesList.find(x => x.alt == alt).color = "#C3CAD1";
		companiesList = [...companiesList];
	}
</script>

<GeneralPanel 
headerOne={$_('sections.companiesSection.headerOne')} 
headerSecond="{$_('sections.companiesSection.headerSecond')}" 
classNames="lg:mt-[170px] mt-[80px] z-[3] {className}">
	<div class="flex flex-col items-center  lg:flex-row justify-around mt-14 lg:mt-20">
	
		{#each companiesList as company}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<a href={company.link} target="”_blank”" aria-label="{company.alt}" >
				<div on:mouseover={() => handleMouseOver(company.alt)} 
					on:mouseout={() =>handleMouseOut(company.alt)} class="mb-[40px] lg:mb-0">
					<svelte:component this={company.src} color={company.color}>
						(Slotted content)
					</svelte:component>
				</div>
			</a>
		{/each}
		<!--
		{#each companiesList as company}
			<a href={company.link} target="”_blank”">
				<img src={company.src} alt={company.alt} class="companiesImage mb-[40px] lg:mb-0" style="color: white;"/>
			</a>
		{/each}
		-->
	
			<!--
		<img src='/img/companie.png' class="lg:block hidden" alt="componies"/>
		<img src='/img/companiesMobile.png' class="lg:hidden block" alt="componies"/>
		-->

	</div>

</GeneralPanel>

<style lang="postcss">
	
	.companiesImage:hover{
		filter: brightness(50%) sepia(100) saturate(100) hue-rotate(25deg);
		/*filter: invert(34%) sepia(73%) saturate(6012%) hue-rotate(340deg) brightness(85%) contrast(97%);*/
	}
	.companies {
		z-index: 10;
		border-radius: 0.75rem;
		padding-top: 1.75rem;
		padding-bottom: 1.75rem;
		@apply rounded-xl py-7 z-10;
	}

	/*
	.companies img {
		height: 5rem;
		align-self: center;
		opacity: 0.6;
		--tw-grayscale: grayscale(100%);
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
			var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		@apply h-20 self-center lg:h-14 xl:h-16 2xl:h-20 grayscale opacity-60 transition duration-300 ease-in-out lg:hover:grayscale-0 lg:hover:opacity-100;
	}*/

	@media (min-width: 1024px) {
		.companies img:hover {
			opacity: 1;
			--tw-grayscale: grayscale(0);
			filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
				var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
				var(--tw-drop-shadow);
		}
	}
	@media (min-width: 1024px) {
		.companies {
			padding: 1.5rem;
		}
		.companies img {
			height: 3.5rem;
		}
	}

	@media (min-width: 1280px) {
		.companies img {
			height: 4rem;
		}
	}

	@media (min-width: 1536px) {
		.companies img {
			height: 5rem;
		}
	}
	@media screen and (max-width: 360px) {
		.companies img {
			height: 4rem !important;
		}
	}
</style>
