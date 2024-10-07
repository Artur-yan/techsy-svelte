<script>
    import { _, locale } from 'svelte-i18n';
	import GeneralPanel from '../../Panels/GeneralPanel.svelte';
	import Carousel2 from '../../../components/common/Carousel2.svelte';
    import Carousel3 from '../../../components/common/Carousel3/Carousel3.svelte';
    //import designe from '../SocialProof/designe.svelte';
    import designe from './designe.svelte';


    $: currentLocale = $locale;

    import caglar from '$lib/assets/img/Caglar.webp';
	import daniil from '$lib/assets/img/Daniil.webp';
	import eliis from '$lib/assets/img/Eliis.webp';
	import lazar from '$lib/assets/img/Lazar.webp';
	import gregory from '$lib/assets/img/Gregory.webp';
    import andrea from '$lib/assets/img/Andrea.webp';
    import drilon from '$lib/assets/img/Drilon.webp';

    export let specialPointer = null;
    
    let data = [];
    const upDateVal = () => {
        data = [
            {
                name: "Gregory K.",
                job: "Project Management",
                src: gregory,
                text: $_(`sections.ourTeamSection.data.0.text`)
            },
            {   
                name: "Ethel Ellis K.",
                job: "Marketing Specialist",
                src: eliis,
                text: $_(`sections.ourTeamSection.data.1.text`)
            },
            {
                name: "Andrea P.",
                job: "UX/UI Designer",
                src:andrea,
                text:$_(`sections.ourTeamSection.data.2.text`)
            },
            {   
                name: "Daniil P.",
                job: "BE Data Engineer",
                src:daniil,
                text:$_(`sections.ourTeamSection.data.3.text`)
            },
            {  
                name: "Lazar F.",
                job: "Full-Stack Deveoper",
                src:lazar,
                text:$_(`sections.ourTeamSection.data.4.text`)
            },
            {   
                name: "Caglar G.",
                job: "Full-Stack Deveoper",
                src:caglar,
                text:$_(`sections.ourTeamSection.data.5.text`)
            },
            {
                name:"Drilon M.",
                job: "Front-End Developer",
                src:drilon,
                text:$_(`sections.ourTeamSection.data.6.text`)
            }
        ]
    }

    //<Carousel2 className="mt-[72px]"/>
    const location = "sections.socialProof";

    upDateVal();
    $: $locale, upDateVal();

</script>




<GeneralPanel 

    headerOne={$_('sections.ourTeamSection.headerOne')}
    headerSecond="{$_('sections.ourTeamSection.headerSecond')}" 
    classNames="lg:mt-[170px] mt-[80px] pl-0 pr-0 max-w-[1440px]"
    outerClass="pl-[30px] pr-[30px]"
    specialPointer={specialPointer}>

    <div class="relative m-auto mt-[72px] max-w-[852px] 
    text-center text-white text-[19px] font-normal lg:font-light 
    font-['Inter']">
        <span class="hidden lg:block w-[852px]">{@html $_('sections.ourTeamSection.dec1')}</span>
        <span class="block lg:hidden pl-[30px] pr-[30px]">{@html $_('sections.ourTeamSection.dec1Mobile')}</span>
    </div>

    <div class="block lg:hidden">
        <Carousel3 
            cards={data}
            location={location}
            classPanel="" 
            classContainer="pt-[140px]" 
            classItemCon="w-[396px] min-w-[295px] h-[384px]"
            classFirstItem="lg:mt-[31px] lg:ml-0 ml-[300px]"
            classLastItem="lg:mt-[31px] lg:mr-0 mr-[300px]"
            classCardItem=""
            designe={designe} 
        />
    </div>   
    <div class="hidden lg:block mt-[63px]">
        <div class="grid gap-[25px] grid-cols-4 grid-rows-2">
            {#each data as item, n}
                <svelte:component this={designe} item={item}/>
            {/each}
        </div>
    </div>

    <div class="relative m-auto mt-[72px] max-w-[852px] text-center text-white 
    text-[19px] font-normal lg:font-light font-['Inter']">
        <span class="hidden lg:block w-[852px]">{@html $_('sections.ourTeamSection.dec2')}</span>
        <span class="block lg:hidden pl-[30px] pr-[30px]">{@html $_('sections.ourTeamSection.dec2Mobile')}</span>
    </div>

</GeneralPanel>
