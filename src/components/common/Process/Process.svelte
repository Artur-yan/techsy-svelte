<script>
    import { _, locale } from 'svelte-i18n';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';

    export let location = "";
    export let svgs = [];
    export let svgsMobie = [];
    export let data = [];
</script>



<GeneralPanel 
	headerOne={$_(`${location}.headerOne`)} 
	headerSecond={$_(`${location}.headerSecond`)}

	description={$_(`${location}.desc`) 
    == `${location}.desc` ? " " : $_(`${location}.desc`)}
    description2={'landing_page.webdev.description4'}
	classNames="lg:mt-[170px] mt-[94px] pb-0 !max-w-[1230px]">

    <div class="conProc mt-[83px] hidden xl:block">
        <div class="relative"> <!--Correction-->
            {#each data as item, n}
                <div 
                    class="itemConProc" 
                    style="
                        --leftPointConProc:{item.leftPoint}px; 
                        --widthConProc:{item.width}px;
                        --topConProc:{item.posReverse == true ? '73': '0'}px;
                        ">
                    {#if item.posReverse}
                        <div class="decs">
                            {@html item.desc.content}
                        </div>
                        <img class="imgIco mt-[18px]" src="{item.icon}" alt="icon">
                        <div class="header mt-[25px]">
                            {@html item.header.content}
                        </div>
                    {:else}
                        <div class="header">
                            {@html item.header.content}
                        </div>
                        <img class="imgIco mt-[25px]" src="{item.icon}" alt="icon">
                        <div class="decs mt-[18px]">
                            {@html item.desc.content}
                        </div>
                    {/if}
                    
                </div>
            {/each}
        </div>
    </div>

    <div class="conProcMboile block xl:hidden mt-[74px]">
        {#each data as item, n}
            <div
                class="itemConProcMobile">
                {#if item.posReverse}
                    <div>
                        <div class="headerMobile">
                            {@html (item.header.contentMobile != undefined ? item.header.contentMobile:item.header.content)}
                        </div>
                        <div class="decsMobile">
                            {@html (item.desc.contentMobile != undefined ? item.desc.contentMobile:item.desc.content)}
                        </div>
                    </div>
                    <img class="" src="{item.iconMobile}" alt="icon">
                {:else}
                    <img class="" src="{item.iconMobile}" alt="icon">
                    <div class="flex flex-col items-start ml-[19px]">
                        <div class="headerMobile">
                            {@html (item.header.contentMobile != undefined ? item.header.contentMobile:item.header.content)}
                        </div>
                        <div class="decsMobile">
                            {@html (item.desc.contentMobile != undefined ? item.desc.contentMobile:item.desc.content)}
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
   
</GeneralPanel>

<style lang="postcss">
    @media (min-width: 1280px) {
		
	}

    .itemConProcMobile{
        @apply flex flex-row justify-between items-center mb-[48px]
    }
    .conProcMboile {
        position: relative;
        width: 340px;
        @apply ml-auto mr-auto
    }

    .conProc {
        position: relative;
        height: 433px;
        /*
        margin-top: 50px;
        width: 100px;
        margin-left: auto;
        margin-right: auto;*/
        @apply ml-auto mr-auto
    }
    .imgIco {

        @apply ml-auto mr-auto
    }
    .decs{
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 113.5%; /* 19.295px */
    }

    .headerMobile{
        //width: var(--headerWidth);
        height: 48px;
        color: #FFF;
        text-align:left;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 102%; /* 24.48px */
        margin-bottom:8px;
    }

    .decsMobile{

        text-align: left;
        color: #FFF;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 113.5%; /* 15.89px */
    }
    
    .header{
        //width: var(--headerWidth);
        height: 48px;
        color: #FFF;
        text-align: center;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 102%; /* 24.48px */

        @apply ml-auto mr-auto
    }
    .itemConProc {
        position: absolute;
        top: var(--topConProc);
        width: var(--widthConProc);
        left: var(--leftPointConProc);
    }
</style>


