<script>
    import stars from '$lib/assets/img/stars.svg';
    import GoogleRatingStars from '../../../svgs/googleRatingStars.svelte';
    import quote from '$lib/assets/img/quote-left.svg';

    export let item;
</script>
<div class="group h-[400px] w-[292px] relative">
    <div class="max-h-[292px] h-[292px] w-[298px] overflow-hidden" 
    style="background: linear-gradient(180deg, #DE3C4B 7.33%, #042042 128.27%);">
    <img class="
     
        transition-all
        group-hover:scale-110 
        group-hover:opacity-[0.2] 
        group-hover:translate-y-6
        opacity-100
        max-h-[292px]
        transform duration-500" src="{item.src}" height="292" width="298" alt="" />
    </div>
    <div class="absolute 
        top-0
        min-h-[298px] ">
        <div style="display: flex;
            justify-content: center;
            align-items: center;
            height: 298px;
            width: 298px;">
            <p class="
                mt-auto mb-auto
                transition-opacity
                group-hover:opacity-100 opacity-0
                w-[298px]
                text-center 
                text-white text-[19px] 
                font-medium font-['Poppins'] 
                leading-7
                pl-[24px]
                pr-[24px]
                pt-[15px]
                transform duration-500
                ">
                {item.text}
                <img class="ml-auto mr-auto" src="{quote}" alt="quote"/>
            </p>
        </div>
    </div>
    
    <div class="w-[292px]  text-white text-2xl font-medium font-['Poppins'] text-left mt-[10px]">{item.name}</div>
    <div class="w-[265px] text-white text-xl font-medium font-['Poppins'] text-left mt-[10px]">{item.job}</div>
</div>