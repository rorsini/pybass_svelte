import { writable } from 'svelte/store';

export const note = writable('C');
export const mode = writable('0,2,4,5,7,9,11');
export const style = writable('notes');
export const instrument = writable('guitar');