import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import * as diff from 'diff';

import { History, Idea } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css']
})
export class HistoryComponent implements OnInit {
  histories: History[];
  idea: Idea;

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute
  ) {}

  getDiffForHistory(history: History): string {
    const version = history.version;
    const nextHistory = this.histories.find((history: History) => history.version === version + 1) || this.idea;

    return diff.diffWords(history.description, nextHistory.description).map((entry) => {
      if (entry.removed) {
        return `~~${entry.value.trim()}~~`;
      }

      if (entry.added) {
        return `<span class="md-added">${entry.value}</span>`;
      }

      return entry.value;
    }).join('');
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => {
        this.idea = idea;

        this.ideaService.getHistoriesForIdea(idea).then(histories => {
          this.idea.histories = this.histories = histories;
        });
    });
  }
}
