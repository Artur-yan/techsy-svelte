<script>

/*

*/
    import { _, locale } from 'svelte-i18n';
    import arrow from '$lib/assets/img/arrow.svg';
    import { changeFromRouteId } from '../../lib/navigate'; 
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let open = null;
    let classForGeneral = "";
    let classForImg = "";

    function ClickBtn(){
        if( open == null){

            classForGeneral = "open";
            classForImg = "openIMG";
            open = true;

        }else if(open == true){
            classForGeneral = "close";
            classForImg = "closeIMG";
            open = false
        }
        else{
            classForGeneral = "open";
            classForImg = "openIMG";
            open = true;
        }
    }


</script>
<div class="relative mb-[10px]">
    <div class="flex flex-col w-[100px] generalCon items-center {classForGeneral}">
        <button class="btn btnCon pr-0 btnMain btn-m-link-type justify-center" on:click={ClickBtn}>
            <div class="flex flex-row">
                {$_('navbar.services')}
                <img src="{arrow}" class="absolute right-[-15px] top-[18px] ml-2 {classForImg}" 
                style="rotate: 90deg; scale:1.2;" 
                alt="dropldownArrow">
            </div>
        </button>  
        <div class="dropdownItemsCon">
            <div class="dropdownItems flex flex-col 
                pt-[18px] pb-[21px] gap-[8px]">
                <button class="btn btnCon btn-m-link-type !p-0 !h-[40px] !min-h-[40px] self-start	"
                on:click={()=>{ changeFromRouteId("[page=webdev]"); dispatch("close");}}>
                    <div data-container class="flex flex-row items-center">
                        {$_('navbar.webDev')}
                    </div>
                </button> 
                <button class="btn btnCon btn-m-link-type !p-0 !h-[40px] !min-h-[40px] self-start"
                    on:click={()=>{ changeFromRouteId("[page=mobdev]"); dispatch("close");}}>
                    <div data-container class="flex flex-row items-center">
                        {$_('navbar.mobDev')}
                    </div>
                </button>   
                <button class="btn btnCon btn-m-link-type !p-0 !h-[40px] !min-h-[40px] self-start	"
                on:click={()=>{ changeFromRouteId("[page=marketing]"); dispatch("close");}}>
                    <div data-container class="flex flex-row items-center">
                        {$_('navbar.marketing')}
                    </div>
                </button> 
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .btnCon{
        width: 100%;
        @apply 
            font-inter 
            font-semibold 
            normal-case
            border-none 
            text-[20px] 
            pl-0
    }
    .btnCon > [data-container] {
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .dropdownItemsCon{
        display: flex;
        flex-direction: column;
        width: 0;
        height: 0;
        overflow: hidden;
        /*margin-left: -10px;*/
    }

    .dropdownItems{/*
        border-radius: 16px 0px 0px 16px;
        background: rgba(4, 32, 66, 0.10);
        padding: 10px;*/
        gap: 18px;
    }

    @keyframes slideUp{
        0% {
            width: 160px;
            height: 173px;
        }
        100% {
            width: 160px;
            height: 0px;
        }
    }

    @keyframes slideDown{
        0% {
            height: 48px;
        }
        30% {
            height: 188px;
        }
        100% {
            height: 173px;
        }
    }

    .open > .dropdownItemsCon {
        animation: slideDown 0.60s;
        width: 160px;
        height: 173px;
    }


    .close > .dropdownItemsCon {
        animation: slideUp 0.60s;
    }
    /*

    .open
    > button > div > img {
        rotate: 180deg;
        transition: rotate 0.3s;
    }
    */

    .openIMG{
        
        rotate: 136deg !important;
        transition: rotate 0.3s;
        
    }

    .closeIMG{
        
        rotate: 90deg !important;
        transition: rotate 0.3s;
        
    }

    /*
    .generalCon
    > button > div > img {
        rotate: 360deg;
        transition: rotate 0.3s;
    }
    */



</style>