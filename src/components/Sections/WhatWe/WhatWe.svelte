<script>
	import DoubleRow from '../../common/RectangularCards/DoubleRow.svelte';

    import google_ads from '$lib/assets/img/google-ads.svg';
	import wordOrange from '$lib/assets/img/wordOrange.svg';
	import facebookRed from '$lib/assets/img/facebookRed.svg';
	import seoPink from '$lib/assets/img/seoPink.svg';
	import emailGreen from '$lib/assets/img/emailGreen.svg';
	import eyePurple from '$lib/assets/img/eyePurple.svg';

    const svgs = [
		google_ads,
		wordOrange,
		facebookRed,
		seoPink,
		emailGreen,
		eyePurple
	];

    const location= "sections.whatWeSection";


</script>

<DoubleRow  svgs={svgs} location={location}/>