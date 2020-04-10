import gotScales from 'got-scales';

export const getMajorScale = (note) => {
  return gotScales.note(note).scale('major').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorScale = (note) => {
  return gotScales.note(note).scale('minor').getNotes().map((n) => n.substring(0, 2));
};

export const getMajorChord = (note) => {
  return gotScales.chord(note + 'maj').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorChord = (note) => {
  return gotScales.chord(note + 'm').getNotes().map((n) => n.substring(0, 2));
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

export const fretDotPositions = {
  single: [233.5, 374, 500, 612, 881.5, 952, 1015],
  double: [758]
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
  'Root only': '0'
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

export const note_list = [
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
  'chord',
  'degrees'
];

export const display_instruments = {
  'Guitar': 'guitar',
  'Bass': 'bass'
};
