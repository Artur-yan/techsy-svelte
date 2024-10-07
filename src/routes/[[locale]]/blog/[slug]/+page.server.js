import { getArticleFromSlug } from '../../../../grqphql/database';

export async function load({ params }) {

	let defaultLocale = "";
    if(params.locale == null){defaultLocale = "et-ET"}else if(params.locale == "en"){defaultLocale = "en-US"}
	let result = await getArticleFromSlug(params.slug,defaultLocale);
 	return result

}
