<script>
	import Steps from './Steps.svelte';
	import Button from '../common/Button.svelte';
	import { _ } from 'svelte-i18n';
	import { fourthQuestionAnswer } from '../../store/stores';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

	// import { onMount } from 'svelte';
	// import { browser } from '$app/enviroment';
	// import './jadi.scss';
	// import './';

	export let onNextStep;
	export let onPreviousStep;
	const handleMonthTooltip = (numberOfMonths) => {
		let monthText;
		switch (numberOfMonths) {
			case '1':
				monthText = $_('less_than_month');
				break;
			case '24':
				monthText = $_('24_months');

				break;
			default:
				monthText = `${numberOfMonths} ${$_('months')}`;
		}
		return monthText;
	};
	import { onMount } from 'svelte';
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div
	class="ranger-tab mb-11"
	style="--slider-value: {$fourthQuestionAnswer === '1' ? '1.5' : $fourthQuestionAnswer}"
>
	<Steps currentStep={4} />

	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-12 mb-12">
		{$_('fourth_question')}
	</h5>

	<div class="mb-28 lg:mb-20 range-milestoens-wrapper ml-[30%] sm:ml-[40%] xl:ml-0 setMarginRange" >
		<div class="relative mx-5 range-wrapper">
			<div
				class="range-tooltip tooltip tooltip-open tooltip-right lg:tooltip-top"
				data-tip={handleMonthTooltip($fourthQuestionAnswer)}
			/>

			<div class="relative z-50">
				<input
					type="range"
					min="1"
					max="24"
					value={$fourthQuestionAnswer}
					class="my-range bg-bgGrey h-[0.3rem] z-10"
					step="1"
					on:input={(e) => fourthQuestionAnswer.set(e.target.value)}
				/>
			</div>
			<div
				class="slider-milestone-wrapper w-full 
				flex justify-between text-xs absolute 
				bottom-[1px] right-0 left-0 pointer-events-none z-0"
			>
				<div class="slider-milestone" />
				<div class="pr-4">
					<div class="slider-milestone" />
				</div>
				<div class="pr-4">
					<div class="slider-milestone" />
				</div>
				<div class="pr-6">
					<div class="slider-milestone" />
				</div>
				<div class="slider-milestone" />
			</div>
		</div>
		<div
			class="milestones-wrapper w-full flex flex-col xl:flex-row lg:flex-col
			justify-between text-xs px-2 text-center mt-2.5 h-full xl:h-fit"
		>
			<span class="text-Grey">
				1 <br class="hidden md:block" />
				{$_('month')}
			</span>
			<div class="lg:pr-6">
				<span class="text-Grey">
					6 <br class="hidden md:block" />
					{$_('months')}
				</span>
			</div>
			<div class="pr-7">
				<span class="text-Grey">
					1 <br class="hidden md:block" />
					{$_('year')}
				</span>
			</div>
			<div class="pr-9">
				<span class="text-Grey">
					1.5 <br class="hidden md:block" />
					{$_('years')}
				</span>
			</div>
			<span class="text-Grey">
				2+ <br class="hidden md:block" />
				{$_('years')}
			</span>
		</div>
	</div>
	<div class="grid grid-flow-col justify-stretch gap-[1.125rem] lg:gap-10">
		<Button
			label={$_('previous')}
			type={"btn-contact-re"}
			onClick={() => onPreviousStep()}
			className="flex-1"
			style=1
		/>
		<Button
			label={$_('next')}
			type={"btn-contact"}
			onClick={() => onNextStep()}
			className="flex-1"
			iconRight={faArrowRight}
		/>
	</div>
</div>

<style lang="postcss">
	:global(.range-tooltip) {
		margin-left: calc((var(--slider-value) - 1) * (100% / 23));
	}

	@media (max-width: 430px) {
		.setMarginRange{
			margin-left:18%;
		}
	}

	.my-range {
		width: 100%;
		cursor: pointer;
		-moz-appearance: none;
		appearance: none;
		-webkit-appearance: none;
		border-radius: var(--rounded-box, 1rem);
	}

	@media (max-width: 1280px) {
		.my-range {
			transform: rotate(0deg);

			touch-action: none;
			@apply bg-transparent;
		}
		.range-wrapper {
			transform: translateX(20%) translateY(115%) rotate(90deg);
			-webkit-overflow-scrolling: touch;
			transform-origin: top left;
			width: 400px;
		}
		.range-tooltip {
			transform: rotate(-90deg);
		}

		.range-milestoens-wrapper {
			height: 400px;
			margin-top: -40px;
		}
		.milestones-wrapper {
			align-items: start;
			padding-left: 100px;
		}
		.my-range::-webkit-slider-thumb {
			transform: rotate(90deg);
		}
		.my-range::-webkit-media-slider-thumb {
			transform: rotate(90deg);
		}
		.my-range::-webkit-slider-runnable-track {
			transform: rotate(90deg);
		}

		.my-range::-webkit-slider-container {
			transform: rotate(-90deg);
		}

		.my-range::-moz-range-track {
			transform: rotate(-90deg);
		}

		.slider-milestone-wrapper {
			@apply bg-bgGrey h-[0.3rem] overflow-visible items-center mb-[5px] z-0;
		}
	}
	.my-range::-webkit-slider-thumb {
		border: 7px solid white;
		border-radius: 23px;
		cursor: pointer;
		-moz-appearance: none;
		appearance: none;
		-webkit-appearance: none;
		box-shadow: 3px 3px 0px rgba(4, 32, 66, 0.1);
		@apply bg-bgRed h-9 w-9 z-10 relative;
	}

	.slider-milestone {
		@apply h-3.5 w-3.5 border-solid border-2 rounded-full bg-bgGrey border-white z-0;
	}

	.tooltip::before {
		border: 1px solid #edf1f5;
		box-shadow: 5px 5px 2px 2px rgba(195, 202, 209, 0.2);
		@apply px-5 pb-4 pt-3 bg-white font-inter font-semibold text-Red text-base;
	}

	.tooltip::after {
		visibility: hidden;
	}
</style>
