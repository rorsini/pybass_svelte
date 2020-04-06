<script>
    import Nut from "./Nut.svelte";
    import Note from "./Note.svelte";
    import Notes from "./Notes.svelte";
    import Background from "./Background.svelte";
    import Fret from "./Fret.svelte";
    import String from "./String.svelte";
    

    import { note, mode, style, instrument } from '../state/user';

    let fretboard_length = 1070;

    let fretboard_width;
    let numberOfStrings;

    if ($instrument === 'guitar') {
        fretboard_width = 152;
        numberOfStrings = 6;
    } else {
        fretboard_width = 100;
        numberOfStrings = 4;
    }


    const hPosOffset = (pos) => {
        return pos - 24;
    };

    const vPosOffset = (pos) => {
        return pos - 12;
    };

    const frets = [ 30, 114, 194, 269,
                    339, 406, 469, 529,
                    585, 638, 688, 735,
                    780, 822, 862, 899,
                    935, 968, 1000, 1029, 1058 ].map(hPosOffset);

    const strngs = [ 12.5, 37.5, 62.5, 87.5, 112.5, 137.5 ];

    function mapCoords(coords) {
        return [frets[coords[1]], strngs[coords[0]]];
    }

    let fbLength = fretboard_length;
    let fbWidth = fretboard_width;

    let string_spacing = fbWidth / 4;
    let totalFrets = 20;
    let distanceAboveNut = 30;
    let fretMarkerRadius = 7;
    let fretMarkerColor = '#000';
    let fretMarkerOpacity = '1';
    let position_color = 'green';
    let length = 1500;
    let thisStringSpacing = 12.5;

    
</script>

<svg
  height="{fretboard_length + 50}" 
  width="{fretboard_length}"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="overflow: hidden; position: relative;">

    <Background {fbLength} {fbWidth} />

    <Nut x={distanceAboveNut}
        y={0}
        width={5}
        height={fbWidth}
        {fbWidth} />

    {#each frets as fret, i}

        <Fret {length} {distanceAboveNut} {fbWidth} fretNum={i} />

    {/each}

    {#each strngs as string, i}

        <String {string} {thisStringSpacing} {fbLength} />

    {/each}
  
    <!-- fret dot -->
    <!-- <circle 
    cx="231.5" 
    cy="76" 
    r="7" 
    fill="#000000" 
    stroke="none" 
    transform="matrix(1,0,0,1,0,0)" 
    opacity="1" 
    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;" /> -->

    <Notes />

</svg>
