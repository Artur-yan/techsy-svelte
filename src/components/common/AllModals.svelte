<script>
    import DiscussProjectModal from '../Sections/HeroSection/DiscussProjectModal.svelte';
    import { discus_modal, calendly_modal } from '../../store/stores';
    import Modal from './Modal.svelte';
    import Clendly from './Clendly.svelte';

    /*
    discus_modal.subscribe((value) => {
        console.log(value);
    }); 
    */

    /*
    calendly_modal.subscribe((value) => {
        console.log(value);
    }); **/

    

    let isModalOpen  = false;
    let openFormModal = false;

        
    const closeFormModal = () => {
        isModalOpen  = false;
    }

</script>

<DiscussProjectModal openFormModal={$discus_modal} on:close={() => {discus_modal.set(false)}}/>

<Modal open={$calendly_modal} on:close={() => {calendly_modal.set(false)}}>
    <Clendly />
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
 </Modal>
