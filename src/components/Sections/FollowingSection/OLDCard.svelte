<script>
	export let icon;
	export let iconAlt;
	export let title;
	export let text;
	export let lgOpenHeight;
	export let xlOpenHeight;
	export let mdOpenHeight;
	export let smOpenHeight;
	export let xsOpenHeight;
	let expanded = false;

	function toggleExpanded() {
		expanded = !expanded;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={`tech-card group flex-row group h-28 ${lgOpenHeight} ${xlOpenHeight} rounded-2xl bg-white z-10 p-6 pr-4 lg:pr-6 overflow-hidden  ${
		expanded ? 'tech-card-mobile' : ''
	}`}
	style="--md-height: {mdOpenHeight}rem; --sm-height: {smOpenHeight}rem; --xs-height: {xsOpenHeight}rem;"
	on:click={toggleExpanded}
>
	<div class="flex text-left items-center">
		<img src={icon} alt={iconAlt} class="h-16 w-16" />
		<h5 class="text-2xl card-title font-semibold text-bgDarkBlue font-poppins ml-6">{title}</h5>
	</div>
	<div
		class={`card-text lg:group-hover:text-bgDarkBlue font-inter font-normal text-lgbase text-transparent text-left mt-4 ${
			expanded ? 'card-text-mobile' : ''
		}`}
	>
		{@html text}
	</div>
</div>

<style lang="postcss">
	.tech-card {
		transition: all 250ms cubic-bezier(0.03, -0.17, 0.07, 1.77);
		transition-delay: 60ms;
		transition-duration: 400ms;
	}
	@media (min-width: 1024px) {
		.tech-card:hover {
			-webkit-box-shadow: 18px 17px 6px rgba(38, 34, 34, 0.49);
			box-shadow: 15px 15px 3px -5px rgba(53, 48, 48, 0.49);
		}
	}

	.card-text {
		transition-duration: 300ms, 200ms;
	}
	@media (max-width: 1024px) {
		.tech-card-mobile {
			/* height: var(--md-height); */
			-webkit-box-shadow: 18px 17px 6px rgba(38, 34, 34, 0.49);
			box-shadow: 15px 15px 3px -5px rgba(53, 48, 48, 0.49);
		}
		.card-text-mobile {
			@apply text-bgDarkBlue;
		}
	}

	@media only screen and (min-device-width: 440px) and (max-device-width: 1024px) {
		.tech-card-mobile {
			height: var(--md-height);
		}
	}

	@media (max-width: 440px) {
		.card-title {
			font-size: 20px;
		}
	}

	@media only screen and (min-device-width: 391px) and (max-device-width: 440px) {
		.tech-card-mobile {
			height: calc(var(--sm-height));
		}
	}
	@media (max-width: 391px) {
		.tech-card-mobile {
			height: calc(var(--xs-height));
		}
	}
</style>
