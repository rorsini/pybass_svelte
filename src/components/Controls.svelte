<script>
    import { note_list, modes, display_styles, display_instruments } from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    const handleSubmit = () => {
        rootNote.update(value => value );
    };

</script>

<h3>Controls</h3>

<form on:submit|preventDefault>
    <div>
        <span>Note:</span>
        <select bind:value={$rootNote} on:change="{handleSubmit}">
            {#each note_list as note}
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
        <select>
            {#each intrumentsArray as instrument}
                <option value="{display_instruments[instrument]}">{instrument}</option>
            {/each}
        </select>
    </div>
</form>