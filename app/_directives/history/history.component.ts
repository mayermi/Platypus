import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import * as diff from 'diff';

import { History, Idea, State } from '../../_models/index';
import { IdeaService } from '../../_services/index';
import { formatDate } from '../../_helpers/index';

@Component({
  moduleId: module.id,
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css']
})
export class HistoryComponent implements OnInit {
  events: any[] = [];
  hasLoadedEvents: boolean = false;
  idea: Idea;
  sortedEvents: any[] = [];

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute
  ) {}

  getDiffForHistory(history: History): string {
    const version = history.version;
    const nextHistory = this.idea.histories.find((history: History) => history.version === version + 1) || this.idea;

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

  getFormattedDate(date: number): string {
    return formatDate.absolute(date);
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => {
        this.idea = idea;

        this.ideaService.getHistoriesForIdea(idea).then((histories: History[]) => {
          this.idea.histories = histories.reverse();

          this.events = this.events.concat(histories).sort((eventA, eventB) => {
            return (new Date(eventB.createdAt)).valueOf() - (new Date(eventA.createdAt)).valueOf();
          });

          this.hasLoadedEvents = true;
        });

        this.ideaService.getStatesForIdea(idea).then((states: State[]) => {
          this.idea.states = states;

          this.events = this.events.concat(states).sort((eventA, eventB) => {
            return (new Date(eventB.createdAt)).valueOf() - (new Date(eventA.createdAt)).valueOf();
          });

          this.hasLoadedEvents = true;
        });
    });
  }
}
