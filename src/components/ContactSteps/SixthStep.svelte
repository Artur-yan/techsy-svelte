<script>
	// import { PUBLIC_RECAPTCHA_KEY } from '$env/static/public';
	import ContactInformationForm from '../common/ContactInformationForm.svelte';
	import Steps from './Steps.svelte';
	import { _ } from 'svelte-i18n';
	import NdaCheckbox from '../common/NdaCheckbox.svelte';
	import Button from '../common/Button.svelte';
	import { btnSizes, btnVariants } from '../../utils/constants';
	import {
		name,
		email,
		phone,
		projectDescription,
		ndaProtection,
		callYou,
		fifthQuestionAnswer,
		secondQuestionAnswer,
		thirdQuestionAnswer,
		firstQuestionAnswer,
		fourthQuestionAnswer,
		fourthQuestionOtherAnswer
	} from '../../store/stores';
	export let onNextStep;
	export let onPreviousStep;

	function onSubmit() {
		doRecaptcha();
	}

	function doRecaptcha() {
		grecaptcha.ready(function () {
			grecaptcha
				.execute('6Lcsrt4lAAAAAOUL1GSgOl4m0g1q4LM50aTzyNjs', { action: 'submit' })
				.then(function (t) {
					if (t) handleSubmitForm();
				});
		});
	}

	const handleSubmitForm = () => {
		if ($name && $email) {
			const answerObj = {
				name: $name,
				email: $email,
				...($phone ? { phone: $phone } : {}),
				...($projectDescription ? { 'Project description': $projectDescription } : {}),
				...($callYou ? { 'Would you like us to call you to discuss your project?': 'Yes' } : {}),
				...($ndaProtection ? { 'I want to protect my idea by signing an NDA': 'Yes' } : {}),
				...($firstQuestionAnswer ? { 'How tech savy are you?': $firstQuestionAnswer } : {}),
				...($secondQuestionAnswer
					? {
							'What is the current stage of your software development process?':
								$secondQuestionAnswer
					  }
					: {}),
				...($thirdQuestionAnswer.length > 0
					? {
							'What type of software solution would you like to develop with Techsy?':
								$thirdQuestionAnswer.join(', ')
					  }
					: {}),
				...($fourthQuestionAnswer
					? { 'Please specify your business industry:': $fourthQuestionAnswer }
					: {}),
				...($fourthQuestionOtherAnswer ? { 'Other industry:': $fourthQuestionOtherAnswer } : {}),
				...($fifthQuestionAnswer
					? { 'What is the expected duration of your project?': `${$fifthQuestionAnswer} months` }
					: {})
			};
			fetch('https://formsubmit.co/ajax/business@techsy.io', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(answerObj)
			})
				.then((response) => response.json())
				.then((data) => onNextStep())
				.catch((error) => console.error(error));
		}
	};
</script>

<div id="pricy_form" class="mb-11">
	<Steps currentStep={6} />
	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-12 mb-12">
		{$_('sixth_question')}
	</h5>

	<p class="text-bgDarkBlue font-inter font-normal text-[0.813rem] mb-7 hidden lg:block">
		{@html $_('sixth_question_text')}
	</p>

	<p class="text-bgDarkBlue font-inter font-normal text-[0.813rem] mb-7 lg:hidden">
		{@html $_('sixth_question_text_mobile')}
	</p>

	<ContactInformationForm />

	<div class="mb-11 mt-8">
		<NdaCheckbox isCenter />
	</div>
	<div class="flex flex-row gap-[1.125rem] lg:gap-10">
		<Button
			label={$_('previous')}
			size={btnSizes.xl}
			variant={btnVariants.secondary}
			secondary
			onClick={() => onPreviousStep()}
			className="flex-1"
		/>
		<Button
			label={$_('get_quote')}
			size={btnSizes.xl}
			variant={btnVariants.primary}
			primary
			onClick={() => onSubmit()}
			className="flex-1"
		/>
	</div>
</div>
