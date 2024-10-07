<script>
	import CheckButton from '../common/CheckButton.svelte';
	import Steps from './Steps.svelte';
	import Button from '../common/Button.svelte';
	import { _ } from 'svelte-i18n';
	import { thirdQuestionAnswer } from '../../store/stores';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


	export let onNextStep;
	export let onPreviousStep;

	const handleCheckBoxClick = (addOrRemove, value) => {
		thirdQuestionAnswer.update((arr) => {
			let newArr;
			if (addOrRemove) {
				newArr = [...arr, value];
			} else {
				newArr = arr.filter((element) => element !== value);
			}
			return newArr;
		});
	};
	import { onMount } from 'svelte';
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div id="top-of-page"></div>

<div>
	<Steps currentStep={3} />

	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-12 mb-12">
		{$_('third_question')}
	</h5>
	<div class="flex flex-col gap-8 mb-11">
		<CheckButton
			name={$_('third_question_option_1')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_1'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_1'))}
		/>
		<CheckButton
			name={$_('third_question_option_2')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_2'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_2'))}
		/>
		<CheckButton
			name={$_('third_question_option_3')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_3'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_3'))}
		/>
		<CheckButton
			name={$_('third_question_option_4')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_4'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_4'))}
		/>
		<CheckButton
			name={$_('third_question_option_5')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_5'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_5'))}
		/>
		<CheckButton
			name={$_('third_question_option_6')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_6'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_6'))}
		/>
		<CheckButton
			name={$_('third_question_option_7')}
			value={!!$thirdQuestionAnswer.find((element) => element === $_('third_question_option_7'))}
			onChange={(value) => handleCheckBoxClick(value, $_('third_question_option_7'))}
			
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
				$thirdQuestionAnswer.length > 0 && onNextStep();
			}}
			className="flex-1"
			iconRight={faArrowRight}
		/>
	</div>
</div>
