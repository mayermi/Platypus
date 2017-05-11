import { Addition } from './addition';

export class Modification {
  _id: string;
  content: string;
  idea: string;
  merged: boolean;
  user: string;
  created: number;
  modified: number;
  additions: Addition[];
  phases: number[];

  likes: number;
  dislikes: number;
}
