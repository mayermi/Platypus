import { Modification } from './index';

export class History {
  id: string;
  description: string;
  reasoning: string;
  version: number;

  // objects
  modification: Modification;

  // timestamps
  createdAt: number;
  updatedAt: number;
}
