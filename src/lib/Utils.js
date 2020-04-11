import gotScales from 'got-scales';

export const getMajorScale = (note) => {
  return gotScales.note(note).scale('major').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorScale = (note) => {
  return gotScales.note(note).scale('minor').getNotes().map((n) => n.substring(0, 2));
};

export const getMajorarpeggio = (note) => {
  return gotScales.arpeggio(note + 'maj').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorarpeggio = (note) => {
  return gotScales.arpeggio(note + 'm').getNotes().map((n) => n.substring(0, 2));
};

export const getColor = (note, scale) => {
  let notes = note;

  if (typeof note == 'string') {
    notes = [note];
  }
  for (let note_index in notes) {
    note = notes[note_index];
    for (let scale_index in scale) {
      if (scale[scale_index] === note) {
        if (scale_index === 0) {
          //return '#8833ff';
          return '#CC0000';
        }
        if (note.length > 1) {
          return '#1199ff';
        } else {
          return '#77aaff';
        }
      }
    }
  }

  // TODO: what is this?
  if (note.length > 1) {
    return '#000';
  } else {
    return '#fff';
  }
};

const hPosOffset = (pos) => {
  return pos - 24;
};

const vPosOffset = (pos) => {
  return pos - 12;
};

export const frets = [ 30, 114, 194, 269,
  339, 406, 469, 529,
  585, 638, 688, 735,
  780, 822, 862, 899,
  935, 968, 1000, 1029, 1058 ].map(hPosOffset);

export const strngs = [ 12.5, 37.5, 62.5, 87.5, 112.5, 137.5 ];

export const instrumentStrings = {
  guitar: strngs,
  bass: strngs.slice(0,4)
};

export let mapCoords = coords => {
  return [frets[coords[1]], strngs[coords[0]]];
};

export const fretDotPositions = {
  single: [233.5, 374, 500, 612, 881.5, 952, 1015],
  double: [758]
};

export const bassNotesMatrix = [
  ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
  ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
  ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
  ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
];

export const guitarNotesMatrix = [
  ['E', 'F', 'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
  ['B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G' ],
  ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
  ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
  ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
  ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
];

export let guitarNotesPositions = () => {
  let notesPositions = {};
  for (let i = 0; i < noteList.length; i++) {
    let positions = [];
    let this_note_name = noteList[i];
    for (let pos_string = 0; pos_string <= 5; pos_string++) {
        let guitar_string = guitarNotesMatrix[pos_string];
        for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
            if (guitar_string[pos_fret] === this_note_name) {
                positions.push([pos_string, pos_fret]);
            }
        }
    }
    notesPositions[this_note_name] = positions;
  }
  return notesPositions;
};

export let bassNotesPositions = () => {
  let notesPositions = {};
  for (let i = 0; i < noteList.length; i++) {
    let positions = [];
    let this_note_name = noteList[i];
    for (let pos_string = 0; pos_string <= 3; pos_string++) {
      let bass_string = bassNotesMatrix[pos_string];
      for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
        if (bass_string[pos_fret] === this_note_name) {
          positions.push([pos_string, pos_fret]);
        }
      }
    }
    notesPositions[this_note_name] = positions;
  }
  return notesPositions;
};

export const modes = {
  'Chromatic':         '0,1,2,3,4,5,6,7,8,9,10,11',
  'Ionian':            '0,2,4,5,7,9,11',
  'Dorian':            '0,2,3,5,7,9,10',
  'Phrygian':          '0,1,3,5,7,8,10',
  'Lydian':            '0,2,4,6,7,9,11',
  'Mixolydian':        '0,2,4,5,7,9,10',
  'Aeolian':           '0,2,3,5,7,8,10',
  'Locrian':           '0,1,3,5,6,8,10',
  'Major Pentatonic':  '0,2,4,7,9',
  'Blues Scale':       '0,3,5,6,7,10',
  'Minor Pentatonic':  '0,3,5,7,10',
  'Harmonic Minor':    '0,2,3,5,7,8,11',
  'Phrygian Dominant': '0,1,4,5,7,8,10',
  'Spanish Phrygian':  '0,1,4,5,7,8,10',
  'Root only':         '0'
};

export const normalizeModes = () => {
  let newModes = {}
  for ( const mode in modes ) {
    newModes[modes[mode]] = mode;
  }
  return newModes;
};

export const note_names = {
  'A': 'A',
  'A# / Bb': 'A#',
  'B': 'B',
  'C': 'C',
  'C# / Db': 'C#',
  'D': 'D',
  'D# / Eb': 'D#',
  'E': 'E',
  'F': 'F',
  'F# / Gb': 'F#',
  'G': 'G',
  'G# / Ab': 'G#'
};

export const noteList = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
]

export const display_styles = [
  'notes',
  'arpeggio',
  'degrees'
];

export const display_instruments = {
  'Guitar': 'guitar',
  'Bass': 'bass'
};

export const noteColors = {
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

export const scale_degree_color = '#2f4d9e';
export const scale_degree_root_color = '#69baea';

export const scale_degree_stroke_color = '#69baea';
export const scale_degree_root_stroke_color = '#333';

export const note_name_stroke_color = '#4b4b4b';
export const note_name_root_stroke_color = '#000';


export const saveSvg = (svg, name = 'download.svg') => {
  confirm(`Save file: "${name}.svg" ?`);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svg.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};