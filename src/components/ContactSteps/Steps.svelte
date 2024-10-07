<script>
	export let currentStep;
</script>

<div>
	<img
		src={`/img/level_${currentStep}.svg`}
		alt={`level_${currentStep}`}
		class="max-sm:hidden sm:visible w-full mr-23"
	/>
	<img
		src={`/img/level_${currentStep}_mobile.svg`}
		alt={`level_${currentStep}_mobile`}
		class="sm:hidden max-sm:visible w-full"
	/>
</div>
