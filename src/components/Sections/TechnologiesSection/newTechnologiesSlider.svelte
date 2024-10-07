<script>
    import { _, locale } from 'svelte-i18n';
    import { register } from 'swiper/element/bundle';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';

    register();
	const technologiesList = [
		{ src: '/img/vue.svg', alt: 'vue', label: 'Vue', tooltip: 'Vue (Frontend)' },
		{ src: '/img/react.svg', alt: 'react', label: 'React', tooltip: 'React (Frontend)' },
		{ src: '/img/angular.svg', alt: 'angular', label: 'Angular', tooltip: 'Angular (Frontend)' },
		{ src: '/img/svelte.svg', alt: 'svelte', label: 'Svelte', tooltip: 'Svelte (Frontend)' },
		{ src: '/img/php.svg', alt: 'php', label: 'PHP', tooltip: 'PHP (Backend)' },
		{ src: '/img/js.svg', alt: 'js', label: 'Node.js', tooltip: 'Node.js (FE & BE)' },
		{ src: '/img/python.svg', alt: 'python', label: 'Python', tooltip: 'Python (Backend)' },
		{ src: '/img/java.svg', alt: 'java', label: 'Java', tooltip: 'Java (Backend)' },
		{ src: '/img/flutter.svg', alt: 'flutter', label: 'Flutter', tooltip: 'Flutter (Mobile)' },
		{
			src: '/img/react.svg',
			alt: 'react-native',
			label: 'React Native',
			tooltip: 'React Native (Mobile)'
		},
		{ src: '/img/wp.svg', alt: 'wordpress', label: 'Wordpress', tooltip: 'Wordpress (CMS)' },
		{ src: '/img/magento.svg', alt: 'magento', label: 'Magento', tooltip: 'Magento (e-com CMS)' },
		{ src: '/img/directus.svg', alt: 'directus', label: 'Directus', tooltip: 'Directus (CMS)' },
		{ src: '/img/strapi.svg', alt: 'strapi', label: 'Strapi', tooltip: 'Strapi (CMS)' }
	];
</script>

<GeneralPanel 
	headerOne={$_('sections.followingSection.headerOne')}
 	headerSecond="{$_('sections.followingSection.headerSecond')}"
  	classNames="lg:mt-[170px] mt-[80px]">
    <swiper-container
        loop="true"
        autoplay-delay="0"
        speed="3000"
        slides-per-view="auto">
        {#each technologiesList as technology}
            <swiper-slide>
                <img src="{technology.src}" style="width:50px;">
            </swiper-slide>
        {/each}
    </swiper-container>
</GeneralPanel>

<style global>
   swiper-container::part(wrapper) {
        transition-timing-function:linear !important;
    }
    swiper-slide {
        width: 100px;
    }
    swiper-container{
        margin-top: 50px;
    }
</style>