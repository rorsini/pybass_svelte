<script>
    export let displayInstrument;
    export let displayStyle;
    export let displayRoot;
    export let displayMode;
    
    import gotScales from "got-scales";
    import Note from "./Note.svelte";
    import * as Utils from "../lib/Utils.js";

    let notes = {};
    for (let i = 0; i < Utils.noteList.length; i++) {
        let this_note_name = Utils.noteList[i];
        if (displayInstrument === 'guitar') {
            notes[this_note_name] = {'coords': Utils.guitarNotesPositions()[this_note_name].map(Utils.mapCoords)};
        } else {
            notes[this_note_name] = {'coords': Utils.bassNotesPositions()[this_note_name].map(Utils.mapCoords)};
        }
    }

    const thisScale = displayMode ? gotScales.note(displayRoot).scale(displayMode.split(","), true).notes.map(s => {
        return s && s.substring(0, 2)
    }) : [];

    let scale_degree = 1;
    let key_index = 0;
    let notesToRender = [];
    thisScale.map((scale_note) => {
        // this line helps make sure we don't see sharps:
        let note = scale_note.includes('#') ? Utils.flatMap[scale_note] : scale_note;
        let note_coords = notes[note].coords;
        for (let index in note_coords) {
            let coords = note_coords[index];
            let x_coord = coords[0];
            let y_coord = coords[1];
            let note_color = Utils.noteColors[note];
            let note_label = note;
            let text_color = 'black';
            let stroke_color = Utils.note_name_stroke_color;
            if (displayStyle && (displayStyle === "degrees" || displayStyle === "arpeggio" || displayStyle === "triads")) {
                if (displayStyle === "arpeggio") {
                    if (scale_degree % 2 === 0) {
                        continue;
                    }
                }
                if (displayStyle === "triads") {
                    if (scale_degree === 7) {
                        continue;
                    }
                    if (scale_degree % 2 === 0) {
                        continue;
                    }
                }
                text_color = '#eee';
                if (scale_degree === 1) {
                    note_color = Utils.scale_degree_root_color;
                    stroke_color = Utils.scale_degree_root_stroke_color;
                    text_color = '#000';
                } else {
                    note_color = Utils.scale_degree_color;
                    note_label = scale_degree;
                    stroke_color = Utils.scale_degree_stroke_color;
                }
            } else {
                if (scale_degree === 1) {
                    stroke_color = Utils.note_name_root_stroke_color;
                }
            }
            let display_note = String(note_label).replace('A#','Bb');
            display_note = String(note_label).replace('D#','Eb');

            notesToRender.push({
                xPos: x_coord,
                yPos: y_coord,
                note_color: note_color,
                text_color: text_color,
                scale_degree: scale_degree,
                stroke_color: stroke_color,
                label: String(display_note)
            });

            key_index++;
        } 
        scale_degree++;
    });
</script>

{#each notesToRender as noteProps}
    <Note {...noteProps}/>
{/each}
