<script>
    import { _, locale } from 'svelte-i18n';
    import AllModal from '../../common/AllModals.svelte';

	import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import DiscussProjectModal from '../HeroSection/DiscussProjectModal.svelte';

    import SidebySiteBtn from '../../common/SidebySiteBtn.svelte';

    export let generalPanelClass = "";

    /*
ml-[70px]
    */
	
</script>


<AllModal/>

<GeneralPanel 
    headerOne="{$_('sections.haveAnswerSection.header1P1')}"
    headerSecond="{$_('sections.haveAnswerSection.header1P2')}" 
    classNames="lg:mt-[170px] mt-[80px] pl-[30px] pr-[30px] {generalPanelClass}"
    outerClass="block xl:hidden">

    <div class="max-w-[815px] ml-auto mr-auto text-center hidden xl:block">
        <span class="text-white text-[40px] font-bold font-['Poppins'] leading-[75px]">
            {@html $_('sections.haveAnswerSection.header1P1')}</span>
        <span class="text-red-500 text-[40px] font-bold font-['Poppins'] leading-[75px]">
            {@html $_('sections.haveAnswerSection.header1P2')}</span>
    </div>
    <div class="hidden xl:block max-w-[604px] ml-auto mr-auto mt-[9px] text-center text-white text-[19px] font-normal font-['Inter']">
        {@html $_('sections.haveAnswerSection.dec')}
    </div>

   <SidebySiteBtn />

    <p class="text-white lg:mt-[24px] mt-[13px] mb-[100px]">
        <span class="hidden sm:block">{@html $_('sections.areYouReady.receive')}</span>
        <span class="block sm:hidden">{@html $_('sections.areYouReady.receiveMobile')}</span>
    </p>

</GeneralPanel>

