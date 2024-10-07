<script>
    import { _, locale } from 'svelte-i18n';
    import { register } from 'swiper/element/bundle';
    import GeneralPanel from '../../Panels/GeneralPanel.svelte';
    import BlogCard from '../../../components/common/BlogCard.svelte';

    export let articles = [];
    /*
    const TestBlogData = [
		{
			date_created:"14.11.2023",
			time_to_read:"5",
			title:"Test Title",
			slug:"test",
			image:{
				id:0
			}
		}
	]*/

</script>

<GeneralPanel 
	headerOne={$_('sections.blogSection.headerOne')}
 	headerSecond="{$_('sections.blogSection.headerSecond')}"
  	classNames="lg:mt-[170px] mt-[80px]">
      <div class="flex lg:flex-row flex-col justify-between items-center mt-0 lg:mt-20">
        {#each articles as blog}
                <BlogCard
                    image={blog.image.id}
                    date={blog.date_created}
                    timeToRead={blog.time_to_read}
                    title={blog.title}
                    slug={blog.slug}
                    className="text-white lg:mt-0 mt-[52px]"
                />
            {/each}
    </div>
      
</GeneralPanel>