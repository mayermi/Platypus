import { Addition, Idea, Modification } from './index';

﻿export class User {
  id: string;

  token: string;
  username: string;

  // objects
  additions: Addition[];
  ideas: Idea[];
  modifications: Modification[];

  // timestamps
  createdAt: number;
  updatedAt: number;
}
