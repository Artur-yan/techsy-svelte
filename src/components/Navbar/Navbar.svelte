<script>
	import Button from '../common/Button.svelte';
	import Dropdown from '../common/Dropdown.svelte';
	import { goto } from '$app/navigation';
	import { _, locale } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { scrollPosition, currentStepValue, langBtnDisable, colorLogo } from '../../store/stores';
	import MobileMenu from './MobileMenu.svelte';
	import {handleLocaleChange, handleRouteChange } from '../../lib/navigate';
	import { onMount  } from 'svelte'
	import Logo from '../../svgs/logo.svelte'
	import Mob from '../../svgs/mobNav.svelte'
	import { faGlobe } from '@fortawesome/free-solid-svg-icons'



	$: currentLocale = $locale;

	

	let checked = '';
	let drawerContent;
	function handleClick() {
		checked == 'checked' ? (checked = '') : (checked = 'checked');
	}

	function handleScrollToTop() {
		/*
		if ($page.route.id.startsWith('/[locale]/blog') && drawerContent) {
			drawerContent.scrollTo({ top: 0 });
		}*/
	}

	$: $page.url.pathname, handleScrollToTop();

	
	let colorlogo = "white";
	colorLogo.subscribe((value) => {
		colorlogo = value;
	});

	let showMobileMenu = false;

	$: disableLang = false;

	langBtnDisable.subscribe((value) => {
		//console.log("langBtnDisable",value)
		disableLang = value;
	}); 


	let hideScroll = () =>{};
    let showScroll =  () =>{};
	onMount(() => {
	
		hideScroll = () =>{
			const body = document.querySelector("body"); 
			body.style.overflow = "hidden"; 
		}

		showScroll = () =>{
			const body = document.querySelector("body"); 
			body.style.overflow = "auto"; 
		}
	})

	$: if (showMobileMenu == true) {
		hideScroll();
	}
	$: if (showMobileMenu == false) {
		showScroll();
	}


</script>

{#if showMobileMenu}
<MobileMenu  on:close={() => {showMobileMenu = !showMobileMenu}} disableLang={disableLang}/>
{/if}

<div class="absolute top-0 w-screen">
	<div class="relative">
		<div class="container nav pl-[25px] lg:p-0 mt-[34px] m-auto w-full min-h-[57px]">
			<a href={`/${$page.params.locale || ""}`} aria-label="home" class="navLogo">
				<!--<img src="/img/nav_techsy_logo.svg" alt="home" />-->
				<Logo color={colorlogo}/>

			</a>
			<div class="navLinks mt-2 lg:flex hidden">
	
				<!--
				<Button                
					label={$_('navbar.marketing')}
					onClick={() => {
						currentStepValue.set(0);
						handleRouteChange($page,(currentLocale == 'en-US' ? '/marketing' : '/turundusteenused'));
					}}
					type={$page.route.id === '/[[locale]]/[page=marketing]'
					? "btn-link-type-active"
					: "btn-link-type"}
					className="mr-5"
				/>-->

					
				<Dropdown
					className="mr-5"
				/>

				<Button
					label={$_('navbar.blog')}
					onClick={() => {
						currentStepValue.set(0);
						handleRouteChange($page,'/blog');
					}}
					type={$page.route.id === '/[[locale]]/blog'
					? "btn-link-type-active"
					: "btn-link-type"}
					className="mr-5"
				/>

				<Button
					label={$_('navbar.about')}
					onClick={() => {
						currentStepValue.set(0);
						handleRouteChange($page,(currentLocale == 'en-US' ? '/about-us' : '/meist'));
					}}
					type={$page.route.id === '/[[locale]]/[page=about]'
					? "btn-link-type-active"
					: "btn-link-type"}
					className="mr-5"
				/>

			
				
				<Button
					label={$_('navbar.contact')}
					onClick={() => {
						currentStepValue.set(0);
						handleRouteChange($page,(currentLocale == 'en-US' ? '/contact' : '/kontakt'));
					}}
					type={$page.route.id === '/[[locale]]/[page=contact]'
					? "btn-link-type-active"
					: "btn-link-type"}
					className="mr-5"
				/>
				
				<!--
				<Button
					label={'Services'}
					onClick={() => {
						currentStepValue.set(0);
						handleRouteChange('/pricing');
					}}
					type={$page.route.id === '/[locale]/pricing'
					? "button.linkTypeActive"
					: "btn-link-type"}
					className="mr-5"
				/>
				-->
				<Button
					disable={disableLang}
					label={currentLocale == 'en-US' ? 'ET' : 'EN'}
					iconLeft={faGlobe}
					type={currentLocale === 'en-US'
					? "btn-link-type"
					: "btn-link-type"}
					onClick={() => {handleLocaleChange($page,currentLocale === 'en-US' ? "et-ET" : 'en-US')}}
				/>
			</div>
			<div class="navLinks mt-2 lg:hidden">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<label for="my-drawer-3" 
					class="absolute top-6 right-5 cursor-pointer"
					on:click={()=>{showMobileMenu = !showMobileMenu}}>
					<!--<img src="/img/mob-nav-logo.svg" id="mob-nav-x" alt="mob-nav-x" />-->
					<Mob color={colorlogo}/>
				</label>
			</div>
		</div>
	</div>
</div>


<style class="postcss">

	.nav{
		position: relative;
		z-index: 999;
		overflow: hidden;
	}

	.navLogo{
		float: left;
	}

	.navLinks{
		float: right;
	}
	
	:global(.menu) {
		/*box-shadow: var(--drawer-open);*/
		transition: all 250ms cubic-bezier(0.03, -0.17, 0.07, 1.77);
	}

</style>
