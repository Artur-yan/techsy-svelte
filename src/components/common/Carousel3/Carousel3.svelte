<script>
    import { _, locale } from 'svelte-i18n';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import ForTest from '../../Sections/SocialProof/designe.svelte'

    import testImg from '$lib/assets/img/testDeleteLater.png';

    export let location = "";

 

    let cardsCon = null;
    export let cards = [];

    /*
    function test(){
        /*
        console.log(cards);
        console.log("testttt");
        */
    //}

    //$: cards, test()
   

    const cardSidth = 295;
    const marginOutside = 300;
    const cardMarginBetween = 20;

    function setMiddle(){
        
        for (const [i, el] of cards.entries()) {

            const idealMiddle = marginOutside + ((i)*cardMarginBetween) + ((i)*cardSidth) + (cardSidth/2);
            let realMiddle = Math.round(idealMiddle-(cardsCon.offsetWidth/2));
            
            //console.log(`card ${i} idealMiddle:`,idealMiddle);
            //console.log(`card ${i} realMiddle:`,realMiddle);
            el["realMiddle"] = realMiddle;

        }
       
    }


    function scrollEvent(e){
        /*
        console.log(e.target.offsetWidth)
        console.log(e.target.scrollLeft);
        console.log(e.target.scrollWidth);
        */

        //console.log(e.target.scrollY / (e.target.offsetWidth - e.target.innerHeight))

        const live = e.target.scrollLeft;
        /*
        const cardSidth = 295;
        const cardMarginBetween = 20;
        const marginOutside = 300;
        const totalWidthContent = e.target.scrollWidth;
        const scrollDivWidth = e.target.offsetWidth;

        //all middle
        const difrence_between_card_middle = 315;
        const card1Middle = 447.5
        const card2Middle = 762.5;
        const card3Middle = 1077.5;

        const scrollMaxVal = totalWidthContent-scrollDivWidth;
        const realCard2Middle = Math.round(scrollMaxVal/2);
        const realCard1Middle = realCard2Middle-315;
        const realCard3Middle = realCard2Middle+315;

        const idealCardsWidth = (marginOutside * 2) + (cardSidth*cards.length) + ((cards.length-1)*cardMarginBetween);
        const idealCards1Middle = marginOutside + ((1-1)*cardMarginBetween) + ((1-1)*cardSidth) + (cardSidth/2);
        const idealCards2Middle = marginOutside + ((2-1)*cardMarginBetween) + ((2-1)*cardSidth) +(cardSidth/2);
        */
        //console.log("Live scroll data:",live);
        /*
        console.log("Max scroll width:",scrollMaxVal);
        console.log("realCard1Middle",realCard1Middle);
        console.log("realCard2Middle",realCard2Middle);
        console.log("realCard3Middle",realCard3Middle);
        console.log("idealCardsWidth",idealCardsWidth);
        */

        setMiddle();

        for (let [i, el] of cards.entries()) {

            /*
            const idealMiddle = marginOutside + ((i)*cardMarginBetween) + ((i)*cardSidth) + (cardSidth/2);
            const realMiddle = Math.round(idealMiddle-(scrollDivWidth/2));
            console.log(`card ${i} idealMiddle:`,idealMiddle);
            console.log(`card ${i} realMiddle:`,realMiddle);
            */
            //console.log(`card ${i} realMiddle:`,el.realMiddle);
            
            if(live == el.realMiddle || (live+1) == el.realMiddle || (live-1) == el.realMiddle){
                el.node.style.setProperty("--scroll",1);
                //console.log("alertttttt");
                break;
            }
            if(cards[i+1] == undefined){break;}
            //console.log(cards[i+1]);

            if(live > el.realMiddle && live < cards[i+1].realMiddle)
            {
                const difference = live-el.realMiddle;
                const convert = difference / 315;
                /*
                console.log("difference: ", difference);
                console.log("convert:", convert)
                */

                el.node.style.setProperty("--scroll",1-convert);

                cards[i+1].node.style.setProperty("--scroll",convert);
                break;
            }
            
           
            
        }
    

        /*
        if(live == realCard1Middle){
            console.log("mid1")
            card1.style.setProperty("--scroll",1);
            card2.style.setProperty("--scroll",0);
        }
        else if(live == realCard2Middle)
        {
            console.log("mid2")
            card1.style.setProperty("--scroll",0);
            card2.style.setProperty("--scroll",1);
        }
        else if(live == realCard3Middle)
        {
            console.log("mid3")
            card1.style.setProperty("--scroll",0);
            card2.style.setProperty("--scroll",0);
        }
        else if(live > realCard1Middle && live < realCard2Middle)
        {
            const difference = live-realCard1Middle;
            console.log("difference: ", difference);
            const convert = difference / 315;
            console.log("convert:", convert)
            console.log("mid1-2 space")
            card2.style.setProperty("--scroll",convert);
            card1.style.setProperty("--scroll",1-convert);
        }
        else if(live > realCard2Middle && live < realCard3Middle)
        {
            console.log("mid2-3 space")
            const difference = live-realCard2Middle;
            const convert = difference / 315;
            card3.style.setProperty("--scroll",convert);
            card2.style.setProperty("--scroll",1-convert);
        }
        */
        

     
    }

    const useFun = (node) =>{
        let e = {}; 
        e.target = node;
        cardsCon = node;
        scrollEvent(e);
    }

    const triggerDefault = (node,n)=>{
        cards[n].node = node;
        /*
        if(n == cards.length-1 ){
            console.log("last");
            console.log(cardsCon);
        }
        */

    }

    export let classPanel = "";
    export let classContainer = "";
    export let classItemCon = "";
    export let classFirstItem = "";
    export let classLastItem = "";
    export let classCardItem = "";
    export let designe = null;
    //lg:mt-[31px] lg:ml-0 ml-[300px]   <svelte:component this={designe} name={item.name}/>
</script>



<div class="flex flex-row gap-[20px] scrolAfter overflow-x-scroll no-scrollbar snap-mandatory snap-x {classContainer}" on:scroll={scrollEvent} use:useFun>
    {#each cards as item, n}
        <slot></slot>
        <div class="snap-center {classItemCon}
        {n == 0 ? classFirstItem : ""} 
        {n == cards.length-1 ? classLastItem : ""}">
            <div class="card animateDec {classCardItem}" use:triggerDefault={n}>
                <svelte:component this={designe} item={item}/>
            </div>
        </div>
    {/each}
</div>

<style lang="postcss">

    .scrolAfter::after {
        content: "";
        /*background: red;*/
        min-width: 1px;
        min-height: 100%;
    }


    @keyframes move {
        to {
            transform: translateY(-32px);
        }
    }
   
    .animateDec {
        animation: move 1s linear infinite;
        animation-play-state: paused;
        animation-delay: calc(var(--scroll) * -1s);

        animation-iteration-count: 1;
        animation-fill-mode: both;
    }
    .card{
        height: 100%;
        width: 100%;
    }
    
    


   
</style>

