import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Addition, Idea, Modification } from '../_models/index';

@Injectable()
export class ModificationService {
  constructor(private apiService: APIService) {}

}
