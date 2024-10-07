<script>
	import { fly, fade, slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { createEventDispatcher, onMount  } from 'svelte'
    const dispatch = createEventDispatcher()
    export let open = false
    export let type = 0;


    function fadeSlide2(node, options) {
        const duration = 90;
        const flyTrans = fly(node, { delay: 0, duration: duration, y: 500, opacity: 0.5 })
		return {
			duration: duration,
			css: t => `
                ${flyTrans.css(t)}
			`
		};
    }


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

    $: if (open == true) {
        hideScroll();
    }
    $: if (open == false) {
        showScroll();
        dispatch('close')
    }

</script>

{#if open}
<div class="modal" style="--sizeTopModal:{type == 0 ? 14: 10}vh">
    <div transition:fadeSlide2
    class="modal-box" 
        style="display: block;">
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        
        <label class="group cursor-pointer my-x z-[99999]" on:click={()=>{open = false;}}>
			<img
				src="/img/grey_triangle.svg"
				class="w-32 absolute right-0 top-0 triangle opacity-0 group-hover:opacity-100 z-[99999]"
				alt="gray background with triangle shape"
			/>
			<img
				class="group absolute text-xl right-6 top-6 
                group-hover:rotate-[-90deg] 
                transition duration-300
                z-[99999]"
				width="22px"
				height="22px"
				src="/img/close.png"
				alt="closeModal"
			/>
		</label>
      
        <div class="container p-0" style="margin-top: 25px;">
			<slot/>
		</div>
    </div>
</div>
{/if}

<style lang="postcss">
	.modal {
        pointer-events: all !important;
		visibility: unset !important;
        opacity: 1 !important;
        display: block;
	}
    .modal::-webkit-scrollbar {
		display: none !important;
	}
    .modal-box::-webkit-scrollbar {
		display: none !important;
	}
    
    @media (min-width: 768px) { 

        .modal-box {
            max-width: 680px;
            overflow-x: hidden;
            position: fixed;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%) translateZ(0) perspective(1px);
            margin: auto !important;
            height: auto;
            z-index: 99999;
            background-color: white;
            backface-visibility: hidden;
            -webkit-font-smoothing: subpixel-antialiased
        }
    }
    @media (max-width: 768px) { 
       
        /*var(--sizeTopModal); cal(100vh - var(--sizeTopModal))*/
        .modal-box {
            width:100%;
            height: calc(100vh - var(--sizeTopModal)) !important;
            overflow-x: hidden;
            position: fixed;
            top: var(--sizeTopModal);
            left:50%;
            padding-bottom: 50px;
            /*transform: translate(-50%,-50%);*/
            transform: translateX(-50%) translateZ(0) perspective(1px);
            backface-visibility: hidden;
            /*,-50%);*/
            margin: auto !important;
            z-index: 99999;
            background-color: white;
            max-height: 100vh !important;
            border-top-left-radius: 25px !important;
            border-top-right-radius: 25px !important;

            border-bottom-left-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            -webkit-font-smoothing: subpixel-antialiased
        }
    }

</style>
