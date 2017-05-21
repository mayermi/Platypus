import { Addition, Idea, Reaction, User } from './index';

export class Modification {
  id: string;

  isMergeable: boolean;
  isOpen: boolean;
  reasoning: string;
  text: string;
  title: string;

  // objects
  additions: Addition[];
  idea: Idea;
  reactions: Reaction[];
  user: User;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
