<script>
    import { _, locale } from 'svelte-i18n';
    import {createEventDispatcher, onMount} from 'svelte';
    import { browser } from '$app/environment'; 

    import { changeFromRouteId } from '../../../lib/navigate'; 

    const dispatch = createEventDispatcher();
	export let icon;
	export let iconAlt;
	export let title;
	export let text;
    export let sameHight = false;
    export let isMobile = false;
    export let scrollIs = false;
    export let defaultOpenForMobile = false;
    export let alwaysOn = false;
    export let parentDiv = "";
    export let readMore = false;
    export let readMoreClickGoTo = "";
    let colorTextAndArrow = "#042042";
  
	
    let open = "close"
    let opened = false;
    let mouseClickDis = false;

    let container;
    export function closeCon() {
        console.log("closeCON")
        
        opened = false; 
        container.classList.remove("open"); 
        /*container.classList.add("close"); */
        
    }
    function openCon() {
        dispatch('close');
        opened = true; 
        if (browser && scrollIs) {
            var pagePosBeforeExpand = window.scrollY;
            //console.log("pagePosBeforeExpand",pagePosBeforeExpand);
            container.classList.add("open"); 
            /*parentDiv.style.height = parentDiv.clientHeight+150+"px";*/
        
            window.scrollTo({
                top: pagePosBeforeExpand-15,
                behavior: 'smooth',
            })
            
        }
        else{
            container.classList.add("open"); 
        }
    }
	function toggleExpanded(e) {
       if(alwaysOn == false){
      
            if(opened == true){
                closeCon()
                /*
                opened = false;
                /*container.classList.remove("hover"); 
                container.classList.remove("open"); 
                console.log(container.classList)*/
                
            }else{
                openCon()
                /*
                opened = true;
                /*container.classList.remove("hover"); */
                /*
                container.classList.add("open"); 
                dispatch('next');
                console.log(container.classList)
                */
            }
        }
	}
    function mouseEn() {
        //console.log("mouseEn", mouseClickDis)
       // open = "open";
	}
    function mosueOut() {
        /*container.classList.add("hover"); */
	}

   
    let screenWidth;
    $: if (screenWidth < 1280) {
		isMobile = true;
         
        /*
        if(alwaysOn == true){
            openCon()
        }
        */
        
    } else {
        isMobile = false;
    }

    //#00A3FF
</script>

<svelte:window bind:innerWidth={screenWidth}/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div bind:this={container} class="
    tech-card group flex-row group
    rounded-2xl bg-white {sameHight == true ? "" :"self-start"}
    overflow-hidden {alwaysOn == true ? "open" :""}
    xl:w-[391px] w-[100%] {isMobile== true || alwaysOn == true ? "" : "hover"}"
    style="padding-right: 4px !important;"
    on:click={isMobile== true ? toggleExpanded : null}
    on:mouseover={isMobile== true ? mouseEn : null}
    on:mouseleave={isMobile== true ? mosueOut : null}
>
    <div class="flex text-left items-center" style="width: 100%; height:110px; padding-left:23px; padding-right:5px;">
		<img src={icon} alt={iconAlt} class="h-16 w-16" fetchpriority="low" />
		<h3 class="lg:text-2xl text-[22px] card-title font-semibold text-bgDarkBlue font-poppins ml-5">{@html title}</h3>
	</div>
    <div
		class={`card-text
            pl-[23px] pb-[48px] pr-[23px] 
         lg:group-hover:text-bgDarkBlue 
         font-inter font-normal text-lgbase 
         text-black text-left `}
	>
		{@html text}
	</div>
    {#if readMore}
        <div class="group/item w-[210px] h-[26px] float-left pl-[23px] items-center gap-[23px] inline-flex mb-[23px]"
            on:click={()=>{
                changeFromRouteId(readMoreClickGoTo)
            }} >
            <div style="--colorTextAndArrow:{colorTextAndArrow};" class="
            cursor-pointer
            group-hover/item:weightGrow
            transition-all
            text-[color:var(--colorTextAndArrow)]
            text-[17px] 
            font-medium 
            font-['Poppins']
            transform duration-200
            ">{$_(`card.discover`)}</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover/item:scale-[1.2] 
            group-hover/item:translate-x-1 transform duration-200" width="39" height="12" viewBox="0 0 39 12" fill="none">
                <path d="M38.5657 6.56569C38.8781 6.25327 38.8781 5.74673 38.5657 5.43431L33.4745 0.343146C33.1621 0.0307264 32.6556 0.0307264 32.3431 0.343146C32.0307 0.655565 32.0307 1.1621 32.3431 1.47452L36.8686 6L32.3431 10.5255C32.0307 10.8379 32.0307 11.3444 32.3431 11.6569C32.6556 11.9693 33.1621 11.9693 33.4745 11.6569L38.5657 6.56569ZM0 6.8L38 6.8V5.2L0 5.2L0 6.8Z" 
                fill="{colorTextAndArrow}"/>
            </svg>
        </div>
    {/if}
</div>

<style>
    
    .tech-card{
        min-height: 110px;
        max-height: 110px;
        animation: slideUp 0.60s ease-out;

        /*align-self: start;*/
    }
    .open{
        
        animation: slideDown 0.25s ease-in forwards; 
        /*transition: height 0.25s ease-in !important;*/
        box-shadow: 10px 10px rgba(0, 0, 0, 0.321) !important;
    }
    
    .close{
        /*
        min-height: 110px !important;
        max-height: 110px !important;*/

        /*background-color: aqua;*/

        animation: slideUp 20s ease-out forwards;
    }
    
    .hover:hover{
        /*animation: bounce-in-right 2s linear infinite;*/
        /*animation: bounce-in-right 0.2s ease-in forwards;*/
        
        max-height: 500px;
        animation: slideDown 0.60s;
        /*
        animation-iteration-count: 1;
        animation-fill-mode: both;*/
         
        /*
        max-height: 500px;
        transition: max-height 0.25s ease-in !important; */
        box-shadow: 10px 10px rgba(0, 0, 0, 0.321) !important;
       /* transition: all 250ms cubic-bezier(0.03, -0.17, 0.07, 1.77);*/
		/*transition-delay: 60ms;
		transition-duration: 400ms;*/
    }
    @keyframes slideDown{
        0% {
            max-height: 110px;
        }
        50% {
            padding-bottom: 20px;
        }
        60% {
            padding-bottom: 10px;
        }
        100% {
            max-height: 500px;
            padding-bottom: 0px;
        }
    }
    @keyframes slideUp{
        0% {
            max-height: 500px;
        }
        70% {
            min-height: 110px;
            max-height: 110px;
        }
        80% {
            min-height: 100px;
            max-height: 100px;
        }
        85% {
            min-height: 95px;
            max-height: 95px;
        }
        95% {
            min-height: 100px;
            max-height: 100px;
        }
        100% {
            min-height: 110px;
            max-height: 110px;
        }
    }
  
</style>