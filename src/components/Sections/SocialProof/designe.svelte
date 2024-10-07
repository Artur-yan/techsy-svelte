<script>
    import stars from '$lib/assets/img/stars.svg';
    import GoogleRatingStars from '../../../svgs/googleRatingStars.svelte';
    export let item;
</script>

<div class="flex flex-col items-center">
    <div class="flex justify-center h-[75px]">
        <img src="{item.image}" class="absolute top-[-75px]" alt="Collaboration pic">
    </div>
    <div class="mt-[16px] text-center text-black text-2xl font-medium font-['Poppins']">{item.name}</div>
    <a href={"https://"+item.link} target="_blank" aria-label="{item.company}" >
        <div class="mt-[8px] text-center text-black text-[21px] font-medium font-['Poppins'] underline">{item.company}</div>
    </a>
    <div class="w-[94px] h-6 relative mt-[10px]">
        <div class="flex flex-row items-baseline ">
            <div class="h-[20px] text-sky-950 text-base font-semibold font-['Poppins']">5.0</div>
            <div class="googlestars transition duration-1100 ease-in-out pl-1 w-[67px] h-[11px]"><GoogleRatingStars className="test"/></div>
        </div>
    </div>
    <div class="description">
        {@html item.description}
    </div>
</div>

<style lang="postcss">

    .description{
        line-height: normal;
        @apply max-w-[259px] mt-[24px] mb-[24px] lg:max-w-[325px] text-center text-black lg:text-[19px] text-[16px] font-normal xl:italic font-['Inter']
    }
    .description > :global(br) {

        display: block;
        content: "";
        margin-top: 15px;
    }
</style>
