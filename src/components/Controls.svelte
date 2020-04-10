<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments,instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';
    
    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let props;
    $: props = { 
        displayInstrument: $instrument,
        displayRoot: $rootNote,
        displayStyle: $style,
        displayMode: $mode
    };

    const updateRoot = event => {
        // $rootNote = event.target.value;
    };
    const updateMode = event => {
        // $mode = event.target.value;
    };
    const updateStyle = event => {
        // $style = event.target.value;
    };
    const updateInstrument = event => {
        // $instrument = event.target.value;
    };
</script>

<h3>Controls</h3>

<form on:submit|preventDefault={() => ({})}>
    <div>
        <span>Note:</span>
        <select bind:value={props.displayRoot} on:change="{updateRoot}">
            {#each noteList as note}
                {#if (note == $rootNote)}
                    <option value="{note}" selected="selected">
                        {note}
                    </option>
                {:else}
                    <option value="{note}">{note}</option>
                {/if}
            {/each}
        </select>
    </div>

    <div>
        <span>Mode:</span>
        <select bind:value={props.displayMode} on:change="{updateMode}">
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>

    <div>
        <span>Display style:</span>
        <select bind:value={props.displayStyle} on:change="{updateStyle}">
            {#each display_styles as style}
                <option value="{style}">{style}</option>
            {/each}
        </select>
    </div>

    <div>
        <span>Instrument:</span>
        <select bind:value={props.displayInstrument} on:change="{updateInstrument}">
            {#each intrumentsArray as instrument}
                <option value="{display_instruments[instrument]}">{instrument}</option>
            {/each}
        </select>
    </div>
</form>

<!-- <Fretboard {displayInstrument} {displayMode} {displayStyle} {displayRoot} /> -->

{#if props.displayInstrument == 'guitar'}
    <Fretboard {...props} />
{:else}
    <Fretboard {...props} />
{/if}
