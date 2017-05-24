import { User, Phase } from './index';

export class State {
  id: string;

  endsAt: number;

  // objects
  user: User;
  phase: Phase;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
