<script>
    import { _ } from 'svelte-i18n';
    export let headerOne = "";
    export let headerSecond = "";
    export let classNames = "";
    export let description = "";
    export let headerColor1 = "text-Red";
    export let headerColor2 = "text-white";
    export let outerClass= "";
    export let classDescription = "";
    export let headerSecondMobile = "";
    export let headerStandart= true;
    export let specialPointer = null;
</script>
<div data-pointer="{specialPointer != null ? specialPointer : ""}" class="container mx-auto text-center lg:p-0 z-20 relative {classNames}">
    <p class="{outerClass} {headerColor1} font-semibold font-inter text-xl mx-auto">
        {headerOne}
    </p>
    <h2
        class="{outerClass} {headerColor2} font-extrabold 
        font-poppins text-5xl lg:text-6xl mx-auto 
        leading-[44px] lg:leading-[60px] 
        mt-2 lg:mt-2 {headerStandart == true ? "headerSecond" : ""}"
    >
        {#if headerSecondMobile == ""}
            {headerSecond}
        {:else}
            <span class="hidden xl:block">
                {headerSecond}
            </span>
            <span class="block xl:hidden">
                {headerSecondMobile}
            </span>
        {/if}
    </h2>
    <slot/>
    {#if description != ""}
        <p class="text-white font-poppins font-[400] text-[16px] leading-[24px] mt-[82px] {outerClass} {classDescription}">
            {@html description}
        </p>
    {/if}
   
</div>
<style>
    @media (min-width: 640px) {

        .headerSecond{
            background: linear-gradient(180deg, #FFF 41.69%, rgba(255, 255, 255, 0.00) 111.5%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
</style>
