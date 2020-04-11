<script>
    export let displayInstrument;
    export let displayStyle;
    export let displayRoot;
    export let displayMode;
    export let svg;

    export const namespace = 'http://www.w3.org/2000/svg';

    displayRoot = displayRoot;
    
    import Nut from "./Nut.svelte";
    import Note from "./Note.svelte";
    import Notes from "./Notes.svelte";
    import Background from "./Background.svelte";
    import Fret from "./Fret.svelte";
    import String from "./String.svelte";
    import { frets, strngs, fretDotPositions, instrumentStrings } from "../lib/Utils.js"

    let fbWidth;
    let numberOfStrings;
    if (displayInstrument == 'guitar') {
        fbWidth = 152;
        numberOfStrings = 6;
    } else {
        fbWidth = 100;
        numberOfStrings = 4;
    }
    let fbLength = 1070;
    let string_spacing = fbWidth / 4;
    let totalFrets = 20;
    let distanceAboveNut = 30;
    let fretMarkerRadius = 7;
    let fretMarkerColor = '#000';
    let fretMarkerOpacity = '1';
    let length = 1500;

    let dotsToRender = [];
    fretDotPositions.single.forEach(dotXPos => {
        dotsToRender.push({
            x: dotXPos,
            y: (fbWidth / 2)
        });
    });
    fretDotPositions.double.forEach(dotXPos => {
        dotsToRender.push({
            x: dotXPos,
            y: (fbWidth / 4)
        });
        dotsToRender.push({
            x: dotXPos,
            y: (fbWidth - (fbWidth / 4))
        });
    });
</script>

<svg
  height="{fbWidth}" 
  width="{fbLength}"
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="overflow: hidden; position: relative;"
  bind:this={svg}>
    <g>
        <Background {fbLength} {fbWidth} />
        <Nut x={distanceAboveNut}
            y={0}
            width={5}
            height={fbWidth}
            {fbWidth} />
        {#each frets as fret, i}
            <Fret {length} {distanceAboveNut} {fbWidth} fretNum={i} />
        {/each}
        {#each dotsToRender as dot}
            <circle cx={dot.x} cy={dot.y} r="7" stroke="none" fill="#000000" />
        {/each}
        {#each instrumentStrings[displayInstrument] as string}
            <String {string} {fbLength} />
        {/each}
        <Notes {displayInstrument} {displayMode} {displayStyle} {displayRoot} />
    </g>
</svg>
