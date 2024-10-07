<script>
	import { _ } from 'svelte-i18n';
	import ConnectIcons from './ConnectIcons.svelte';
	import GoogleRating from './GoogleRating.svelte';

	import messenger from '$lib/assets/img/messenger.svg';
	import messengerAlt from '$lib/assets/img/messenger-alt.svg';
	import telegram from '$lib/assets/img/telegram.svg';
	import telegramAlt from '$lib/assets/img/telegram-alt.svg';
	import skype from '$lib/assets/img/skype.svg';
	import skypeAlt from '$lib/assets/img/skype-alt.svg';
	import linkedin from '$lib/assets/img/linkedin.svg';
	import linkedinAlt from '$lib/assets/img/linkedin-alt.svg';
	import whatsapp from '$lib/assets/img/whatsapp.svg';
	import whatsappAlt from '$lib/assets/img/whatsapp-alt.svg';

	import footer_techsy from '$lib/assets/img/footer_techsy.svg';
	import marketingAstronaut from '$lib/assets/img/marketing-astronaut.webp';


	import Fa from 'svelte-fa'
	import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

	export let ast = false;


</script>

<footer class="bg-white relative bottom-0 text-center font-normal" style="position: relative;z-index: 3;">
	<div
		class="container mx-auto flex flex-col lg:flex-row justify-between py-14 text-xs xl:text-base pl-0 pr-0"
	>
		<div class="flex flex-col gap-7 items-center lg:items-start mb-5 lg:mb-0">
			<div class="flex flex-row">
				<img src={footer_techsy} alt="footer techsy logo" width="161" height="45" />
				<div class="lg:block hidden">
					<GoogleRating textColor="black" className="ml-[34px] "/>
				</div>
			</div>
			<div class="text-bgDarkBlue flex flex-col lg:flex-row">

				<div class="flex flex-row justify-center">
					<div class="fa-solid fa-location-dot text-red-600 mr-2">
						<Fa icon={faLocationDot} size="lg"/>
					</div>
					<div>
						Narva mnt 5, Tallinn, EE, 10117
					</div>
				</div>
				<div class="flex flex-row lg:ml-2">
					<div  class="fa-solid fa-location-dot text-red-600 mr-2">
						<Fa icon={faLocationDot} size="lg"/>
					</div>
					<div>
						11 Marshalsea Road, London, UK, SE11EN
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col lg:gap-7 items-center lg:items-end mt-4 lg:mt-0">
			<div class="lg:hidden block">
				<GoogleRating textColor="black" className="mb-2"/>
			</div>
			<div class="flex flex-row items-center socials gap-[0.625rem] h-[45px]">
				{#if ast}
					<div class="relative self-end h-[333px] w-[150px] hidden xl:block">
						<img class="absolute bottom-0 right-[-30px]" alt="astaronot" src={marketingAstronaut} />
					</div>
				{/if}
				<ConnectIcons
					link="https://m.me/105254985840067"
					icon={messenger}
					altIcon={messengerAlt}
					alt="messenger"
				/>
				<ConnectIcons
					link="https://t.me/+gAwWx0bHJ8AzOTBk"
					icon={telegram}
					altIcon={telegramAlt}
					alt="telegram icon"
				/>
				<ConnectIcons
					link="https://join.skype.com/invite/oBvtNinmL9j5/"
					icon={skype}
					altIcon={skypeAlt}
					alt="skype icon"
				/>
				<ConnectIcons
					link="https://linkedin.com/companies/techsy"
					icon={linkedin}
					altIcon={linkedinAlt}
					alt="linkedin icon"
				/>
				<ConnectIcons
					link="https://wa.me/message/T6KGDAAAADHYJ1"
					icon={whatsapp}
					altIcon={whatsappAlt}
					alt="whatsapp icon"
				/>
			</div>
			<div class="text-Grey flex flex-col lg:flex-row mt-5 lg:mt-0 font-normal">
				<div>2023 Techsy ltd. {$_('all_rights')}&nbsp;</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">

</style>
