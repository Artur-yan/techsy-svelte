<script>
    import { _, locale } from 'svelte-i18n';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import CardFollowin from '../../common/RectangularCards/Card.svelte';

    import WhyFollowCardLogo1 from '$lib/assets/img/WhyFollowCardLogo1.svg';
    import WhyFollowCardLogo2 from '$lib/assets/img/WhyFollowCardLogo2.svg';
	import WhyFollowCardLogo3 from '$lib/assets/img/WhyFollowCardLogo3.svg';

    
    let cardsComponents = [];
    let cardsInfo = [];
    const upDateVal = () => {
        cardsInfo = 
        [
            {
                title: $_('sections.whySection.cardLeft.header'),
                text: $_('sections.whySection.cardLeft.description'),
                icon:WhyFollowCardLogo1,
                iconAlt: "web development logo"

            },
            {
                title: $_('sections.whySection.cardMiddle.header'),
                text: $_('sections.whySection.cardMiddle.description'),
                icon:WhyFollowCardLogo2,
                iconAlt: "web development logo"
            },
            {
                title: $_('sections.whySection.cardRight.header'),
                text: $_('sections.whySection.cardRight.description'),
                icon:WhyFollowCardLogo3,
                iconAlt: "web development logo"
            }
        ];
    }
    upDateVal();
    $: $locale, upDateVal();

    const closeOther = (i) => {
        cardsComponents.forEach((element,index) => {
            if(index != i){
                element.closeCon();
            }
        });
       
    }

    let parentDiv = null;

</script>

<GeneralPanel 
    headerOne={$_('sections.whySection.headerOne')}
    headerSecond="{$_('sections.whySection.headerSecond')}" 
    classNames="lg:mt-[170px] mt-[80px] z-[25]">


    <div  bind:this={parentDiv} class="" style="position: relative;">
        <div class="flex xl:flex-row flex-col justify-center gap-[28px] mt-[66px]">
            {#each cardsInfo as info, i}
                <!-- Bind easily to a variable in an array -->
                <CardFollowin  
                    alwaysOn={true}
                    defaultOpenForMobile={i==0?true:false} 
                    parentDiv={parentDiv}
                    scrollIs={false}
                    isMobile={true} 
                    title={info.title}
                    text={info.text}
                    icon={info.icon}
                    iconAlt={info.iconAlt} 
                    bind:this="{cardsComponents[i]}" 
                    on:close={() => {closeOther(i)}}
                />
            {/each}
        </div>
    </div>

</GeneralPanel>