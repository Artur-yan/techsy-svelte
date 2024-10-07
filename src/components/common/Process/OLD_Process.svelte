<script>
    import { _, locale } from 'svelte-i18n';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    let descriptionSecond = $_('landing_page.webdev.description4');

    /*
    import devpro1 from '$lib/assets/img/devpro1.svg';
	import devpro2 from '$lib/assets/img/devpro2.svg';
	import devpro3 from '$lib/assets/img/devpro3.svg';
    import devpro4 from '$lib/assets/img/devpro4.svg';
    import devpro5 from '$lib/assets/img/devpro5.svg';
    */

    import devpromob1 from '$lib/assets/img/devpromob1.svg';

    

    export let location = "";
    export let svgs = [];
    export let svgsMobie = [];
    
</script>


<GeneralPanel 
	headerOne={$_(`${location}.headerOne`)} 
	headerSecond={$_(`${location}.headerSecond`)}

	description={' '}
    description2={'landing_page.webdev.description4'}
	classNames="lg:mt-[170px] mt-[94px]">

    <div class="elementcontainer">
        <div class="box">
          <div class="sub-box-text"> <br/><br/>{$_(`${location}.data.0.desc`)}</div>
          <div class="sub-box-img"><img src={svgs[0]} alt="Collaboration pic"></div>
          <div class="sub-box-head"><br/>{$_(`${location}.data.0.head`)}</div>
        </div>
        <div class="box">
          <div class="sub-box-head">{$_(`${location}.data.1.head`)}<br/><br/></div>
          <div class="sub-box-img"><img src={svgs[1]} alt="Collaboration pic"></div>
          <div class="sub-box-text">{$_(`${location}.data.1.desc`)}</div>
        </div>
        <div class="box">
          <div class="sub-box-text"><br/><br/>{$_(`${location}.data.2.desc`)}</div>
          <div class="sub-box-img"><img src={svgs[2]} alt="Collaboration pic"></div>
          <div class="sub-box-head"><br/>{$_(`${location}.data.2.head`)}</div>
        </div>
        <div class="box">
          <div class="sub-box-head">{$_(`${location}.data.3.head`)}<br/><br/></div>
          <div class="sub-box-img"><img src={svgs[3]} alt="Collaboration pic"></div>
          <div class="sub-box-text">{$_(`${location}.data.3.desc`)}</div>
        </div>
        <div class="box">
          <div class="sub-box-text"><br/><br/>{$_(`${location}.data.4.desc`)}</div>
          <div class="sub-box-img"><img src={svgs[4]} alt="Collaboration pic"></div>
          <div class="sub-box-head"><br/>{$_(`${location}.data.4.head`)}</div>
        </div>
    </div>

    <div class="elementcontainerMobile justify-center grid">
        <div class="boxmob">
            <div class="half">
                <div class="sub-box-head-mob">{$_(`${location}.data.0.head`)}</div>
                <div class="sub-box-text-mob">{$_(`${location}.data.0.desc`)}</div>
                <div class="imgcontainermob right"><img src="{svgsMobie[0]}" alt="Collaboration pic"> </div>
            </div>
        </div>
        <div class="boxmob">
            <div class="half">
                <div class="sub-box-head-mob right">{$_(`${location}.data.1.head`)}</div>
                <div class="sub-box-text-mob right">{$_(`${location}.data.1.desc`)}</div>
                <div class="imgcontainermob left"><img src="{svgsMobie[1]}" alt="Collaboration pic"></div>
            </div>
        </div>
        <div class="boxmob">
            <div class="half">
                <div class="sub-box-head-mob">{$_(`${location}.data.2.head`)}</div>
                <div class="sub-box-text-mob">{$_(`${location}.data.2.desc`)}</div>
                <div class="imgcontainermob right"><img src="{svgsMobie[2]}" alt="Collaboration pic"></div>
            </div>
        </div>
        <div class="boxmob">
            <div class="half">
                <div class="sub-box-head-mob right">{$_(`${location}.data.3.head`)}</div>
                <div class="sub-box-text-mob right">{$_(`${location}.data.3.desc`)}</div>
                <div class="imgcontainermob left"><img src="{svgsMobie[3]}" alt="Collaboration pic"></div>
            </div>
        </div>
        <div class="boxmob">
            <div class="half">
                <div class="sub-box-head-mob mt-[20px]">{$_(`${location}.data.4.head`)}</div>
                <div class="sub-box-text-mob">{$_(`${location}.data.4.desc`)}</div>
                <div class="imgcontainermob right"><img src="{svgsMobie[4]}" alt="Collaboration pic"></div>
            </div>
        </div>
    </div>
</GeneralPanel>
    <style>
    
        .elementcontainer {
            display: flex;
            height: 30rem;
            width: 70rem;
            justify-content: center; /* Horizontally center */
            margin: auto; /* Center horizontally */
            padding-top: 40px;
            position: static;
            }

        @media (max-width: 1280px) {
            .elementcontainer {
                display: none;
            }
            }

        @media (min-width: 1280px) {
            .elementcontainerMobile {
                display: none;
            }
            }

        .box {
            flex: 1;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            }

        .sub-box-head {
            color: #FFF;
            text-align: center;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 600;
            line-height: 102%;
            }

        .sub-box-img {
            flex: 1;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: flex-end; /* Align to the right */
            }

        .sub-box-img img {
            max-width: 100%;
            max-height: 100%;
            }

        .sub-box-text {
            flex: 1;
            box-sizing: border-box;
            white-space: normal;
            color: white;
            padding: 10px 0;
            }

        .elementcontainerMobile {
            padding-top: 40px;
            }

        .boxmob {
            display: flex;
            padding: 10px;
            }

        .half {
            flex: 1;
            position: relative;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            height: 100px;
            max-width: 400px;
            }

        .half.right {
            justify-content: flex-end;
            }

        .sub-box-head-mob,
        .sub-box-text-mob {
            display: flex;
            color: #FFF;
            justify-content: left;
            text-align: left;
            }

        .sub-box-head-mob {
            padding-bottom: 5px;
            width: 220px;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 600;
            line-height: 102%;
            }

        .sub-box-text-mob {
            max-width: 249px;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 113.5%;
            padding-bottom: 10px;
            }

        .sub-box-head-mob.right,
        .sub-box-text-mob.right {
            margin-left: 92px;
            }

        .imgcontainermob {
            color: white;
            width: 75px;
            height: 75px;
            position: absolute;
            display: flex;
            justify-content: center;
            transform: translateY(20%);
            }

        .imgcontainermob img {
            max-width: 100%;
            max-height: 100%;
            }

        .imgcontainermob.right {
            right: -5%;
            }

        .imgcontainermob.left {
            left: 0;
            }

      </style>

    
