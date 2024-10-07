<script>
	import Steps from './Steps.svelte';
	import Button from '../common/Button.svelte';
	import { _ } from 'svelte-i18n';
	import { secondQuestionAnswer } from '../../store/stores';
	import RadioButton from '../common/RadioButton.svelte';
	import { onMount } from 'svelte';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


	export let onNextStep;
	export let onPreviousStep;
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div>
	<Steps currentStep={2} />

	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-12 mb-12">
		{$_('second_question')}
	</h5>
	<div class="flex flex-col gap-8 mb-11">
		<RadioButton
			name={$_('second_question_option_1')}
			value={$secondQuestionAnswer}
			onChange={(value) => secondQuestionAnswer.set(value)}
		/>
		<RadioButton
			name={$_('second_question_option_2')}
			value={$secondQuestionAnswer}
			onChange={(value) => secondQuestionAnswer.set(value)}
		/>
		<RadioButton
			name={$_('second_question_option_3')}
			value={$secondQuestionAnswer}
			onChange={(value) => secondQuestionAnswer.set(value)}
		/>
		<RadioButton
			name={$_('second_question_option_4')}
			value={$secondQuestionAnswer}
			onChange={(value) => secondQuestionAnswer.set(value)}
		/>
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
			onClick={() => {
				$secondQuestionAnswer && onNextStep();
			}}
			className="flex-1"
			iconRight={faArrowRight}
		/>
	</div>
</div>
