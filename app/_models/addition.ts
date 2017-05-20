import { Modification, Reaction, User } from './index';

export class Addition {
  id: string;

  reasoning: string;
  text: string;

  // objects
  modification: Modification;
  reactions: Reaction[];
  user: User;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
