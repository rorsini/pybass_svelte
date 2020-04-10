<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';

    let displayInstrument = $instrument;

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    const updateRootNote = event => {
        // $rootNote.set(event.target.value);
        console.log('rootNote: ', $rootNote);
    };

    const updateInstrument = event => {
        displayInstrument = event.target.value;
        instrument.set(displayInstrument);
        console.log('displayInstrument: ', displayInstrument);
    };

</script>

<h3>Controls</h3>

<form on:submit|preventDefault>
    <div>
        <span>Note:</span>
        <select bind:value={$rootNote} on:change="{updateRootNote}">
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
        <select>
            {#each modesArray as mode}
                <option value="{modes[mode]}">{mode}</option>
            {/each}
        </select>
    </div>

    <div>
        <span>Display style:</span>
        <select>
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
    <Fretboard displayInstrument='guitar' />
{:else}
    <Fretboard displayInstrument='bass' />
{/if}
