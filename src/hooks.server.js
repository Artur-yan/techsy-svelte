//import { locale } from 'svelte-i18n';

export const handle = async ({ event, resolve }) => {
	/*
	if (event.url.pathname == "/en") {
		locale.set("en");
	}else if(event.url.pathname == "/" || event.url.pathname == "/pricing"){
		locale.set("et");
	}
	*/
	return resolve(event);
};
