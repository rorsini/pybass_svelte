<script>
    import { note_list, modes, display_styles, display_instruments } from "../lib/Utils.js";
    import { note, mode, style, instrument } from '../state/user';

    console.log("modes:");
    console.log(modes);

    const modesArray = Object.keys(modes);
    const intrumentsArray = Object.keys(display_instruments);

    let selected_note;

	const unsubscribe = note.subscribe(value => {
		selected_note = value;
	});

	function handleSubmit() {
        note.update(value => { value });
	}

</script>

<h3>Controls</h3>

<form on:submit|preventDefault>
    <div>
        <span>Note:</span>
        <select bind:value={selected_note} on:change="{handleSubmit}">
            {#each note_list as note}
                <option value="{note}">{note}</option>
            {/each}
        </select>
        <span>Selected note: {$note}</span>
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