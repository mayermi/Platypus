import { History, Modification, State, User } from './index';

export class Idea {
  id: string;

  categories: string[];
  description: string;
  location: string;
  reasoning: string;
  title: string;
  version: number;

  // objects
  histories: History[];
  modifications: Modification[];
  states: State[];
  user: User;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
