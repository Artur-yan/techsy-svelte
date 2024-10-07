import { createClient, fetchExchange } from '@urql/svelte';
import { GET_HOMEPAGE_BLOGS, GET_BLOG, GET_FEATURED_BLOG, GET_CONTENT, GET_ALL_BLOGS } from './blogs';
import { PUBLIC_API_URL } from '$env/static/public'



const convert = (res) => {

	let newList = res.data.articles.map((el) => {
		el = {...el, ...el.translations[0]};
		delete el.translations;
		return el;

	});

	return newList;
}


const databaseInit = () =>{

    const client = createClient({
		url: PUBLIC_API_URL+'/graphql',
		fetch,
		exchanges: [fetchExchange]
	});

    return client;

}


export const getArticlesForHome = async (lang) =>{

    const featuredBlog = await databaseInit()
		.query(GET_HOMEPAGE_BLOGS, { language: lang})
		.toPromise();

    return convert(await featuredBlog);

}


export const getArticleFromSlug = async (slug, lang) =>{

    const information = await databaseInit()
		.query(GET_BLOG, { slug: slug, language:lang})
		.toPromise();

	let newList = await information.data.articles.map((el) => {
		el = {...el, ...el.translations.find(x => x.slug == slug)};
		el.translations;
		return el;

	});

	const content = await databaseInit()
		.query(GET_CONTENT, { slug: slug, language:lang})
		.toPromise();

    return {
		information:newList[0],
		content: await content.data.articles[0].translations[0].content
	}
}


export const getArticlesForBlog = async (lang) =>{

	var client = await databaseInit();
    const blogs = client
		.query(GET_ALL_BLOGS, { language: lang})
		.toPromise();
  	
	
	//console.log(convert(await blogs))
		
	
	const featuredBlog = await client
		.query(GET_FEATURED_BLOG, { language: lang})
		.toPromise();

	//console.log(convert(await featuredBlog))
		
	return {
		articles: convert(await blogs),
		featuredBlog: convert(await featuredBlog)[0]
	}
	
}