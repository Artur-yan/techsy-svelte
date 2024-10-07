import { redirect } from '@sveltejs/kit';


const redirects = {
	'/et': '/',
  };
  

export async function load(params) {
	
	const { pathname } = params.url;

	if (redirects[pathname]) {
		throw redirect(308, redirects[pathname]);
	}
	
	return 
}
