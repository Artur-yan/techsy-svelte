<script>
	import DoubleRow from '../../common/RectangularCards/DoubleRow.svelte';

    import Web_dev_logo from '$lib/assets/img/web_dev_logo.svg';
	import mob_dev_logo from '$lib/assets/img/mob_dev_logo.svg';
	import custom_soft_logo from '$lib/assets/img/custom_soft_logo.svg';
	import UXUI_logo from '$lib/assets/img/UX-UI_logo.svg';
	import maintenance from '$lib/assets/img/maintenance.svg';
	import marketing_sales_logo from '$lib/assets/img/marketing_sales_logo.svg';

    const svgs = [
		Web_dev_logo,
		mob_dev_logo,
		custom_soft_logo,
		UXUI_logo,
		maintenance,
		marketing_sales_logo
	];

    const location= "sections.followingSection";


</script>

<DoubleRow 
	svgs={svgs} 
	location={location} 
	classDescription={"!max-w-[1020px]"}
	readMores={[
		{
			index:1,
			go:"[page=webdev]",
			colorTextAndArrow:"#00A3FF"
		},
		{
			index:2,
			go:"[page=mobdev]",
			colorTextAndArrow:"#00A3FF"
		},
		{
			index:6,
			go:"[page=marketing]",
			colorTextAndArrow:"#00A3FF"
		}
	]}
	/>
