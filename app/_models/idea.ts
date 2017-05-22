import { History, Modification, User } from './index';

export class Idea {
  id: string;
  title: string;
  description: string;
  reasoning: string;
  location: string;
  categories: string[];
  version: number;

  // objects
  histories: History[];
  user: User;
  modifications: Modification[];

  // timestamps
  createdAt: number;
  updatedAt: number;
}
