import { writable } from 'svelte/store';

export const rootNote = writable('C');
export const mode = writable('0,1,4,5,7,8,10');
export const style = writable('notes');
export const instrument = writable('guitar');