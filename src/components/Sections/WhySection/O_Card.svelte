<script>
    export let src = "";
    export let srcIcon = "";
    export let header = "";
    export let description = "";
    export let descriptionClass = "";
    export let iconClass = "";
    export let headerClass = "";
    export let height = "";
    export let width = "";
</script>
<div class="relative">
    <img src='{src}' alt="componies" height="{height}" width="{width}" fetchpriority="low">
    <img class="leftIcon {iconClass}" src='{srcIcon}' alt="componies" fetchpriority="low">
    <p class="text-white {headerClass} header font-poppins leading-[26px] font-[600] text-[24px] top-[78px]">{@html header}</p>
    <p class="description {descriptionClass}">{@html description}</p>
</div>

<style>
    .leftIcon{
        position: absolute;
        /*
        top: 65px;
        left: 37px;
        */
    }
    .header{
        position: absolute;
        text-align: left;
        /*
        left: 110px;
        text-align: left;
        */
    }
    .description{
        position: absolute;
        text-align: left;
        color: #FFF;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; 
        
    }
</style>

