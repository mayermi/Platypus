import { Modification } from './modification';

export class Idea {
  id: string;
  title: string;
  description: string;
  reasoning: string;
  location: string;
  categories: string[];
  version: number;
  createdAt: number;
  modifiedAt: number;

  // TODO add in server
  user: string;
  phase: number;
  modifications: Modification[];
}
