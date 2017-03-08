import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
@Component({
  moduleId: module.id,
  selector: 'my-idea-add',
  templateUrl: 'idea-add.component.html',
  // styleUrls: [ 'idea-edit.component.css' ]
})
export class IdeaAddComponent implements OnInit {
  idea: Idea;
  // $scope.telephone = [];
  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
      .switchMap((params: Params) => this.ideaService.getIdea(params['id']))
      .subscribe(idea => this.idea = idea);
  }
  save(): void {
    // Create input element
    // var input = angular.element('<div><input type="text" ng-model="telephone[' + $scope.inputCounter + ']"></div>');
    // Compile the HTML and assign to scope
    // var compile = $compile(input)($scope);

    this.ideaService.update(this.idea)
      .then(() => this.goBack());
  }
  select(): void {
    // hide imput
  }
  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
}
