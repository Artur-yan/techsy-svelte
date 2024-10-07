<script>
	import { scrollPosition } from '../../store/stores';
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa'
	import { faFacebook } from '@fortawesome/free-brands-svg-icons'
	import { faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

	let scrollPos;
	let url = ``;

	onMount(() => (url = window.location.href));
//
</script>

<svelte:window bind:scrollY={scrollPos} />

<div class={`fixed
	text-techsyBlue
	${scrollPos > 350 ? 'opacity-100' : 'opacity-0' } 
	transition-all duration-200`}
	>
	<p class="rotate-[-90deg] text-md font-semibold font-inter mb-4 pb-4">{$_('share')}</p>
	<a
		href={`https://www.facebook.com/dialog/feed?
		app_id=762516398615568
		&display=page
		&link=${url}
		&redirect_uri=${url}`}
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
	>
		<Fa icon={faFacebook} size="2x"
		class="
			hover:text-bgRed
			duration-300
			cursor-pointer
			mb-4
			" />
		<!--
		<i
			class="fa-brands fa-facebook text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
		/>
		-->
	</a>
	<a
		class="twitter-share-button"
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
		href={`https://twitter.com/intent/tweet?text=${url}`}
		>
		<Fa icon={faTwitter} size="2x"
		class="
			hover:text-bgRed
			duration-300
			cursor-pointer
			mb-4
			" />
		<!--
		<i
			class="fa-brands fa-twitter text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
		/>-->
	</a>
	<a
		class="twitter-share-button"
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
		href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
		>
			<!--<i
				class="fa-brands fa-linkedin text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
			/>-->
			<Fa icon={faLinkedin} 
			size="2x"
			class="
				hover:text-bgRed
				duration-300
				cursor-pointer
				mb-4
				" />
	</a>
</div>

<!--
<div
	class={`hidden lg:flex flex-col fixed left-0 top-20 z-20 text-bgDarkBlue pl-6 ${
		$scrollPosition > 470 ? 'opacity-100' : 'opacity-0'
	} transition-all duration-200`}
>
	<p class="rotate-[-90deg] text-md font-semibold font-inter mb-4 pb-4">{$_('share')}</p>
	<a
		href={`https://www.facebook.com/dialog/feed?
		app_id=762516398615568
		&display=page
		&link=${url}
		&redirect_uri=${url}`}
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
	>
		<i
			class="fa-brands fa-facebook text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
		/>
	</a>
	<a
		class="twitter-share-button"
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
		href={`https://twitter.com/intent/tweet?text=${url}`}
		><i
			class="fa-brands fa-twitter text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
		/></a
	>
	<a
		class="twitter-share-button"
		onclick="window.open(this.href, '_blank', 'width=500,height=500'); return false;"
		href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
		><i
			class="fa-brands fa-linkedin text-[26px] mb-4 cursor-pointer hover:text-bgRed duration-300"
		/></a
	>
	<!-- <i class="fa-brands fa-instagram text-[26px] cursor-pointer" /> 
</div>
-->
