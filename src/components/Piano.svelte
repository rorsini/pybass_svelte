<script>
    import { getPianoKeyColor } from "../lib/Utils.js";

    export let displayInstrument;
    export let displayStyle;
    export let displayRoot;
    export let displayMode;
    export let fretboardTitle;

    let mode = displayMode;
    if ( displayStyle == 'arpeggio' ) {
        mode = displayMode.split(",").filter((degree, index) => {
            if (index % 2 == 0) {
                return degree;
            }
        }).join(',');
    }
    const root = displayRoot;

    var xOffSet = 40;
    var yOffSet = 40;

</script>

<!-- <h1 class="is-size-3">Piano</h1> -->

<svg
  height="200" 
  width="500"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="overflow: hidden; position: relative;">
    <g>
        <rect x="{xOffSet + 0}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('C', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 20}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('D', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 40}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('E', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 60}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('F', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 80}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('G', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 100}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('A', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 120}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('B', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 14}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['C#', 'Db'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 34}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['D#', 'Eb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 74}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['F#', 'Gb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 94}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['G#', 'Ab'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 114}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['A#', 'Bb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 140}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('C', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 160}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('D', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 180}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('E', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 200}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('F', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 220}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('G', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 240}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('A', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 260}" y="{yOffSet}" width="20" height="90"
            fill="{getPianoKeyColor('B', root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>

        <rect x="{xOffSet + 154}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['C#', 'Db'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 174}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['D#', 'Eb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 214}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['F#', 'Gb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 234}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['G#', 'Ab'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
        <rect x="{xOffSet + 254}" y="{yOffSet}" width="12" height="70"
            fill="{getPianoKeyColor(['A#', 'Bb'], root, mode)}" stroke="#000" transform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
    </g>
</svg>
