<script>

    import { _, locale } from 'svelte-i18n';

    import Web_dev_logo from '$lib/assets/img/web_dev_logo.svg';
	import mob_dev_logo from '$lib/assets/img/mob_dev_logo.svg';
    import marketing_sales_logo from '$lib/assets/img/marketing_sales_logo.svg';
    import { changeFromRouteId } from '../../lib/navigate'; 

    export let className = "";
    $: currentLocale = $locale;
    /*
      transition-opacity
            group-hover:opacity-100 opacity-0
              0% {
            /*
            width: max-content;
            height: auto;
            
            opacity: 1;
        }
        50%{
            opacity: 0.5;
        }
        100% { 
            /*
            width: max-content;
            height: auto;
            
            opacity: 0;
        }
    */



   /*
    .generalCon:hover > .dropdownItemsCon {
        
        z-index: 1;
        opacity: 1;
        margin-top: 20px;
        transition: opacity 0.3s linear ;
        visibility:visible;
        
        width: max-content;
        height: auto;
    }

    .generalCon:hover > .btnMain {
        background-color: white; 
        color: rgb(7 30 63);
    }

     .dropdownItemsCon{
   
      
        display: flex;
        flex-direction: column;
   
       
        z-index: -1;
     

        visibility: hidden;
        opacity: 0;
        width: 0;
        height: 0;
        
    }

     <div class="flex flex-col w-[100px] generalCon">
        <button class="btn btnCon btnMain btn-link-type">
            <div class="flex flex-row">
                Services
            </div>
        </button>   
        <div class="dropdownItemsCon">
            <div class="dropdownItems flex flex-col">
                <button class="btn btnCon btn-dropdown-link ">
                    <div class="flex flex-row">
                        Mobil Development
                    </div>
                </button>   
                <button class="btn btnCon btn-dropdown-link ">
                    <div class="flex flex-row">
                        Web Development
                    </div>
                </button> 
            </div>
        </div>
    </div>
   
   */

    let open = null;
    let classForGeneral = "";
    let classForImg = "";

    function openFun(){
        classForGeneral = "open";
        open = true;
    }

    function close(){
        classForGeneral = "close";
        open = false
    }


    function ClickBtn(){
        /*
        if( open == null){

            classForGeneral = "open";
            open = true;

        }else if(open == true){
            classForGeneral = "close";
            //classForImg = "closeIMG";
            open = false
        }
        else{
            classForGeneral = "open";
            //classForImg = "openIMG";
            open = true;
        }
        console.log("AASDFASD")*/
    }

</script>
<div class="relative {className}">
    <div class="flex flex-col w-[100px] generalCon {classForGeneral}" 
    on:mouseleave={close} style="--widthItem:{currentLocale == "et-ET" ? "275":"225"}px">
        <button class="btn btnCon btnMain btn-link-type"  on:mouseenter={openFun}>
            <div class="flex flex-row">
                {$_('navbar.services')}
            </div>
        </button>   
        <div class="dropdownItemsCon">
            <div class="dropdownItems flex flex-col pt-[18px] pl-[16px] pr-[16px] pb-[21px] gap-[8px]">
                <button class="btn btnCon btn-dropdown-link !p-0 !h-[40px] !min-h-[40px] self-start	"
                    on:click={()=>{ changeFromRouteId("[page=webdev]"); close();}}>
                    <div data-container class="flex flex-row items-center">
                        <img data-logo src="{Web_dev_logo}" class="h-[40px] w-[40px] mr-[12px]"
                        fetchpriority="low" alt="Web_dev_logo" >
                        {$_('navbar.webDev')}
                    </div>
                </button> 
                <button class="btn btnCon btn-dropdown-link !p-0 !h-[40px] !min-h-[40px] self-start"
                    on:click={()=>{ changeFromRouteId("[page=mobdev]"); close();}}>
                    <div data-container class="flex flex-row items-center">
                        <img data-logo src="{mob_dev_logo}" class="h-[40px] w-[40px] mr-[12px]" 
                        fetchpriority="low" alt="Web_dev_logo" >
                        {$_('navbar.mobDev')}
                    </div>
                </button>   
                <button class="btn btnCon btn-dropdown-link !p-0 !h-[40px] !min-h-[40px] self-start	"
                    on:click={()=>{ changeFromRouteId("[page=marketing]"); close();}}>
                    <div data-container class="flex flex-row items-center">
                        <img data-logo src="{marketing_sales_logo}" class="h-[40px] w-[40px] mr-[12px]"
                         fetchpriority="low" alt="Web_dev_logo" >
                        {$_('navbar.marketing')}
                    </div>
                </button> 
            </div>
        </div>
    </div>
</div>
<style lang="postcss">

    /*
    .generalCon:hover,
    */

    
    @keyframes slideDown{
        0% {
            height: 48px;
        }
        30% {
            height: 196px;
        }
        100% {
            height:173px;
        }
    }

    
    .open > .dropdownItemsCon {
        
        /*
        z-index: 1;
        opacity: 1;*/
       /* margin-top: 20px;*/
        /*transition: opacity 0.2s linear ;*/
        /*visibility:visible;*/

        animation: slideDown 0.60s;
        
        width: max-content;
        height: 173px;
    }

    .open > .btnMain {
        background-color: white; 
        color: rgb(7 30 63);
    }
    

    /*

    .generalCon:hover > .btnMain {
        background-color: white; 
        color: rgb(7 30 63);
    }
    

    
    .btnMain:hover ~ .dropdownItemsCon {
        opacity: 1;
        z-index: 1;
        transition: opacity 0.3s linear;
        width: max-content;
        height: auto;
    }
  

    .dropdownItemsCon:hover {
        opacity: 1;
        z-index: 1;
        width: max-content;
        height: auto;
    }
    */
    /*

    .btnMain ~ .dropdownItemsCon:hover {
        background-color: blue !important;
    }
    
       */

       
    @keyframes slideUp{
        0% {
            width: max-content;
            height: 173px;
        }
        100% {
            width: max-content;
            height: 0px;
        }
    }
  
    .dropdownItemsCon{
        /*
        display: none;
        opacity: 0;
        
        visibility: hidden;
        opacity: 0;*/
      
        display: flex;
        flex-direction: column;
   
        width: max-content;
       
        /*z-index: -1;
        transition: opacity 0.3s linear;*/

        margin-top: 20px;

        width: 0; height: 0;


        /*animation: slideUp 0.20s ease-out;*/

        /*
        width: max-content;
        height: auto;
    
        /*padding-top: 20px;*/

        background-color: white;
        border-radius: 15px;
        
    }

    .close > .dropdownItemsCon{
        animation: slideUp 0.20s ease-out;
    }

 

    .dropdownItems{
        
        /*
        background-color: white;
        border-radius: 15px;
        */
        
    }
    .btnCon{
        @apply font-inter font-semibold normal-case border-none 
    }
    [data-container]{
        width: var(--widthItem);
        /*275px;*/
    }
    .btnCon:hover > [data-container] {
        text-decoration: underline;
        font-size: 17px;
        transition: all .3s;
  
    }
    .btnCon:hover > [data-container] > [data-logo]{
        scale: 1.2;
        transition: all .3s;
    }

    .btnCon > [data-container] > [data-logo]{
        scale: 1;
        transition: all .3s;
    }
    /*
    .dropdownItem{
       width: 100%;
       text-align: center;
    }
    */
</style>