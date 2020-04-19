<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';
    import { saveSvg, normalizeModes } from '../lib/Utils';
    import queryString from "query-string";
    
    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let svg;

    let displayInstrument;
    let displayRoot;
    let displayStyle;
    let displayMode;

    displayInstrument = $instrument;
    displayRoot = $rootNote;
    displayStyle = $style;
    displayMode = $mode;

    // get url params:
    let parsed = {};
    if (typeof window !== 'undefined') {
        const urlParams = queryString.parse(window.location.search);

        displayInstrument = urlParams.axe ? urlParams.axe : displayInstrument;
        displayRoot = urlParams.root ? urlParams.root.replace(/s/g, '#') : displayRoot;
        displayStyle = urlParams.style ? urlParams.style : displayStyle;
        displayMode = urlParams.mode ? urlParams.mode : displayMode;
    }
    
    let downloadFileName = `${displayRoot}_${normalizeModes()[displayMode].replace(' ','_')}_${displayStyle}`;
    let fretboardTitle = `"${displayRoot}" ${normalizeModes()[displayMode].replace(' ','_')} - ${displayStyle}`;
    fretboardTitle = fretboardTitle.replace(/_/g, ' ');

    const handleChange = (e) => {
        const root = e.srcElement.form.elements[0].value;
        const mode = e.srcElement.form.elements[1].value;
        const style = e.srcElement.form.elements[2].value;
        const axe = e.srcElement.form.elements[3].value;

        displayInstrument = axe;
        displayRoot = root;
        displayStyle = style;
        displayMode = mode;

        const urlParams = `/main/?root=${root}&mode=${mode}&style=${style}&axe=${axe}`;
        
        window.location.replace(urlParams.replace(/#/g, 's'));
    };

    let props;
    props = { 
        displayInstrument: displayInstrument,
        displayRoot: displayRoot,
        displayStyle: displayStyle,
        displayMode: displayMode,
        fretboardTitle: fretboardTitle
    };

</script>

<form id="controlsForm" on:submit|preventDefault={(e) => {}}>
    <div>
        <span>Note:</span>
        <select id="root" bind:value={props.displayRoot} on:change={handleChange}>
            {#each noteList as note}
                <option value="{note}">{note}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Mode:</span>
        <select id="mode" bind:value={props.displayMode} on:change={handleChange}>
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Display style:</span>
        <select id="style" bind:value={props.displayStyle} on:change={handleChange}>
            {#each display_styles as style}
                <option value="{style}">{style}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Instrument:</span>
        <select id="axe" bind:value={props.displayInstrument} on:change={handleChange}>
            {#each intrumentsArray as instrument}
                <option value="{display_instruments[instrument].label}">{instrument}</option>
            {/each}
        </select>
    </div>
</form>

{#if props.displayInstrument == 'guitar'}
    <Fretboard {...props} bind:svg />
{:else}
    <Fretboard {...props} bind:svg />
{/if}
<br />
<button on:mousedown={ev => saveSvg(svg, downloadFileName)}>Save SVG</button>

<style>
    button {
        color: black;
        background: rgb(0, 196, 0);
        border: 1px #DADADA solid;
        padding: 5px 10px;
        border-radius: 2px;
        font-weight: bold;
        font-size: 9pt;
        outline: none;
    }

    button:hover {
        border: 1px #C6C6C6 solid;
        box-shadow: 1px 1px 1px #EAEAEA;
        color: black;
        background: rgb(0, 140, 0);
    }

    button:active {
        box-shadow: inset 1px 1px 1px #DFDFDF;   
    }
    #controlsForm {
        padding-top: 50px;
        padding-bottom: 10px;
    }
</style>
