<script>
    import { _, locale } from 'svelte-i18n';

	import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import DiscussProjectModal from '../HeroSection/DiscussProjectModal.svelte';

    import SidebySiteBtn from '../../common/SidebySiteBtn.svelte';
    import AllModal from '../../common/AllModals.svelte';

    export let generalPanelClass = "";

    /*
ml-[70px]
    */
	
</script>

<AllModal/>

<GeneralPanel 
headerOne={$_('sections.areYouReady.headerOne')}
 headerSecond="{$_('sections.areYouReady.headerSecond')}" 
 classNames="lg:mt-[170px] mt-[80px] pl-[30px] pr-[30px] z-[3] {generalPanelClass}">



   <SidebySiteBtn />

    <p class="text-white lg:mt-[24px] mt-[13px] mb-[100px]">
        <span class="hidden sm:block">{@html $_('sections.areYouReady.receive')}</span>
        <span class="block sm:hidden">{@html $_('sections.areYouReady.receiveMobile')}</span>
    </p>

</GeneralPanel>

