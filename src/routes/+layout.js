import { Init } from '$lib/i18n.js';
import { error } from '@sveltejs/kit';


export async function load({params}) {

    //Convert "" -> "et-ET", "en" -> "en-US"

    let defaultLocale = "";
    if(params.locale == null){defaultLocale = "et-ET"}else if(params.locale == "en"){defaultLocale = "en-US"}
    if(defaultLocale == "et-ET" ||  defaultLocale == "en-US"){
        await Init(defaultLocale); 
        return;
    }

    throw error(404, 'Not found');


    /*
    let defaultLocale = "en"
    if (params.url.pathname == "/en") {
        defaultLocale = "en";
    }else if(params.url.pathname == "/" || params.url.pathname == "/pricing"){
        defaultLocale = "et";
    }*/

    
}
