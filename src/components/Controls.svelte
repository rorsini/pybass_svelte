<script>
    import Fretboard from "./Fretboard.svelte";
    import { noteList, modes, display_styles, display_instruments, instrumentStrings} from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';

    let displayInstrument = $instrument;
    let displayRoot = $rootNote;
    let displayStyle = $style;
    let displayMode = $mode;
    let props;

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    $: props = { 
        displayInstrument: displayInstrument,
        displayRoot: displayRoot,
        displayStyle: displayStyle,
        displayMode: displayMode
    };

    const updateRoot = event => {
        //props.displayRoot = event.target.value;
    };

    const updateMode = event => {
        //props.displayMode = event.target.value;
    };

    const updateStyle = event => {
        //props.displayStyle = event.target.value;
    };

    const updateInstrument = event => {
        //props.displayInstrument = event.target.value;
    };

    const handleSubmit = event => {event};

    console.log('props:');
    console.log(props);

</script>

<h3>Controls</h3>

<form on:submit|preventDefault={handleSubmit}>
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

<!-- <Fretboard {displayInstrument} {displayMode} {displayStyle} {displayRoot} /> -->

{#if displayInstrument == 'guitar'}
    <Fretboard {...props} />
{:else}
    <Fretboard {...props} />
{/if}
