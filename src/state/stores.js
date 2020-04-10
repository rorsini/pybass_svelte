import { writable } from 'svelte/store';

export const rootNote = writable('A');
export const mode = writable('0,1,4,5,7,8,10');
export const style = writable('notes'); // 'notes', 'chord', 'degrees'
export const instrument = writable('guitar');