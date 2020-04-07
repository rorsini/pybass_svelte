<script>
    import gotScales from "got-scales";
    import Note from "./Note.svelte";
    import { note_list } from "../lib/Utils.js";
    import { rootNote, mode, style, instrument } from '../state/stores.js';

    const bassNote = $rootNote;
    const bassMode = $mode;
    // const displayStyle = $style; // 'notes', 'chord', 'degrees'
    const displayStyle = 'chord'; // 'notes', 'chord', 'degrees'
    const displayInstrument = $instrument;

    // TODO: DRY this up
    const hPosOffset = (pos) => {
        return pos - 24;
    };

    // TODO: DRY this up
    const vPosOffset = (pos) => {
        return pos - 12;
    };

    // TODO: DRY this up
    const frets = [ 30, 114, 194, 269,
                    339, 406, 469, 529,
                    585, 638, 688, 735,
                    780, 822, 862, 899,
                    935, 968, 1000, 1029, 1058 ].map(hPosOffset);

    // TODO: DRY this up
    const strngs = [ 12.5, 37.5, 62.5, 87.5, 112.5, 137.5 ];

    // TODO: DRY this up
    function mapCoords(coords) {
        return [frets[coords[1]], strngs[coords[0]]];
    }

    const guitar_notes_matrix = [
        ['E', 'F', 'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
        ['B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G' ],
        ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
        ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
        ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
        ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
    ];

    let guitar_notes_with_positions = {};
    for (let i = 0; i < note_list.length; i++) {
        let positions = [];
        let this_note_name = note_list[i];
        for (let pos_string = 0; pos_string <= 5; pos_string++) {
            let guitar_string = guitar_notes_matrix[pos_string];
            for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
                if (guitar_string[pos_fret] === this_note_name) {
                    positions.push([pos_string, pos_fret]);
                }
            }
        }
        guitar_notes_with_positions[this_note_name] = positions;
    }

    const bass_notes_matrix = [
        ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
        ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
        ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
        ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
    ];

    let bass_notes_with_positions = {};
    for (let i = 0; i < note_list.length; i++) {
        let positions = [];
        let this_note_name = note_list[i];
        for (let pos_string = 0; pos_string <= 3; pos_string++) {
            let bass_string = bass_notes_matrix[pos_string];
            for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
                if (bass_string[pos_fret] === this_note_name) {
                    positions.push([pos_string, pos_fret]);
                }
            }
        }
        bass_notes_with_positions[this_note_name] = positions;
    }

    let notes = {};

    for (let i = 0; i < note_list.length; i++) {
        let this_note_name = note_list[i];
        if (displayInstrument === 'guitar') {
            notes[this_note_name] = {'coords': guitar_notes_with_positions[this_note_name].map(mapCoords)};
        } else {
            notes[this_note_name] = {'coords': bass_notes_with_positions[this_note_name].map(mapCoords)};
        }
    }

    // note aliases:
    notes['Eb'] = notes['D#'];
    notes['Fb'] = notes['E'];
    notes['Gb'] = notes['F#'];
    notes['Ab'] = notes['G#'];
    notes['Bb'] = notes['A#'];
    notes['Cb'] = notes['B'];
    notes['Db'] = notes['C#'];

    const note_colors = {
        'C': '#ca0d3c', 'Cb': '#ca0d3c',
        'G': '#e43a23',
        'D': '#ec6f21',
        'A': '#f6ac1a',
        'E': '#ebda10',
        'B': '#97c82b',
        'Gb': '#36a938', 'F#': '#36a938',
        'Db': '#009a82', 'C#': '#009a82',
        'Ab': '#0084d4', 'G#': '#0084d4',
        'Eb': '#2f4d9e', 'D#': '#2f4d9e',
        'Bb': '#6d2a86', 'A#': '#6d2a86',
        'F':  '#970a7c', 'E#': '#970a7c',
    };

    const scale_degree_color = '#2f4d9e';
    const scale_degree_root_color = '#69baea';

    const scale_degree_stroke_color = '#69baea';
    const scale_degree_root_stroke_color = '#333';

    const note_name_stroke_color = '#4b4b4b';
    const note_name_root_stroke_color = '#000';

    const thisScale = bassMode ? gotScales.note(bassNote).scale(bassMode.split(","), true).notes.map(s => {
        return s && s.substring(0, 2)
    }) : [];

    let scale_degree = 1;
    let key_index = 0;
    let notesToRender = [];
    for (let note_index in thisScale) {
        let note = thisScale[note_index];
        let note_coords = notes[note].coords;
        for (let index in note_coords) {
            let coords = note_coords[index];
            let x_coord = coords[0];
            let y_coord = coords[1];
            let note_color = note_colors[note];
            let note_label = note;
            let text_color = 'black';
            let stroke_color = note_name_stroke_color;
            if (displayStyle && (displayStyle === "degrees" || displayStyle === "chord")) {
                if (displayStyle === "chord") {
                    if (scale_degree % 2 === 0) {
                        continue;
                    }
                }
                text_color = '#eee';
                if (scale_degree === 1) {
                    note_color = scale_degree_root_color;
                    stroke_color = scale_degree_root_stroke_color;
                    text_color = '#000';
                } else {
                    note_color = scale_degree_color;
                    note_label = scale_degree;
                    stroke_color = scale_degree_stroke_color;
                }
            } else {
                if (scale_degree === 1) {
                    stroke_color = note_name_root_stroke_color;
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
    }
</script>

{#each notesToRender as noteProps}

    <Note {...noteProps}/>

{/each}
