import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
import { Router } from '@angular/router';
import { IdeaAddModificationComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'my-idea-detail',
  templateUrl: 'idea-detail.component.html'
  // styleUrls: [ 'idea-detail.component.css' ]
})
export class IdeaDetailComponent implements OnInit {

  idea: Idea;
  currentPhase: String;
  selectedPhase: String;
  phases = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];
  argumentsIsVisible = false;
  modifications: ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];

  isAddAdditionVisible = false;
  isAddArgumentVisible = false;
  isAddModificationVisible = false;
  isHowItWorksVisible = false;
  isModificationDetailVisible = false;

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  public onAdditionDetailSelected(){
    console.log("addition selected");
  }

  public onModificationDetailSelected(){
    console.log("modification selected");
  }

  public onModificationSaved(){
    this.isAddModificationVisible = false;
  }

  public goToModificationOverview(){
    this.isAddModificationVisible = false;
  }

  ngOnInit(): void {

    // this.ideaService.getIdeas().then(ideas => this.ideas = ideas);

    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params['_id']))
      // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
      .subscribe(idea => {
        this.idea = idea;
        this.currentPhase = this.phases[idea.phase];
      });
  }
  addAddition(): void {

  }
  addArgument(): void {

  }
  addModification(): void {

  }
  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
  gotoEdit(): void {
    this.router.navigate(['/idea-edit/', this.idea._id]);
  }

  // save(): void {
  //   this.ideaService.update(this.idea)
  //     .then(() => this.goBack());
  // this.modificationActive = false;
  // this.positionActive = false;
  // }

  showArguments(): void {
    this.argumentsIsVisible = true;
  }
  showInMiddleColumn(view: String): void {
    this.isAddAdditionVisible = false;
    this.isAddArgumentVisible = false;
    this.isAddModificationVisible = false;
    this.isHowItWorksVisible = false;
    this.isModificationDetailVisible = false;
    if(view === "addAddition") {
      this.isAddAdditionVisible = true;
    } else if (view === "addArgument"){
      this.isAddArgumentVisible = true;
    } else if (view === "addModification"){
      this.isAddModificationVisible = true;
    } else if (view === "howItWorks"){
      this.isHowItWorksVisible = true;
    } else if (view === "modificationDetail"){
      this.isModificationDetailVisible = true;
    }
  }
  showModificationDetail(modification: String): void {
    this.showInMiddleColumn('modificationDetail');
  }
}
