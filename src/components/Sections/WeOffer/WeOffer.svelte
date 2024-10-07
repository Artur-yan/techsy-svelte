<script>
	import { _, locale } from 'svelte-i18n';
	import TechnologyCard from '../FollowingSection/Card.svelte';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

	import AlwaysOnSameHeight from '../../common/RectangularCards/AlwaysOnSameHeight.svelte';

	import SPA from '$lib/assets/img/SPA.svg';
	import Wordpress from '$lib/assets/img/Wordpress.svg';
	import CustomWebsite from '$lib/assets/img/CustomWebsite.svg';
	import PWA from '$lib/assets/img/PWA.svg';

	
	const svgs = [
		SPA,
		PWA,
		Wordpress,
		CustomWebsite
	];

</script>

<GeneralPanel 
	headerOne={$_('sections.WeOffer.headerOne')} 
	headerSecond={$_('sections.WeOffer.headerSecond')}
	description={$_('sections.WeOffer.description')}
	classNames="lg:mt-[170px] mt-[94px] pb-0"
    classDescription="xl:w-[844px] m-auto">


	<AlwaysOnSameHeight svgs={svgs}  location={"sections.WeOffer"} lenght={4}/>
</GeneralPanel>