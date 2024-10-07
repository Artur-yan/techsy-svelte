<script>
	export let name;
	export let value;
	export let className;
	export let onChange;

	// on:click={() => onChange(!value)}
</script>

<div class="input-group">
	<input
		class="checkbox-button"
		id={name}
		type="checkbox"
		{name}
		bind:checked={value}
		on:click={() => onChange(!value)}
	/>
	<label
		for={name}
		class={`text-base font-poppins font-normal text-Black my-auto ${className || ''}`}>{name}</label
	>
</div>

<style lang="css">
	.checkbox-button {
		/*
		width: auto;
		min-height: 20px;
		min-width: 20px;
		margin-right: 1rem;
		accent-color: #de3c4b;
		*/
	}
	.checkbox-button {
		margin-right: 1rem;
		-webkit-appearance : none;
		appearance         : none;
		width              : 25px;
		height             : 25px;
		min-width          : 25px;
		vertical-align     : top;
		/*outline            : 2px solid #ddd;*/
		border             : 5px solid #ffffff;
		border-radius      :  0;
		background         : #fff no-repeat center center;
		position: relative;
	}
	.checkbox-button::before{
		content: "";
  		position: absolute;
		top: -6px;
		right: -6px; 
		bottom: -6px;
		left: -6px;
		border: 2px solid #ddd;
		border-radius: 0;
	}

	.checkbox-button:checked {
		background-color: red;
		outline-color: red;
	}
</style>
