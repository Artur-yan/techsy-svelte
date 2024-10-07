<script>
	export let label;
	export let type;
	export let placeholder;
	export let value;
	export let required;
	export let className;
	export let onChange;
	export let disabled;
	export let labelClass;
	export let inputClass;

	function getData(){
		onChange(value)
	}
	$: value && getData();
</script>

<div class={`form-control ${className} w-full`}>
	{#if label}
		<label class={`${labelClass || ''} label font-inter text-base inputLabel-general font-normal text-Black`}>
			<span>{label}</span>
		</label>
	{/if}

	{#if type === 'textarea'}
		<div class="textarea textarea-bordered 
		border-1 inputTexrarea-general focus:outline-none ring-offset-2 focus:ring-1 ring-[#BDBDBD]
		bg-white w-full" 
		contenteditable="true"
		data-ph="{placeholder}"
		bind:textContent={value}
		></div>
		<!--
		<textarea
			class="textarea textarea-bordered border-1 inputTexrarea-general bg-white w-full"
			{placeholder}
			value={value || ''}
			{required}
			on:change={(event) => onChange(event.target.value)}
		/>
		-->
	{:else}
		<input
			{type}
			{placeholder}
			value={value || ''}
			{required}
			{disabled}
			class={`input input-bordered border-1 input-general focus:outline-none ring-offset-2 focus:ring-1 ring-[#BDBDBD] bg-white w-full ${inputClass}`}
			on:change={(event) => onChange(event.target.value)}
		/>
	{/if}
</div>

<style lang="postcss">
	.inputLabel-general {
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
	}
	.input-general {
		border-color: #BDBDBD;
		color: black;
		border-radius: 15px;
		min-height: 60px;
		width:100%;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		position: relative !important;
	}


			
	.inputTexrarea-general{
		border-color: #BDBDBD;
		color: black;
		border-radius: 15px;
		min-height: 130px;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
	}
	.inputTexrarea-general::placeholder {
		font-size: 18px;
		color:rgba(51, 51, 51, 0.45);
		-webkit-font-smoothing: antialiased;
	}
	.input-general::placeholder {
		font-size: 18px;
		color:rgba(51, 51, 51, 0.45);
		-webkit-font-smoothing: antialiased;
	}

	.textarea:empty:before {
		content:attr(data-ph);
		color:rgba(51, 51, 51, 0.45);
	}
	

</style>
