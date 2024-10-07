<script>
	import { _, locale } from 'svelte-i18n';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';
	

	import csharp from '$lib/assets/img/csharp.svg';
	import dotNet from '$lib/assets/img/dotNet.svg';
	import java from '$lib/assets/img/java.svg';
    import swift from '$lib/assets/img/swift.svg';
    import react from '$lib/assets/img/react.svg';
	import flutter from '$lib/assets/img/flutter.svg';
	import firebase from '$lib/assets/img/firebase.svg';


	const technologiesList = [
		{ src: csharp, alt: 'csharp', label: 'C#', tooltip: 'C# (Mobile)' },
		{ src: dotNet, alt: '.net', label: '.Net', tooltip: '.Net' },
		{ src: java, alt: 'java', label: 'Java', tooltip: 'Java' },
		{ src: swift, alt: 'swift', label: 'Swift', tooltip: 'Swift' },
		{ src: react, alt: 'react', label: 'React', tooltip: 'React' },
		{ src: flutter, alt: 'flutter', label: 'Flutter', tooltip: 'Flutter' },
		{ src: firebase, alt: 'firebase', label: 'Firebase', tooltip: 'Firebase' }

	];
	const doubleTechList = [...technologiesList, ...technologiesList, ...technologiesList];
	//const doubleTechList = [...technologiesList,];
	let isPaused = 'running';

	function handleMouseEnter() {
		isPaused = 'paused';
	}

	function handleMouseLeave() {
		isPaused = 'running';
	}
	//--is_animation_running: running
</script>
<GeneralPanel 

	headerOne={$_('sections.technologiesSection.headerOne')}
 	headerSecond="{$_('sections.technologiesSection.headerSecond')}"
  	classNames="lg:mt-[170px] mt-[80px]">
	<section class="carousel" style="--is_animation_running: {isPaused}">
		<div class="slide-wrapper">
			{#each doubleTechList as technology}
				<div
					class="slide lg:tooltip"
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					data-tip={technology.tooltip}
				>
					<img src={technology.src} alt={technology.alt} width="55" height="55" style="width: 100%;"/>
					<p class="block lg:hidden font-inter font-semibold text-[0.813rem] text-white mt-1">
						{technology.label}
					</p>
				</div>
			{/each}
		</div>
	</section>
</GeneralPanel>

<style lang="postcss">
	@media (min-width: 1280px) {
		:global(.slide) {
			animation-play-state: var(--is_animation_running) !important;
		}
	}
	

	:root {
		--no-of-slides: 7;
		--slides-in-view: 6;
		--slide-width: 6.875rem;
		--iteration-time: 18s;
		--total-width: 10rem !important;
		--mask-height: 4rem;
		--mask-image-content: linear-gradient(
			to right,
			transparent,
			white var(--mask-height),
			white calc(100% - var(--mask-height)),
			transparent
		);
		--mask-size-content: 100% 100%;
		--mask-image-scrollbar: linear-gradient(white, white);
		--mask-size-scrollbar: 0 100%;
	}
	.tooltip::before {
		@apply bg-white text-bgBlue font-bold text-sm py-2 px-4 font-inter;
	}
	.tooltip::after {
		@apply border-t-white;
	}
	.carousel {
		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
			webkit-transform: translateX(0);
		}
		100% {
			transform: translateX(calc(var(--slide-width) * var(--no-of-slides) * -1));
			webkit-transform: translateX(calc(var(--slide-width) * var(--no-of-slides) * -1));
		}
	}

	.carousel {
		height: 10rem;
		@apply mt-14 !important;
	}

	.slide-wrapper {
		display: flex;
		align-items: center;

		width: calc(var(--slides-in-view) * 10rem);
		overflow: hidden;
		margin: 0 auto;
		mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
		mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
		mask-repeat: no-repeat, no-repeat;
	}

	@media (min-width: 1280px) {
		.slide:hover > img {
			opacity: 1;
		}
	}

	.slide {
		-webkit-animation: scroll var(--iteration-time) linear infinite;
		animation: scroll var(--iteration-time) linear infinite;
		/*animation: 3s linear 1s infinite alternate slidein;*/
		-webkit-transform: transform;
		display: flex;
		flex-direction: column;

		flex: 0 0 auto;
		width: var(--slide-width);
		box-sizing: border-box;
	}

	@media screen and (min-width: 1280px) {
		.slide-wrapper {
			width: calc(var(--slides-in-view) * 12.5rem);
		}
	}

	@media screen and (min-width: 1536px) {
		.slide-wrapper {
			width: calc(var(--slides-in-view) * 15.5rem);
		}
	}

	@media screen and (max-width: 1024px) {
		.slide-wrapper {
			width: calc(var(--slides-in-view) * 7.3rem);
		}
	}

	@media screen and (max-width: 765px) {
		.slide-wrapper {
			width: calc(var(--slides-in-view) * 6rem);
		}
	}

	@media screen and (max-width: 600px) {
		.slide-wrapper {
			width: calc(var(--slides-in-view) * 5rem);
		}
	}

	.slide img {
		height: 4rem;
		opacity: 0.6;
	}

	@media screen and (max-width: 400px) {
		.slide img {
			height: 3rem;
		}

		.carousel {
			height: 7rem;
		}
	}

	.slide {
		position: relative;
	}
	
</style>
