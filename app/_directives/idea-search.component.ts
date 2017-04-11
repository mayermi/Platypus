import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { IdeaSearchService} from '../_services/index';
import { Idea } from '../_models/index';

@Component({
  moduleId: module.id,
  selector: 'idea-search',
  templateUrl: 'idea-search.component.html',
  styleUrls: [ 'idea-search.component.css' ],
  providers: [IdeaSearchService]
})

export class IdeaSearchComponent implements OnInit {
  ideas: Observable<Idea[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private ideaSearchService: IdeaSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.ideas = this.searchTerms.debounceTime(300) //wait for 300ms pause in events
    .distinctUntilChanged() // ignore if next search term is same as previous
    .switchMap((term: string) => term // switch to new observable eacht time
      //return the http search observable
      ? this.ideaSearchService.search(term)
      // or the observable of empty heroes if no search term
      : Observable.of<Idea[]>([])).catch((error: Error) => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Idea[]>([]);
      });
  }

  gotoDetail(idea: Idea): void {
    let link = ['/detail', idea._id];
    this.router.navigate(link);
  }
}