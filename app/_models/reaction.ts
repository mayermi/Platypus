import { User } from './index';

export class Reaction {
  id: string;

  type: string;

  // objects
  user: User;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
