import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Addition, Modification } from '../_models/index';

@Injectable()
export class AdditionService {
  constructor(private apiService: APIService) {}

}
