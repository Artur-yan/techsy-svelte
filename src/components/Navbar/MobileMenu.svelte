<script>
    import Button from '../common/Button.svelte';
	import { page } from '$app/stores';
	import { _, locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { fly, fade, slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import {handleLocaleChange, handleRouteChange } from '../../lib/navigate';
	import { quintOut, quintIn, bounceInOut, elasticOut } from 'svelte/easing';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons'
	import DropdownMobile from './DropdownMobile.svelte'


	//import * as testt from "../../twdPlugin/button.cjs"
	
	const dispatch = createEventDispatcher();

	export let disableLang = false;

	$: currentLocale = $locale;

	let checked = '';
	let drawerContent;
	function handleClick() {
		checked == 'checked' ? (checked = '') : (checked = 'checked');
	}

</script>
<div class="absolute top-0 w-screen h-[600px]">
	<div class="relative overflow-hidden h-[600px]">
		<div
		class="navSlide bg-techsyRed overflow-hidden">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<label for="my-drawer-3" 
				on:click={()=>{dispatch("close")}}
				class="absolute top-6 right-5 cursor-pointer">
				<img src="/img/mob-nav-x.svg" 
					id="mob-nav-x" 
					alt="mob-nav-x" />
			</label>
			<div class="flex flex-col justify-center items-center mt-[60px] ">
				<!--
				<Button
					label={$_('home')}
					type={"btn-m-link-type"}
					onClick={() => {
						handleRouteChange($page,'/');
						handleClick();
						dispatch("close")
					}}
					style="margin-bottom:10px; text-align:left; display:block;"
				/>
				<Button
					label={$_('navbar.marketing')}
					type={"btn-m-link-type"}
					onClick={() => {
						handleRouteChange($page,(currentLocale == 'en-US' ? '/marketing' : '/turundusteenused'));
						handleClick();
						dispatch("close")
					}}
					style="margin-bottom:10px; text-align:left; display:block;"
				/>-->

				

				<DropdownMobile on:close={()=>{
					handleClick();
					dispatch("close");
				}}/>

				<Button
					label={$_('navbar.blog')}
					type={"btn-m-link-type"}
					onClick={() => {
						handleRouteChange($page,'/blog');
						handleClick();
						dispatch("close")
					}}
					style="margin-bottom:10px; text-align:left; display:block;"
				/>
				<Button
					label={$_('navbar.about')}
					type={"btn-m-link-type"}
					onClick={() => {
						handleRouteChange($page,(currentLocale == 'en-US' ? '/about-us' : '/meist'));
						handleClick();
						dispatch("close")
					}}
					style="margin-bottom:10px; text-align:left; display:block;"
				/>
				<Button
					label={$_('navbar.contact')}
					type={"btn-m-link-type"}
					onClick={() => {
						handleRouteChange($page,(currentLocale == 'en-US' ? '/contact' : '/kontakt'));
						handleClick();
						dispatch("close")
					}}
					style="margin-bottom:10px; text-align:left; display:block;"
				/>
				
				<Button
					disable={disableLang}
					label={currentLocale == 'en-US' ? 'ET' : 'EN'}
					iconLeft={faGlobe}
					type={"btn-m-link-type"}
					onClick={() => {
						handleLocaleChange($page,currentLocale === 'en-US' ? "et-ET" : 'en-US');
						handleClick();
						dispatch("close")
					}}
					style="text-align:left; display:block; margin-bottom:25px;"
				/>
			</div>
		</div>
	</div>
</div>	
<!--Background-->
<div class="fixed h-[100vh] w-[100vw] z-[999] bg-[#0000004d]" />

<style class="postcss">
	@keyframes bounceInLeft {
		0% {
			transform: translateX(200px);
		}
		50% {
			transform: translateX(-30px);
		}
		80% {
			transform: translateX(0);
		}
		90% {
			transform: translateX(5px);
		}
		100% {
			transform: translateX(0);
		}
		}
	.navSlide{
		z-index: 999999;
		position: absolute;
		float: right;
		right: 0;
		top: 0;
		min-height: 386px;
		/*height: 386px;*/
		width: 248px;
		box-shadow: -10px 10px #00000023;
		background: linear-gradient(0deg, rgba(4,32,66,1) 0%, rgba(222,60,75,1) 100%);
		border-radius: 20px 0px 0px 20px;

		
		-webkit-animation-name: bounceInLeft;
		animation-name: bounceInLeft;
		-webkit-animation-duration: 0.4s; 
		animation-duration: 0.4s; 
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both; 
		
	}
	
</style>