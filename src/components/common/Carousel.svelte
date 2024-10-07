<script>

    let dots = [];

    const scrollEvent = (e) =>{
        //5,15,25
        console.log(e.target.offsetWidth)
        console.log(e.target.scrollLeft);
        let position = 1;
        const numberItems = 3;
        if( e.target.scrollLeft < e.target.offsetWidth){
            dots[0].style.width = "38.18px";
            dots[1].style.width = "11.75px";
            dots[2].style.width = "11.75px";

            dots[0].style.backgroundColor = "#FFA115"
            dots[1].style.backgroundColor = 'white';
            dots[2].style.backgroundColor = 'white';
        }
        else if(e.target.scrollLeft < (e.target.offsetWidth * 2)){
            dots[0].style.width = "11.75px";
            dots[1].style.width = "38.18px";
            dots[2].style.width = "11.75px";

            dots[0].style.backgroundColor = 'white';
            dots[1].style.backgroundColor = "#DA3BDE";
            dots[2].style.backgroundColor = 'white';
        }
        else if(e.target.scrollLeft > (e.target.offsetWidth * 2)){
            dots[0].style.width = "11.75px";
            dots[1].style.width = "11.75px";
            dots[2].style.width = "38.18px";

            dots[0].style.backgroundColor = 'white';
            dots[1].style.backgroundColor = 'white';
            dots[2].style.backgroundColor = "#00A3FF"
        }
        console.log(position);
    }

    const drag = (slider) =>{
        let mouseDown = false;
        let startX, scrollLeft;
        slider

        slider.addEventListener('mousedown', (e) => {
			mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.classList.remove("snap-x");
            //console.log("Mouse down")
        });
        window.addEventListener('mouseup', (e) => {
            mouseDown = false;
            slider.classList.add('snap-x');
            //console.log("Mouse mouseup")
        });

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            //console.log("Mouse mousemove")
            if(!mouseDown) { return; }
            console.log("Moveeee")
            console.log(e.pageX)
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        })
    }



</script>
<div use:drag class="carousel-container snap-mandatory snap-x" on:scroll={scrollEvent}>
    <div class="carousel-slide">
        <div class="carousel-item item1">
            <slot name="item1"></slot>
        </div>
    </div>
    <div class="carousel-slide">
        <div class="carousel-item item2">
            <slot name="item2"></slot>
        </div>
    </div>
    <div class="carousel-slide">
        <div class="carousel-item item3">
            <slot name="item3"></slot>
        </div>
    </div>
</div>
<div class="dots-container">
    <div class="w-[79.29px] h-3 justify-center items-start gap-[9.79px] inline-flex">
        <div bind:this={dots[0]} class="w-[38.18px] h-3 bg-amber-500 rounded-[10px] border border-white"></div>
        <div bind:this={dots[1]} class="w-[11.75px] h-3 rounded-[10px] border border-white"></div>
        <div bind:this={dots[2]} class="w-[11.75px] h-3 rounded-[10px] border border-white"></div>
    </div>
</div>

<style class="postcss">
    .carousel-container {
        
        display: flex;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */

    }
    .carousel-container::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
    .carousel-slide {
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        min-width: 100%;
        padding: 10px;
        /*background-color: #bae;*/
        margin-right: 5px;
        margin-left: 5px;
 
    }
    .carousel-item {
        scroll-snap-align: none;
        /*background-color: black;*/
        background-size: contain;
        background-repeat: no-repeat;
        width: 367px;
        height: 456px;
    }

    .item1{
        /*background-image: url("../img/mobileWhy-Orange.svg");*/
    }

    .item2{
        /*background-image: url("../img/mobileWhy-Purple.svg");*/
    }
    .item3{
        /*background-image: url("../img/mobileWhy-Blue.svg");*/
    }


    .dots-container {
        min-width: 100%;
        /*background-color: aqua;*/
        margin-top: 21px;
    }

</style>
