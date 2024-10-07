import { getArticlesForBlog } from '../../../grqphql/database';


export async function load({params}) {
	/*
	const client = createClient({
		url: 'https://directus.techsy.io/graphql',
		fetch,
		exchanges: [fetchExchange]
	});

	const featuredBlog = await client
		.query(GET_FEATURED_BLOG, { is_estonian: params?.locale === 'et' })
		.toPromise();
	const blogs = await client
		.query(GET_ALL_BLOG, { is_estonian: params?.locale === 'et' })
		.toPromise();
	return {
		featuredBlog: featuredBlog.data.blogs[0],
		blogs: blogs.data.blogs
	};
	*/
	//const lang = params.locale || "et";
	let defaultLocale = "";
    if(params.locale == null){defaultLocale = "et-ET"}else if(params.locale == "en"){defaultLocale = "en-US"}

	let result = await getArticlesForBlog(defaultLocale);
	//console.log("result", result);
	return result
	/*
 	return {
		blogs: result.articles.data.Article,
		featuredBlog: result.featuredBlog.data.Article.length > 0 ? result.featuredBlog.data.Article[0] : null
	}
	*/
	
}
