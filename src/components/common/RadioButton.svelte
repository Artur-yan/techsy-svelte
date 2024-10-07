<script>
	export let name;
	export let value;
	export let className;
	export let onChange;

	/*
	const handleRadioClick = () => {
		/*
		if (value === name) {
			onChange('');
		}
		*/
		/*
		console.log("value",value)
		console.log("name",name)
	};
	*/
	const handleRadioChange = (val) => {
		if (value[0] != name) {
			onChange('');
		}
		else{
			onChange(val);
		}
	}
	/*
	<input
		class="radio-button"
		id={name}
		type="radio"
		{name}
		value={name}
		bind:group={value}
		on:click={() => handleRadioClick()}
		on:change={(e) => onChange(e.target.value)}
	/>
	*/
</script>

<div class="input-group">
	<input
		class="radio-button"
		type="checkbox"
		{name}
		value={name}
		bind:group={value}
		on:change={(e) => handleRadioChange(e.target.value)}
	/>
	<label
		for={name}
		class={`text-base font-poppins font-normal text-Black my-auto ${className || ''}`}
		>{@html name}</label
	>
</div>

<style lang="css">

	
	.radio-button {
		margin-right: 1rem;
		-webkit-appearance : none;
		appearance         : none;
		width              : 25px;
		height             : 25px;
		min-width          : 25px;
		vertical-align     : top;
		/*outline            : 2px solid #ddd;*/
		border             : 5px solid #ffffff;
		border-radius      :  50%;
		background         : #fff no-repeat center center;
		position: relative;
	}
	
	
	.radio-button::before{
		content: "";
  		position: absolute;
		top: -6px;
		right: -6px; 
		bottom: -6px;
		left: -6px;
		border: 2px solid #ddd;
		border-radius: 50%;
	}
	
	/*
	.radio-button:checked::before{
		border: 2px solid red;
	}
	*/
	

	.radio-button:checked {
		background-color: red;
		outline-color: red;
	}
</style>
