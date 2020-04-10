<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';

    let displayInstrument = $instrument;
    let displayRoot = $rootNote;
    let displayStyle = $style;
    let displayMode = $mode;

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    const updateRoot = event => {
        displayRoot = event.target.value;
    };

    const updateMode = event => {
        displayMode = event.target.value;
    };

    const updateStyle = event => {
        displayStyle = event.target.value;
    };

    const updateInstrument = event => {
        displayInstrument = event.target.value;
    };


</script>

<h3>Controls</h3>

<form on:submit|preventDefault>
    <div>
        <span>Note:</span>
        <select bind:value={displayRoot} on:change="{updateRoot}">
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
        <select bind:value={displayMode} on:change="{updateMode}">
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>

    <div>
        <span>Display style:</span>
        <select bind:value={displayStyle} on:change="{updateStyle}">
            {#each display_styles as style}
                <option value="{style}">{style}</option>
            {/each}
        </select>
    </div>

    <div>
        <span>Instrument:</span>
        <select bind:value={displayInstrument} on:change="{updateInstrument}">
            {#each intrumentsArray as instrument}
                <option value="{display_instruments[instrument]}">{instrument}</option>
            {/each}
        </select>
    </div>
</form>

<!-- <Fretboard displayInstrument={displayInstrument} /> -->

{#if displayInstrument == 'guitar'}
    <Fretboard {displayInstrument} {displayMode} {displayStyle} {displayRoot} />
{:else}
    <Fretboard {displayInstrument} {displayMode} {displayStyle} {displayRoot} />
{/if}


<!-- {#if displayInstrument }
    <Fretboard {displayInstrument} {displayStyle} />
{/if} -->