import { Modification } from './modification';

export class Idea {
  _id: string;
  title: string;
  user: string;
  created: number;
  modified: number;
  _v: number;
  information: string[];
  phase: number;
  location: string[];
  modifications: Modification[];
  tags: string[];
  parts: string[];
  type: string;
}
