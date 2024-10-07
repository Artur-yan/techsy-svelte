<script>
	// import { PUBLIC_RECAPTCHA_KEY } from '$env/static/public';
	import ContactInformationForm from '../common/ContactInformationForm.svelte';
	import Steps from './Steps.svelte';
	import { _ } from 'svelte-i18n';
	import NdaCheckbox from '../common/NdaCheckbox.svelte';
	import Button from '../common/Button.svelte';
	//import { btnSizes, btnVariants } from '../../utils/OLD.constants';
	import {
		name,
		email,
		phone,
		projectDescription,
		ndaProtection,
		fourthQuestionAnswer,
		secondQuestionAnswer,
		thirdQuestionAnswer,
		firstQuestionAnswer,

	} from '../../store/stores';
	export let onNextStep;
	export let onPreviousStep;
	let disablesumbitBtn = false;

	import { onMount } from 'svelte';
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

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
			disablesumbitBtn = true;
			const answerObj = {
				name: $name,
				email: $email,
				...($phone ? { phone: $phone } : {}),
				...($projectDescription ? { 'Project description': $projectDescription } : {}),
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
					? { 'What is the expected duration of your project?': `${$fourthQuestionAnswer} months` }
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
				.then((data) => {
					disablesumbitBtn = false;
					name.set("");
					email.set("");
					phone.set("");
					projectDescription.set("");
					ndaProtection.set("");
					fourthQuestionAnswer.set("4");
					thirdQuestionAnswer.set([]);
					secondQuestionAnswer.set("");
					firstQuestionAnswer.set("");
					onNextStep()
				})
				.catch((error) => console.error(error));
		}
	};
</script>

<div id="pricy_form" class="mb-11">
	<Steps currentStep={5} />
	<h5 class="font-semibold text-2xl text-bgDarkBlue font-poppins mt-8 mb-6">
		{$_('fifth_question')}
	</h5>

	<p class="text-bgDarkBlue font-inter font-normal text-[0.813rem] mb-2 hidden lg:block">
		{@html $_('fifth_question_text')}
	</p>

	<p class="text-bgDarkBlue font-inter font-normal text-[0.813rem] mb-4 lg:hidden">
		{@html $_('fifth_question_text_mobile')}
	</p>

	<ContactInformationForm />

	<div class="mb-1 mt-[20px]">
		<NdaCheckbox isCenter />
	</div>
	<div class="grid grid-flow-col justify-stretch gap-[1.125rem] lg:gap-10 mt-[42px] lg:mt[60px]">
		<Button
			label={$_('previous')}
			type={"btn-contact-re"}
			onClick={() => onPreviousStep()}
			className="flex-1"
			style=1
		/>
		<Button
			label={$_('get_quote')}
			type={"btn-contact"}
			onClick={() => onSubmit()}
			className="flex-1"
			disable={disablesumbitBtn}

		/>
	</div>
</div>
