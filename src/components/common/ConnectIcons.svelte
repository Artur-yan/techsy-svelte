<script>
	export let link;
	export let icon;
	export let alt;
	export let altIcon;
</script>

<a
	href={link}
	target="”_blank”"
	aria-label="telegram logo"
	class="relative w-[30px] h-[30px] group"
>
	<img
		src={altIcon}
		width="30"
		height="30"
		class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
		{alt}
	/>
	<img
		src={icon}
		width="30"
		height="30"
		class="absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all duration-500"
		{alt}
	/>
</a>
