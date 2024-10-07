// import { createClient, fetchExchange } from '@urql/svelte';
// import { GET_HOMEPAGE_BLOGS } from '../../grqphql/blogs';
import { getArticlesForHome } from '../../grqphql/database';

export const csr = true;
export async function load({params}) {

    //const lang = params.locale || "et";
	//console.log("LANGGG", lang);
    let defaultLocale = "";
    if(params.locale == null){defaultLocale = "et-ET"}else if(params.locale == "en"){defaultLocale = "en-US"}
 	let result = await getArticlesForHome(defaultLocale);

 	return {
        articles:result
    };
    
}
