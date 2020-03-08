import { Note } from "../theory/note";

export type RouteContextValues = {
  tuning: Tuning | undefined,
  scale: Scale | undefined,
  chord: Chord | undefined,
};

export type Marker = {
  string: number;
  fret: number;
  label: string;
  note: Note;
  fill: string;
}

export type MarkerLabel = 'note' | 'degree';
export type MarkerMode = 'scale' | 'chord tones';

export type SelectionOption = string | {
  label: string;
  value: string;
};