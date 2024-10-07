<script>
    import { onMount } from 'svelte';
    import caglar from '$lib/assets/img/Caglar.webp';
	import daniil from '$lib/assets/img/Daniil.webp';
	import eliis from '$lib/assets/img/Eliis.webp';
	import lazar from '$lib/assets/img/Lazar.webp';
	import gregory from '$lib/assets/img/Gregory.webp';
    import andrea from '$lib/assets/img/Andrea.webp';

    export let className = "";


    const data = [
        {
            name: "Gregory K.",
            job: "Project Management",
            src: gregory,
            text: 'In sync with all of today’s technologies, trends and industry standards.'
        },
        {   
            name: "Ethel Ellis K.",
            job: "Marketing Specialist",
            src: eliis,
            text: 'SMM & PPC marketing specialist, responsible for your brand visiblity and campaigns that drive  crushing results.'
        },
        {
            name: "Andrea P.",
            job: "UX/UI Designer",
            src:andrea,
            text:'Our junior UX/UI web and app designer, slowly but surely climbing the ranks in creating some pretty innovative designs.'
        },
        {   
            name: "Daniil P.",
            job: "BE Data Engineer",
            src:daniil,
            text:'Responsible for all backend related stuff and some pretty hardcore databases.'
        },
        {  
            name: "Lazar F.",
            job: "Full-Stack Deveoper",
            src:lazar,
            text:'Full-Stack developers are always hard to come by. Lazar is equally experienced in both.'
        },
        {   
            name: "Caglar G.",
            job: "Full-Stack Deveoper",
            src:caglar,
            text:'Full-Stack developers are always hard to come by. Lazar is equally experienced in both.'
        }
    ]
    let doublee = [...data,...data]
    let carousel, sleft;
    let maxScrollLeft;
    let svelteClass;


    let card = "";


    /*
    function add(el, directionReverse=false){
        if(directionReverse==true){
            el.insertAdjacentHTML('beforebegin', card);
        }else{
            el.insertAdjacentHTML('afterbegin', card);
        }
       
    }


    function scrollEvent (){
        sleft=carousel.scrollLeft
    

        if(sleft == (maxScrollLeft/2)){
            console.log("ortaa")
        } 
        else if(sleft < (maxScrollLeft/2)){
            console.log("sola ekle")
            //console.log(carousel.firstElementChild);
            add(carousel.firstElementChild, true)
            //doublee = [...data,...doublee];
        }
        else{
            console.log("sağ ekle")
            add(carousel.lastElementChild, false)
            //console.log(carousel.lastElementChild)
            //doublee.splice(0, 5);
            //doublee = [...doublee,...data];
        }
    }*/

    function handleMouseEnter() {
        carousel.style.animationPlayState = 'paused';

	}

	function handleMouseLeave() {
        carousel.style.animationPlayState = 'running';
	}
    
    function setScroll(x){
        console.log(x);
        console.log(x.scrollLeft);
        maxScrollLeft = x.scrollWidth - x.clientWidth;
        x.scrollLeft = maxScrollLeft/2
    }

    /*
    onMount(() => {
        svelteClass = Array.from(carousel.classList).filter(c => c.includes('s-'))[0];
        card = `
            <div class="item ${svelteClass}">
                <img src="https://placehold.co/292x298?text=new" alt="" width="292" height="298">
            </div>
        `;
    })*/

</script>
<div class="slider {className}">
	<div class="slide-track"
        bind:this={carousel} 
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}>
        {#each doublee as item, n}
            <div class="group slide" >
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
                <p class="
                    transition-opacity
                    group-hover:opacity-100 opacity-0
                    absolute 
                    top-0 
                    w-[298px]
                    text-center 
                    text-white text-[19px] 
                    font-medium font-['Poppins'] 
                    leading-7
                    pl-[24px]
                    pr-[24px]
                    pt-[75px]
                    transform duration-500
                    ">
                    {item.text}
                </p>
                <div class="w-[292px] text-white text-[26px] font-semibold font-['Poppins'] text-left mt-[10px]">{item.name}</div>
                <div class="w-[265px] text-white text-[22px] font-medium font-['Poppins'] text-left  mt-[10px]">{item.job}</div>
            </div>
        {/each}
	</div>
</div>

<!--
<div class="carousel-container" bind:this={carousel} 
on:scroll={()=>{}}>
    {#each doublee as item, n}
        <div class="item" data-main-item={n}>
            <img src="{item.src}" alt="" width="292" height="298">
        </div>
    {/each}
</div>
-->


<style class="postcss">

    :root{
        /*--slide-width: 292px;*/
        /*
        --slide-count: 6;
        --slide-play-status: running; /*paused*/
        
    }
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { 
            transform: translateX(calc(-312px * 6)); 
        }
    }


    .slider {
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        overflow:hidden;
        position: relative;
        width: 100%;
        mask-composite: subtract;
        mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    }
    .slide-track {
        animation: scroll 20s linear infinite;
        animation-play-state: running;
        display: flex;
        width: calc(292px * 14);
    }
        
    .slide {
        height: 400px;
        width: 292px;
        margin-left: 10px;
        margin-right: 10px;
	}

    .slide:hover{
        /*background-color: brown;*/
    }
  
/*
    @keyframes run {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    .carousel-container {
        display: flex;
        overflow-x: auto;
        gap: 20px;
    }
    .item{
        min-width: 292px;
        height: 400px;
        animation: run 5s linear infinite;
    }
    */

</style>
