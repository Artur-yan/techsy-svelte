<script>
	import GoogleRatingLogo from '../../svgs/googleRatingLogo.svelte';
	import GoogleRatingStars from '../../svgs/googleRatingStars.svelte';
    export let className = "";
    export let textColor = "white";
</script>
<a target="_blank" href="https://g.co/kgs/LFtdAV" style="width: fit-content;"> 
    <div class="flex flex-row {className}
        w-min
        [&_.googleTextCon]:hover:-translate-x-[-7px] 
        [&_.googlestars]:hover:scale-105
        [&_.googlestars]:hover:-translate-x-[-2px]
        " >
        <div>
            <GoogleRatingLogo />
        </div>
        <div class="googleTextCon flex flex-col pl-[2px] transition 
            duration-300 ease-in-out
        ">
            <div class="flex flex-row items-baseline ">
                <div class="h-[20px] text-{textColor} font-semibold text-base">5.0</div>
                <div class="googlestars transition duration-1100 ease-in-out pl-1 w-[67px] h-[11px]"><GoogleRatingStars className="test"/></div>
            </div>
            <div class="text-left h-[20px] text-xs font-[400] text-{textColor}">Average Rating</div>
        </div>
    </div>
</a>