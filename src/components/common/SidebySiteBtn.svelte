<script>
    import { _, locale } from 'svelte-i18n';
    import DiscussProjectModal from '../../components/Sections/HeroSection/DiscussProjectModal.svelte';
    import { discus_modal, calendly_modal } from '../../store/stores';
    import Button from './Button.svelte';
    import Modal from './Modal.svelte';
    import Clendly from './Clendly.svelte';
    import { get } from 'svelte/store';

    $: currentLocale = $locale;
    let isModalOpen  = false;
    let openFormModal = false;

        
    const closeFormModal = () => {
        isModalOpen  = false;
    }

</script>

<!--
<DiscussProjectModal openFormModal={isModalOpen } on:close={closeFormModal}/>
-->

{#if currentLocale == 'en-US'}
<div class="flex lg:flex-row flex-col items-center 
justify-center lg:mt-[55px] mt-[50px] lg:ml-[30px] ml-[25px] ">
    <div style="width:240px;">
        <Button
            label={$_('sections.areYouReady.btn1')}
            type={"btn-arrow"}
            classInside={"w-[135px]"}
            onClick={() => {
                openFormModal = !openFormModal;
                calendly_modal.set(!get(calendly_modal));
            }}
            style="float:left;"
        />
    </div>
    <div class="lg:block hidden mr-[18px] and">{$_('sections.areYouReady.and')}</div>
    <div class="" style="width:250px; ">
        <Button
            label={$_('sections.areYouReady.btn2')}
            type={"btn-arrow-trans mt-[10px] lg:mt-0"}
            classInside={"w-[135px]"}
            onClick={() => {
                isModalOpen = true
                discus_modal.set(!get(discus_modal));
            }}
            style="float:left;"
        />
    </div>
</div>	
{:else}
<div class="flex lg:flex-row flex-col items-center 
justify-center lg:mt-[55px] mt-[50px] lg:ml-[0px] ml-[0px]">
    <div class="lg:block hidden" style="width:274px;">
        <Button
            label={$_('sections.areYouReady.btn1')}
            type={"btn-arrow"}
            classInside={"w-[172px]"}
            onClick={() => {
                openFormModal = !openFormModal;
                calendly_modal.set(!get(calendly_modal));
            }}
            style="float:left;"
        />
    </div>
    <div class="lg:hidden block" style="width:264px;">
        <Button
            label={$_('sections.areYouReady.btn1Mobile')}
            type={"btn-arrow"}
            classInside={"w-[172px]"}
            onClick={() => {
                openFormModal = !openFormModal;
                calendly_modal.set(!get(calendly_modal));
            }}
            style="float:left;"
        />
    </div>
    <div class="lg:block hidden mr-[8px] and">{$_('sections.areYouReady.and')}</div>

    <div class="lg:pl-[18px]" style="width:264px; ">
        <Button
            label={$_('sections.areYouReady.btn2')}
            type={"btn-arrow-trans mt-[10px] lg:mt-0"}
            classInside={"w-[172px]"}
            onClick={() => {
                  isModalOpen = true
                  discus_modal.set(!get(discus_modal));
            }}
            style="float:left;"
        />
    </div>
</div>	
{/if}

<style lang="postcss">
    .and {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 122.222% */
    }
</style>


<!--
<Modal open={openFormModal} on:close={() => {openFormModal = false;}}>
    <Clendly />
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
 </Modal>
 -->