<script>
    import { _, locale } from 'svelte-i18n';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';

    $: currentLocale = $locale;

    
    import missionIMG from '$lib/assets/img/mission.webp';

</script>



<GeneralPanel 
    headerOne={$_('sections.missionSection.headerOne')}
    headerSecond="{$_('sections.missionSection.headerSecond')}" 
    classNames="lg:mt-[170px] mt-[80px] pl-[30px] pr-[30px] al">
    <img
        class="mt-5 mr-3 absolute left-[-30px] hidden xl:block"
        src="{missionIMG}"
        alt="missionIMG"
        width="274"
        height="512"
    />

    <div class="max-w-[810px] m-auto mt-[73px] text-center text-white 
    text-[19px] font-normal lg:font-light font-['Inter'] descre">
        {@html $_('sections.missionSection.description')}
    </div>

</GeneralPanel>
<style lang="postcss">
    @media (min-width: 1024px) {    

        .descre > :global(span) {
            font-weight: 400;
        }
    }
    @media (max-width: 1024px) {    

        .descre > :global(span) {
            font-weight: 500;
        }
    }
</style>
