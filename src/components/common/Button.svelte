<script>
	export let label;
	export let iconLeft;
	export let iconRight;
	export let onClick;
	export let disable = false;
	export let type = "";
	export let style = "";
	export let className = "";
	export let ariaLabel = "";
	export let classInside = "";
	import Fa from 'svelte-fa'

</script>

<button
	aria-label={ariaLabel} 
	style={style}
	disabled={disable}
	class={`btn
	font-inter 
	font-semibold 
	normal-case 
	border-none 
	${type} ${className}`}
	on:click={onClick}
>
	<div class="flex flex-row {classInside}">
		{#if iconLeft}
		
			<div class="mr-2">
				<Fa icon={iconLeft} size="md"/>
			</div>
			<!--<i class={`${iconLeft} mr-2`} />-->
		{/if}
			<div>
				{label}
			</div>
		{#if iconRight}
			<div class="ml-2">
				<Fa icon={iconRight} size="md"/>
			</div>
			<!--
			<div class="mr-2">
				<Fa icon={iconRight} size="md"/>
			</div>
			<!--<i class={`${iconRight} ml-2`} />-->
		{/if}
	</div>
</button>

<style lang="postcss">
	.btn[disabled] {
		background-color: rgba(230, 235, 239, 1) !important;
	}
	.btn {
		min-height: inherit;
	}
	@media (max-width: 382px){
		.extraSmall{
			padding-left: 15px !important;
			padding-right: 46px !important;
		}
	}

</style>
