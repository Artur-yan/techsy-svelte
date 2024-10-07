<script>
	import { _ , locale } from 'svelte-i18n';
	//import { btnSizes, btnVariants } from '../../utils/constants';
	import Button from '../../common/Button.svelte';
	import NdaCheckbox from '../../common/NdaCheckbox.svelte';
	import ThankYou from '../../common/ThankYou.svelte';
	import Modal from '../../common/Modal.svelte';
	import { createEventDispatcher } from 'svelte';
	import {
		name,
		email,
		phone,
		projectDescription,
		ndaProtection,
		wouldYouLike
	} from '../../../store/stores';

	import RadioButton from '../../common/RadioButton.svelte';
	import Input from '../../common/Input.svelte';

	import Fa from 'svelte-fa'
	import { faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons'

	export let openFormModal = false
	let openThankYouModal = false;
	let disablesumbitBtn = false;
	
    const dispatch = createEventDispatcher();
	
	const handleSubmitForm = (e) => {

		/*
		console.log("successful")
		disablesumbitBtn = true;
		/*
		dispatch('close');
		openThankYouModal = true;
		disablesumbitBtn = false;
		name.set("");
		email.set("");
		phone.set("");
		projectDescription.set("");
		ndaProtection.set("");
		wouldYouLike.set("");
		*/
		
		
		if ($name && $email) {
			disablesumbitBtn = true;
			fetch('https://formsubmit.co/ajax/business@techsy.io', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: $name,
					email: $email,
					phone: $phone,
					'Project description': $projectDescription,
					'NDA Protection': $ndaProtection,
					'call-us': $wouldYouLike
				})
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if(data.success == "true"){
						console.log("successful")
						dispatch('close');
						openThankYouModal = true;
						disablesumbitBtn = false;
						name.set("");
						email.set("");
						phone.set("");
						projectDescription.set("");
						ndaProtection.set("");
						wouldYouLike.set("");
					}
				})		
				.catch((error) => console.error(error));
		}
		
		
	};
	
	let copyTooltipShow = '';
	function copyToClipboard(textToCopy, showTooltip) {
		navigator.clipboard.writeText(textToCopy);
		copyTooltipShow = showTooltip;
		setTimeout(() => {
			copyTooltipShow = '';
		}, 1500);
	} 
	
</script>


