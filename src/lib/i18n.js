import { init, register, waitLocale } from 'svelte-i18n';

export async function Init(lang){

	register('en-US', () => import('../lib/locales/en-US.json'));
    register('et-ET', () => import('../lib/locales/et-ET.json'));

	init({
		fallbackLocale: lang,
		initialLocale: lang,
	});

	await waitLocale();
}