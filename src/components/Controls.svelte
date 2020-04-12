<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';
    import { saveSvg, normalizeModes } from '../lib/Utils';

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let displayInstrument = $instrument;
    let displayRoot = $rootNote;
    let displayStyle = $style;
    let displayMode = $mode;
    let svg;

    $: downloadFileName = `${displayRoot}_${normalizeModes()[displayMode].replace(' ','_')}_${displayStyle}`;
    $: fretboardTitle = `"${displayRoot}" ${normalizeModes()[displayMode].replace(' ','_')} - ${displayStyle}`;

    let props;
    $: props = { 
        displayInstrument: displayInstrument,
        displayRoot: displayRoot,
        displayStyle: displayStyle,
        displayMode: displayMode,
        fretboardTitle: fretboardTitle
    };

    const changeRoot = (e) => {
        displayRoot = e.target.value;
        console.log('new props:');
        console.log(props);
    };

    const changeMode = (e) => {
        displayMode = e.target.value;
        console.log('new props:');
        console.log(props);
    };

    const changeStyle = (e) => {
        displayStyle = e.target.value;
        console.log('new props:');
        console.log(props);
    };

    const handleSubmit = (e) => {};
</script>

<h3>Controls</h3>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <span>Note:</span>
        <select bind:value={props.displayRoot} on:change={changeRoot}>
            {#each noteList as note}
                <option value="{note}">{note}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Mode:</span>
        <select bind:value={props.displayMode} on:change={changeMode}>
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Display style:</span>
        <select bind:value={props.displayStyle} on:change={changeStyle}>
            {#each display_styles as style}
                <option value="{style}">{style}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Instrument:</span>
        <select bind:value={props.displayInstrument}>
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
        background: lightgreen;
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
        color: #333333;
        background: greenyellow;
    }

    button:active {
        box-shadow: inset 1px 1px 1px #DFDFDF;   
    }
</style>
