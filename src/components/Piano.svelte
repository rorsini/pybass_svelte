<script>
    import { getColor } from "../lib/Utils.js";

    export let displayInstrument;
    export let displayStyle;
    export let displayRoot;
    export let displayMode;
    export let fretboardTitle;

    export let scale = displayMode;

    let scale_index;

    var chord_tones = [];
    for (scale_index in scale) {
        chord_tones[scale_index] = scale[scale_index];
        /*
        //Only show chord tones (1,3,5,7):
        if (scale_index % 2 != 0) {
            continue;
        } else {
            chord_tones[scale_index] = scale[scale_index];
        }
    */
    }
    // scale = chord_tones;

    console.log("displayStyle:");
    console.log(displayStyle);
    chord_tones = [];
    for (scale_index in scale) {
        if (displayStyle === "chord") {
            //Only show chord tones (1,3,5,7):
            if (scale_index % 2 !== 0) {
                continue;
            } else {
                chord_tones[scale_index] = scale[scale_index];
            }
        } else {
            chord_tones[scale_index] = scale[scale_index];
        }
    }
    console.log('chord_tones:');
    console.log(chord_tones);
    
    scale = chord_tones;

    var xOffSet = 40;
    var yOffSet = 40;

    console.log("RJO - getColor('C', scale):");
    console.log(getColor('C', scale));
    
</script>

<h1 class="is-size-3">Piano</h1>

<svg
  height="200" 
  width="500"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="overflow: hidden; position: relative;">
    <g>
        <rect x="{xOffSet + 0}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('C', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 20}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('D', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 40}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('E', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 60}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('F', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 80}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('G', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 100}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('A', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 120}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('B', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 14}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['C#', 'Db'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 34}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['D#', 'Eb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 74}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['F#', 'Gb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 94}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['G#', 'Ab'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 114}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['A#', 'Bb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 140}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('C', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 160}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('D', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 180}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('E', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 200}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('F', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 220}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('G', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 240}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('A', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 260}" y="{yOffSet}" width="20" height="90" data-rjo="100"
            fill="{getColor('B', scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 154}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['C#', 'Db'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 174}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['D#', 'Eb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 214}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['F#', 'Gb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 234}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['G#', 'Ab'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 254}" y="{yOffSet}" width="12" height="70" data-rjo="100"
            fill="{getColor(['A#', 'Bb'], scale)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
    </g>
</svg>
