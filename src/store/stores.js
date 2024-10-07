import { writable } from 'svelte/store';

export const name = writable('');
export const email = writable('');
export const phone = writable('');
export const projectDescription = writable('');
export const ndaProtection = writable('');
export const wouldYouLike = writable('');
export const firstQuestionAnswer = writable('');
export const secondQuestionAnswer = writable('');
export const thirdQuestionAnswer = writable([]);
export const fourthQuestionAnswer = writable('4');
export const scrollPosition = writable(0);
export const currentStepValue = writable(0);

export const langBtnDisable = writable(false);
export const colorLogo = writable('white');


export const discus_modal = writable(false);
export const calendly_modal = writable(false);

