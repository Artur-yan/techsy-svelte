<script>
	import Button from '../common/Button.svelte';
	import { _ } from 'svelte-i18n';
	import Steps from './Steps.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import RadioButton from '../common/RadioButton.svelte';
	import { firstQuestionAnswer } from '../../store/stores';
	import { onMount } from 'svelte';
	import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'


	export let onNextStep;
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div>
	<h4
		class="font-semibold text-[1.75rem] text-bgDarkBlue font-poppins mb-3 text-center lg:text-left"
	>
		{$_('contactSteps.firstStep.figure_your_needs')}
	</h4>

	<h6
		class="font-light text-bgDarkBlue text-2xlg font-poppins mb-12 hidden leading-[1.75rem] lg:block"
	>
		{@html $_('contactSteps.firstStep.first_step_text')}
	</h6>

	<h6
		class="font-light text-bgDarkBlue text-2xlg font-poppins mb-12 leading-[1.75rem] lg:hidden text-center"
	>
		{@html $_('contactSteps.firstStep.first_step_text_mobile')}
	</h6>

	<Steps currentStep={1} />

	<input type="hidden" name="_captcha" value="false" />

	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-12 mb-12">
		{$_('first_question')}
	</h5>
	<div class="flex flex-col gap-8 mb-11">
		<RadioButton
			name={$_('first_question_option_1')}
			value={$firstQuestionAnswer}
			onChange={(value) => firstQuestionAnswer.set(value)}
		/>
		<RadioButton
			name={$_('first_question_option_2')}
			value={$firstQuestionAnswer}
			onChange={(value) => firstQuestionAnswer.set(value)}
		/>
		<RadioButton
			name={$_('first_question_option_3')}
			value={$firstQuestionAnswer}
			onChange={(value) => firstQuestionAnswer.set(value)}
		/>
	</div>
	<div class="grid grid-flow-col justify-stretch gap-[1.125rem] lg:gap-10">
		<Button
			label={$_('cancel')}
			type={"btn-contact-re"}
			onClick={() => goto(`/${$page.params.locale || ""}`)}
			className="flex-1"
			style=1
		/>
		<Button
			label={$_('next')}
			type={"btn-contact"}
			onClick={() => {
				$firstQuestionAnswer && onNextStep();
			}}
			iconRight={faArrowRight}
			className="flex-1 h-[3.75rem] leading-[1.625rem] text-xl"
		/>
	</div>
</div>
<style>
	
</style>
