<script>
    import { _, locale } from 'svelte-i18n';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import Carousel3 from '../../../components/common/Carousel3/Carousel3.svelte'
	import designe from './designe.svelte';

    import socialProof1 from '$lib/assets/img/socialProof1.webp';
    import socialProof2 from '$lib/assets/img/socialProof2.webp';
    import socialProof3 from '$lib/assets/img/socialProof3.webp';

    export let location = "sections.socialProof";

    const svgs = [
        socialProof1,
        socialProof3,
        socialProof2
    ]

    const names = [
        "Kaspar L. Palgi",
        "Marec Herman",
        "Tetiana Husieva"
    ]
    

    const companys = [
        "CrewNew LTD",
        "Mustuba.ee",
        "TrustLynx.com"
    ]

    
    const links = [
        "www.crewnew.com",
        "www.mustuba.ee",
        "www.trustlynx.com"
    ]

    //const location = "sections.socialProof";
    const lenght = 3;
    let cards = [];
    const upDateVal = () => {
		cards = [];
		for (let index = 0; index < lenght; index++) {
			cards.push(
			{
                description: $_(`${location}.data.${index}.description`),
                name: names[index],
                company: companys[index],
                link: links[index],
                image:svgs[index]

            })
		}
    }
    upDateVal();
    $: $locale, upDateVal();
</script>

<GeneralPanel 
    headerOne={$_(location+'.headerOne')} 
    headerSecond={$_(location+'.headerSecond')}
    headerSecondMobile={$_(location+'.headerSecondMobile')}
    description={""}
	classNames="lg:mt-[170px] mt-[94px] pl-0 pr-0 pb-0">

    <div class="block lg:hidden mt-[70px]">
        <Carousel3 
            cards={cards}
            location={location}
            classPanel="" 
            classContainer="pt-[110px]" 
            classItemCon="w-[396px] min-w-[295px] h-auto"
            classFirstItem="lg:mt-[31px] lg:ml-0 ml-[300px]"
            classLastItem="lg:mt-[31px] lg:mr-0 mr-[300px]"
            classCardItem="bg-white rounded-[15px] shadow-[14px_14px_0px_0px_rgba(0,0,0,0.16)] !h-auto"
            designe={designe} 
        />
    </div>  
    <div class="hidden lg:block">
        <div class="flex flex-row gap-[20px] pt-[140px] justify-center">
            {#each cards as item, n}
                <div class="w-[396px] min-w-[295px] h-[484px]">
                    <div class="bg-white rounded-[15px] shadow-[14px_14px_0px_0px_rgba(0,0,0,0.16)]" 
                    style="height: 100%; width: 100%;">
                        <div class="relative {n == 0 ? "mt-[31px]" : ""} 
                        {n == cards.length-1 ? "mt-[31px]" : ""}">
                            <svelte:component this={designe} item={item}/>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</GeneralPanel>