<div>
<Modal open={openFormModal} on:close={() => dispatch('close')}>


	<div class="">
		<div>
			<span class="figure_your_needs 
			font-poppins font-bold 
			text-3xl sm:text-2xl
			mt-5
			text-bgDarkBlue">
			{$_('figure_your_needs')}
			</span>
		</div>
		<div class="flex justify-self-start flex-row mt-7 emailPhone">
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="relative cursor-pointer tooltip tooltip-open"
					data-tip={$_('phone_copied')}
					on:click={() => copyToClipboard('+372 5838 5679', 'phone')}
					style="--show-tooltip: {copyTooltipShow === 'phone' ? 'block' : 'none'}"
				>
					<div class="border-div delay-200 transition-all" />
					<div class="arrow-div delay-200 transition-all" />

					<!--
					<i class="contact-icon fa-solid fa-mobile-screen-button text-Red" />
					<TODO do not use a tag !!
					<a class="text-zinc-800 
					lg:text-base text-sm
					font-normal 
					font-['Inter']">+372 5838 5679</a>-->
					<div class=" text-Red mr-1 flex flex-row">
						<div class="text-Red mr-1">
							<Fa icon={faMobileScreenButton} size="lg"/>
						</div>
						<div>
							<a class="text-zinc-800 
								lg:text-base text-sm
								font-normal 
								font-['Inter']">+372 5838 5679</a>
						</div>
					</div>

				</div>
			</div>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="relative cursor-pointer tooltip tooltip-open emailTip ml-5"
					data-tip={$_('email_copied')}
					on:click={() => copyToClipboard('business@techsy.io', 'email')}
					style="--show-tooltip: {copyTooltipShow === 'email' ? 'block' : 'none'}"
				>
					<div class="border-div delay-200 transition-all" />
					<div class="arrow-div delay-200 transition-all" />

					<div class=" text-Red mr-1 flex flex-row">
						<div class="text-Red mr-1">
							<Fa icon={faEnvelope} size="lg"/>
						</div>
						<div>
							<a class="text-zinc-800
								lg:text-base text-sm
								font-normal 
								font-['Inter']">business@techsy.io</a>
						</div>
					</div>

					<!--
					<i class="contact-icon fa-solid fa-envelope text-Red mr-1" />
					<!--TODO do not use a tag !!
					<a class="text-zinc-800
					lg:text-base text-sm
					font-normal 
					font-['Inter']">business@techsy.io</a>-->
				</div>
			</div>
			
			
		</div>
	
		<form
			id="regForm"
			method="POST"
			target="hiddenFrame"
			class="mt-8"
		>
				
			<div class="index_tab">
				
				<div class="flex flex-col gap-2 sm:gap-4">
					
					
					<div class="grid grid-flow-row md:grid-flow-col justify-stretch">
						<div class="md:mr-10">
							<Input
								label={$_('name')}
								placeholder={$_('name_placeholder')}
								required
								type="text"
								value={$name}
								onChange={(value) => name.set(value)}
								labelClass="text-sm sm:text-base"
								inputClass="text-sm sm:text-base"
							/>
						</div>
						<div>
							<Input
								label={$_('phone')}
								placeholder={$_('phone_placeholder')}
								type="text"
								value={$phone}
								onChange={(value) => phone.set(value)}
								labelClass="text-sm sm:text-base"
								inputClass="text-sm sm:text-base"
							/>
						</div>
					</div>
					
					<Input
						label={$_('email')}
						placeholder={$_('email_placeholder')}
						required
						type="email"
						value={$email}
						onChange={(value) => email.set(value)}
						labelClass="text-sm sm:text-base"
						inputClass="text-sm sm:text-base"
					/>
					<Input
						label={$_('project_description')}
						placeholder={$_('description_placeholder')}
						type="textarea"
						value={$projectDescription}
						onChange={(value) => projectDescription.set(value)}
						labelClass="text-sm sm:text-base"
						inputClass="text-sm sm:text-base"
					/>
				</div>
				
				<div class="flex flex-row mt-[35px]">
					<RadioButton
						type="radio"
						name={$_("common.would_call.desktop")}
						value={$wouldYouLike}
						onChange={(value) => {wouldYouLike.set(value)}}
						className="text-zinc-800
						text-base
						font-normal
						font-['Inter']"
					/>
				</div>
				<div class="flex flex-row mt-4">
					<NdaCheckbox labelClass="text-zinc-800
					text-base
					font-normal
					font-['Inter']" iconClass="mt-[6px]" />
				</div>
				<div class="flex flex-col-reverse flex-row justify-left">
					<Button
						label={$_('submit')}
						type={"btn-contact"}
						disable={disablesumbitBtn}
						className="md:w-[300px] mt-[30px]"
						onClick={(event) => handleSubmitForm(event)}
					/>
				</div>
			</div>
				
		</form>
	</div>
</Modal>



<Modal open={openThankYouModal} type=1 on:close={()=>{openThankYouModal = false;}}>
	<ThankYou />
</Modal>
</div>



<style lang="postcss">

	


	@media (max-width: 350px) {

		
		.emailTip{
			margin-top: 10px;
			margin-left: 0 !important;
		}
		.emailPhone {
			/*font-size: 12px !important;*/

			@apply flex-col
		}
	}

	@media (max-width: 500px) {
		.emailTip:before {
			left:20px !important;
		}
	}


	.figure_your_needs{
		font-size: 34px;
		font-weight: 600;
		font-family: Poppins;
	}
 
	.font-inter {
		//font-size: 16px;
	}
	.contact-icon {
		width: 16px;
		height: 16px;
	}
	.tooltip:before {
		transform: translateX(-50);
		box-shadow: 3px 6px 2px 2px rgba(195, 202, 209, 0.2);
		border: 0.5px solid #c3cad1;
		top: 40px;
    	height: fit-content;
		left:150px;
		display: var(--show-tooltip);
		@apply px-2 pb-2 pt-2 bg-white font-inter text-Black font-normal text-xs;
	}

	@media (max-width: 640px) {
		.tooltip:before {
			@apply px-3 py-2;
		}
	}
	.tooltip::after {
		display: none;
	}

	.border-div {
		position: absolute;
		top: 26px;
		left: 3.9em;
		/*
		border: 0.938rem solid;
		border-color: transparent transparent transparent transparent;
		transition-delay: 0.1s;
		/*transform: rotate(90deg);*/
		/*background-color: red;
		display: var(--show-tooltip);*/
		width: 0; 
		height: 0; 
		border-left: 14px solid transparent;
		border-right: 14px solid transparent;
		border-bottom: 14px solid #c3cad1;
		display: var(--show-tooltip);
	}
	.arrow-div {
		/*
		position: absolute;
		width: 0;
		height: 0;
		top: 23px;
		left: 3.9em;
		border: 0.938rem solid transparent;
		border-color: white transparent transparent transparent;
		transition-delay: 0.1s;
		z-index: 9999;
		display: var(--show-tooltip);
		*/
		
	}

</style>
