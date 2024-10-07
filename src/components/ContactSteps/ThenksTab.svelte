<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { _ } from 'svelte-i18n';

	import Button from '../common/Button.svelte';

	import ThankYou from '../common/ThankYou.svelte';


	const image = new Image();
	image.src = "../img/thanks.svg";
	image.onload = () => {};

	import { onMount } from 'svelte';
	onMount(async () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

</script>

<ThankYou />
<div class="flex justify-center">
	<Button
		type={"btn-contact"}
		label={$_('back')}
		onClick={() => goto(`/${$page.params.locale || ""}`)}
		className="w-1/2"
	/>
</div>
<!--
<div class="thanks-tab flex flex-col justify-center">
	<img src="../img/thanks.svg" alt="thanks_logo" />

	<h4 class="font-semibold text-[1.5rem] text-bgDarkBlue font-poppins">
		{@html $_('thanks_intrest')}
	</h4>

	<p class="font-inter font-normal text-sm text-bgDarkBlue">
		{$_('expert_contact')}
	</p>

	<p class="font-inter font-normal text-sm text-bgDarkBlue">{$_('required_nda')}</p>
	<p class="font-inter font-normal text-sm text-bgDarkBlue">
		{$_('pre_sale_manager')}
	</p>
	<p class="font-inter font-normal text-sm text-bgDarkBlue mb-12">
		{$_('team_assembled')}
	</p>

	<div class="flex justify-center">
		<Button
			label={$_('back')}
			variant={btnVariants.primary}
			size={btnSizes.xl}
			onClick={() => goto(`/${$page.params.locale}`)}
			className="w-1/2"
		/>
	</div>
</div>
-->
<!--
<style class="postcss">
	.thanks-tab {
		text-align: center;
		color: #042042;
	}

	.thanks-tab img {
		margin-top: -2rem;
		margin-bottom: 2rem;
		height: auto;
		max-height: 8rem;
	}

	.thanks-tab p::before {
		content: url('../img/two-dots.svg');
		display: block;
		margin: 0.4rem auto;
		width: 3%;
	}
</style>
-->
