<script>
	import { _, locale } from 'svelte-i18n';
	import TechnologyCard from '../FollowingSection/Card.svelte';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

	import AlwaysOnSameHeight from '../../common/RectangularCards/AlwaysOnSameHeight.svelte';

	import Logo1 from '$lib/assets/img/NMA.svg';
	import Logo2 from '$lib/assets/img/HMA.svg';
	import Logo3 from '$lib/assets/img/IOT.svg';
	import Logo4 from '$lib/assets/img/PWA.svg';

	
	const svgs = [
		Logo1,
		Logo2,
		Logo3,
		Logo4
	];

</script>

<GeneralPanel 
	headerOne={$_('sections.whatSpecializeSection.headerOne')} 
	headerSecond={$_('sections.whatSpecializeSection.headerSecond')}
	description={$_('landing_page.webdev.description2')}
	classNames="lg:mt-[170px] mt-[94px]">


	<AlwaysOnSameHeight svgs={svgs}  location={"sections.whatSpecializeSection"} lenght={4}/>
</GeneralPanel>