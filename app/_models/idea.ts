import { Modification, User } from './index';

export class Idea {
  id: string;
  title: string;
  description: string;
  reasoning: string;
  location: string;
  categories: string[];
  version: number;

  // objects
  user: User;
  modifications: Modification[];

  // timestamps
  createdAt: number;
  updatedAt: number;
}
