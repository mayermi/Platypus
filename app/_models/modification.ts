import { Addition, Idea, Reaction, User } from './index';

export class Modification {
  id: string;

  reasoning: string;
  text: string;

  // objects
  additions: Addition[];
  idea: Idea;
  reactions: Reaction[];
  user: User;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
