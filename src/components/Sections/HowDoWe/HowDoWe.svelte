<script>
    import { _, locale } from 'svelte-i18n';
    import Process from '../../common/Process/Process.svelte';
    import salesRed from '$lib/assets/img/salesRed.svg';
	import salesBlue from '$lib/assets/img/salesBlue.svg';
	import salesGreen from '$lib/assets/img/salesGreen.svg';
    import salesYellow from '$lib/assets/img/salesYellow.svg';
    import devpro5 from '$lib/assets/img/devpro5.svg';


    import salesRedMobile from '$lib/assets/img/salesRedMobile.svg';
	import salesBlueMobile from '$lib/assets/img/salesBlueMobile.svg';
	import salesGreenMobile from '$lib/assets/img/salesGreenMobile.svg';
    import salesYellowMobile from '$lib/assets/img/salesYellowMobile.svg';
    import salesPurpleMobile from '$lib/assets/img/salesPurpleMobile.svg';

    const svgs = [
        salesRed,
        salesBlue,
        salesGreen,
        salesYellow,
        devpro5
    ]

    /*
    "icon":"salesRed",
					"iconMobile":"salesRedMobile", 
                    */

    const svgsMobie = [
        salesRedMobile,
        salesBlueMobile,
        salesGreenMobile,
        salesYellowMobile,
        salesPurpleMobile
    ]

    const location= "sections.howDoWe";
    const lenght = 5;
    let proc = [];
    const upDateVal = () => {
		proc = [];
        let boolle = true;
		for (let index = 0; index < lenght; index++) {
			proc.push(
			{
                posReverse:boolle,
                leftPoint: $_(`${location}.data.${index}.leftPoint`),
                width: $_(`${location}.data.${index}.width`),
                
                icon:svgs[index],
                iconMobile:svgsMobie[index],

                desc:{
                    content:$_(`${location}.data.${index}.desc.content`),
                    contentMobile:$_(`${location}.data.${index}.desc.contentMobile`) 
                    == `${location}.data.${index}.desc.contentMobile` ? undefined : $_(`${location}.data.${index}.desc.contentMobile`) ,
                },

                header:{
                    content:$_(`${location}.data.${index}.header.content`),
                    contentMobile:$_(`${location}.data.${index}.header.contentMobile`) 
                    == `${location}.data.${index}.header.contentMobile` ? undefined : $_(`${location}.data.${index}.header.contentMobile`) ,

                }

            })
            boolle = !boolle;
		}
    }
  
    upDateVal();
    $: $locale, upDateVal();
</script>

<Process data={proc} location={location} />

