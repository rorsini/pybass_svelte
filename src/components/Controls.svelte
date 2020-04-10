<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments,instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';
    
    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let props = { 
        displayInstrument: $instrument,
        displayRoot: $rootNote,
        displayStyle: $style,
        displayMode: $mode
    };
</script>

<h3>Controls</h3>

<form on:submit|preventDefault={() => ({})}>
    <div>
        <span>Note:</span>
        <select bind:value={props.displayRoot}>
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
    <Fretboard {...props} />
{:else}
    <Fretboard {...props} />
{/if}
