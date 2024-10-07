import { goto } from '$app/navigation';
import { locale } from 'svelte-i18n';
import { colorLogo } from '../store/stores';
import {get} from 'svelte/store'
import navigationData  from './locales/navigation.json';


export function handleLocaleChange($page, language) {
    locale.set(language);
    
    /*
     *  If lang btn is called from blog content, its behavior changes.
     *  To see behavior open: [[locale]]/blog/[slug] -> +page.svelte
     *  If lang btn is called outside blog content, the following block will run
    */

    
    if($page.route.id != '/[[locale]]/blog/[slug]'){

        if(($page.route.id).indexOf('/[[locale]]/') != -1){
            let languageF = language.split("-")[0];
            let changed = "" ;
            const pageSlug = $page.route.id.split("/")[2];

      
            if(languageF == "et") {
                changed = "";
                goto(`/${navigationData[pageSlug][language]}`);
            } else {
                changed = languageF;
                goto(`/${changed}/${navigationData[pageSlug][language]}`);
            }
        }
        else if($page.route.id == '/[[locale]]'){
            console.log("main page");
            let languageF = language.split("-")[0];

            console.log("languageF",languageF);
            if(languageF == "et"){
                goto(`/`);
            }else{
                goto(`/${languageF}`);
            }
        }


    
        //console.log(`${pre}${newPath}`)
        /*
        if($page.route.id == '/[[locale]]' && language == "et"){
            changed = "/"
        }
        else if($page.route.id == '/[[locale]]' && language == "en"){
            changed = "/en"
        }
        else if($page.route.id != '/[[locale]]' && language == "en"){
            changed = "/en"
        }
        else if($page.route.id != '/[[locale]]' && language == "et"){
            changed = ""
        }

        goto($page.route.id.replace('/[[locale]]', changed));*/
    }
}

export function handleRouteChange($page, newPath) {
    colorLogo.set("white");
    const check =  $page.params.locale || "";
    let pre = "";
    if(check != ""){ 
        pre = '/'+check
    }
    goto(`${pre}${newPath}`);
}


export function changeFromRouteId(routeId) {
    let loc = "";
    if(get(locale) != "et-ET"){
        let languageF = get(locale).split("-")[0];
        loc="/"+languageF;
    }
    console.log(`${loc}/${navigationData[routeId][get(locale)]}`)
    goto(`${loc}/${navigationData[routeId][get(locale)]}`);
}