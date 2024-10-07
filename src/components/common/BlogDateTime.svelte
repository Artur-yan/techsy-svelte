<script>
	import { _ } from 'svelte-i18n';
	import { monthNames } from '../../utils/constants';
	import ClockForBlog from '../../svgs/clock.svelte';
	import Calendar from '../../svgs/calendar.svelte';

	export let date;
	export let timeToRead;
	export let className = "";
	export let color = "white";
	let formatDate = new Date(date);
</script>

<div
	class={`flex justify-between font-inter font-medium text-sm ${className}`}
>
	<div class="flex items-center gap-[5px]">
		<ClockForBlog color={color}/>
		<p>{timeToRead} {$_('min_read')}</p>
	</div>
	<div class="flex items-center gap-[5px]">
		<Calendar color={color}/>
		<p>
			{`${String(formatDate.getDate()).padStart(2, '0')} ${
				monthNames[formatDate.getMonth()]
			}, ${formatDate.getFullYear()}`}
		</p>
	</div>
</div>
