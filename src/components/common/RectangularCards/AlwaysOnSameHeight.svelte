<script>
    import { _, locale } from 'svelte-i18n';
    import CardFollowin from './Card.svelte';


    export let svgs = [];
    export let location = "";
    export let lenght = 0;

    let cardsComponents = [];
    let cardsInfo = [];
    const upDateVal = () => {
		cardsInfo = [];
		for (let index = 0; index < lenght; index++) {
			cardsInfo.push(
			{
                title: $_(`${location}.data.${index}.title`),
                text: $_(`${location}.data.${index}.text`),
                icon:svgs[index],
                iconAlt: "web development logo"

            })
		}
    }
    upDateVal();
    $: $locale, upDateVal();

	let parentDiv = null;

    const closeOther = (i) => {
        cardsComponents.forEach((element,index) => {
            if(index != i){
                element.closeCon();
            }
        });
       
    }

</script>

<div bind:this={parentDiv} class="xl:block hidden h-[250px]" style="position: relative;">

    <div class="xl:block hidden" style="position:relative">
        <div class="xl:flex hidden xl:flex-row flex-col justify-center items-stretch 
        gap-[20px] mt-[66px]">
            {#each cardsInfo as info, i}
                <!-- Bind easily to a variable in an array -->
                <CardFollowin  
                    sameHight={true}
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
</div>

<div bind:this={parentDiv} class="xl:h-[110px] h-[500px]" style="position: relative;">
    <div style="position:absulute">
        <div class="xl:hidden flex xl:flex-row flex-col justify-center items-stretch 
        gap-[20px] mt-[66px]">
            {#each cardsInfo as info, i}
                <!-- Bind easily to a variable in an array -->
                <CardFollowin  
                    sameHight={true}
                    alwaysOn={false}
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
</div>