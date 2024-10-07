<script>
	import Analytics from '$lib/analytics.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import '../styles/app.postcss';
	/*import '../styles/fonts.css';*/
	/*import '@fortawesome/fontawesome-free/css/all.css';*/
	import { navigating } from '$app/stores';
	import { langBtnDisable, colorLogo } from '../store/stores';
	import { page } from '$app/stores';


	$: if($navigating) {langBtnDisable.set(false);}
	$: if(($colorLogo && $page.route.id != '/[[locale]]/blog/[slug]') && 
	($colorLogo && $page.route.id != '/[[locale]]/blog')) {colorLogo.set("white")}
	
</script>



<Navbar />
<main>
	<slot />
</main>
<Analytics />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
</style>
