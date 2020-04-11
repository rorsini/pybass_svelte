<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';
    
    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let displayInstrument = $instrument;
    let displayRoot = $rootNote;
    let displayStyle = $style;
    let displayMode = $mode;
    let svg;

    let props;
    $: props = { 
        displayInstrument: displayInstrument,
        displayRoot: displayRoot,
        displayStyle: displayStyle,
        displayMode: displayMode
    };

    const changeRoot = (e) => {
        displayRoot = e.target.value;
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
        <select bind:value={props.displayMode}>
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Display style:</span>
        <select bind:value={props.displayStyle}>
            {#each display_styles as style}
                <option value="{style}">{style}</option>
            {/each}
        </select>
    </div>
    <div>
        <span>Instrument:</span>
        <select bind:value={props.displayInstrument}>
            {#each intrumentsArray as instrument}
                <option value="{display_instruments[instrument]}">{instrument}</option>
            {/each}
        </select>
    </div>
</form>

{#if props.displayInstrument == 'guitar'}
    <Fretboard {...props} bind:svg />
{:else}
    <Fretboard {...props} bind:svg />
{/if}
