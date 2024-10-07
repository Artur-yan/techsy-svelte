
<script>
	import { _ , locale } from 'svelte-i18n';
    import Fa from 'svelte-fa'
	import { faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons'

    let copyTooltipShow = '';
	function copyToClipboard(textToCopy, showTooltip) {
		navigator.clipboard.writeText(textToCopy);
		copyTooltipShow = showTooltip;
		setTimeout(() => {
			copyTooltipShow = '';
		}, 1500);
	} 


</script>

<div class="thanksModal">
    <div>
        <span class="figure_your_needs 
        font-poppins font-bold 
        text-3xl sm:text-2xl
        mt-5
        text-bgDarkBlue">
        {@html $_('thanks_intrest')}
        </span>
    </div>
    <img
        class="mt-5"
        src="..\img\thankyou-man.png"
        alt="thanks_logo"
        width="287"
        height="312"
      />
    <div class="flex justify-center mt-5">
        <span class="dot mr-4"></span>
        <span class="dot"></span>
    </div>
   
    <p class="thanksModalTextStyle font-inter font-normal text-bgDarkBlue mt-5">
        {$_('expert_contact')}
    </p>
    <div class="flex justify-center mt-5">
        <span class="dot mr-4"></span>
        <span class="dot"></span>
    </div>
    <p class="thanksModalTextStyle font-inter font-normal text-bgDarkBlue mt-5">
        {$_('required_nda')}
    </p>
    <div class="flex justify-center mt-5">
        <span class="dot mr-4"></span>
        <span class="dot"></span>
    </div>
    <p class="thanksModalTextStyle font-inter font-normal text-bgDarkBlue mt-5">
        {$_('pre_sale_manager')}
    </p>
     <div class="flex justify-center mt-5">
        <span class="dot mr-4"></span>
        <span class="dot"></span>
    </div>
    <p class="thanksModalTextStyle font-inter font-normal text-bgDarkBlue mt-5">
        {$_('team_assembled')}
    </p>
    <div class="flex flex-row mt-20 mb-20">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="relative cursor-pointer tooltip tooltip-open"
            data-tip={$_('phone_copied')}
            on:click={() => copyToClipboard('+372 5838 5679', 'phone')}
            style="--show-tooltip: {copyTooltipShow === 'phone' ? 'block' : 'none'}"
        >
            <div class="border-div delay-200 transition-all" />
            <div class="arrow-div delay-200 transition-all" />

            <!--
            <div class="fa-solid fa-mobile-screen-button text-Red">
                <Fa icon={faMobileScreenButton} size="lg"/>
            </div>
            <!--<i class="contact-icon " />-->
            <!--TODO do not use a tag !!-->

            <div class=" text-Red mr-1 flex flex-row">
                <div class="text-Red mr-1">
                    <Fa icon={faMobileScreenButton} size="lg"/>
                </div>
                <div>
                    <a class="text-zinc-800 
                        lg:text-base text-sm
                        font-normal 
                        font-['Inter']">+372 5838 5679</a>
                </div>
            </div>

          
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="relative cursor-pointer tooltip tooltip-open ml-5"
            data-tip={$_('email_copied')}
            on:click={() => copyToClipboard('business@techsy.io', 'email')}
            style="--show-tooltip: {copyTooltipShow === 'email' ? 'block' : 'none'}"
        >
            <div class="border-div delay-200 transition-all" />
            <div class="arrow-div delay-200 transition-all" />

            <div class=" text-Red mr-1 flex flex-row">
                <div class="text-Red mr-1">
                    <Fa icon={faEnvelope} size="lg"/>
                </div>
                <div>
                    <a class="text-zinc-800
                        lg:text-base text-sm
                        font-normal 
                        font-['Inter']">business@techsy.io</a>
                </div>
            </div>
            <!--<i class="contact-icon fa-solid fa-envelope text-Red mr-1" />-->
            <!--TODO do not use a tag !!-->
           
        </div>
    </div>
    
</div>

<style lang="postcss">
    .thanksModal {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.thanksModalTextStyle {
		font-size: 14px;
	}
    .tooltip:before {
		transform: translateX(-50);
		box-shadow: 3px 6px 2px 2px rgba(195, 202, 209, 0.2);
		border: 0.5px solid #c3cad1;
		bottom: -2rem;
		display: var(--show-tooltip);
		@apply px-5 pb-4 pt-3 bg-white font-inter text-Black font-normal text-xs;
	}

	@media (max-width: 640px) {
		.tooltip:before {
			@apply px-3 py-2;
		}
	}
	.tooltip::after {
		display: none;
	}
    .dot {
        height: 8px;
        width: 8px;
        background-color: rgba(222, 60, 75, 1);
        border-radius: 50%;
        display: inline-block;
    }
</style>