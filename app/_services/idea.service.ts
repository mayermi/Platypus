import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Addition, History, Idea, Modification, Reaction, State } from '../_models/index';

@Injectable()
export class IdeaService {
  constructor(private apiService: APIService) {}

  getIdeas(): Promise<Idea[]> {
    return this.apiService.get('/ideas')
      .then((ideas: Idea[]) => ideas);
  }

  getIdea(id: String): Promise<Idea> {
    return this.apiService.get(`/ideas/${id}`)
      .then((idea: Idea) => idea);
  }

  getTopIdeas(): Promise<Idea[]> {
    return this.apiService.get('/ideas')
      .then((ideas: Idea[]) => ideas.slice(0, 3));
  }

  delete(idea: Idea): Promise<any> {
    return this.apiService.delete(`/ideas/${idea.id}`)
      .then(() => null);
  }

  create(idea: Idea): Promise<Idea> {
    return this.apiService.post('/ideas', idea)
      .then((idea: Idea) => idea);
  }

  updateIdeaWithModification(idea: Idea, modification: Modification): Promise<Idea> {
    return this.apiService.put(`/ideas/${idea.id}`, { idea, modification })
      .then((idea: Idea) => idea);
  }

  /* histories */

  getHistoriesForIdea(idea: Idea): Promise<History[]> {
    return this.apiService.get(`/ideas/${idea.id}/histories`)
      .then((histories: History[]) => histories);
  }

  getStatesForIdea(idea: Idea): Promise<State[]> {
    return this.apiService.get(`/ideas/${idea.id}/states`)
      .then((states: State[]) => states);
  }

  setPhaseForIdea(idea: Idea, phase: number): Promise<State> {
    return this.apiService.post(`/ideas/${idea.id}/states`, { phase })
      .then((state: State) => state);
  }

  /* modifications */

  getModification(ideaId: String, modificationId: String): Promise<Modification> {
    return this.apiService.get(`/ideas/${ideaId}/modifications/${modificationId}`)
      .then((modification: Modification) => modification);
  }

  getModificationsForIdea(idea: Idea): Promise<Modification[]> {
    return this.apiService.get(`/ideas/${idea.id}/modifications`)
      .then((modifications: Modification[]) => modifications);
  }

  createModificationForIdea(idea: Idea, modification: Modification): Promise<Modification> {
    return this.apiService.post(`/ideas/${idea.id}/modifications`, modification)
      .then((modification: Modification) => modification);
  }

  setModificationMergeable(idea: Idea, modification: Modification): Promise<Modification> {
    return this.apiService.post(`/ideas/${idea.id}/modifications/${modification.id}/setMergeable`)
      .then((modification: Modification) => modification);
  }

  /* additions */

  getAdditionsForModification(idea: Idea, modification: Modification): Promise<Addition[]> {
    return this.apiService.get(`/ideas/${idea.id}/modifications/${modification.id}/additions`)
      .then((additions: Addition[]) => additions);
  }

  createAdditionForModification(idea: Idea, modification: Modification, addition: Addition): Promise<Addition> {
    return this.apiService.post(`/ideas/${idea.id}/modifications/${modification.id}/additions`, addition)
      .then((addition: Addition) => addition);
  }

  /* reactions */

  getReactionsForModification(idea: Idea, modification: Modification): Promise<Reaction[]> {
    return this.apiService.get(`/ideas/${idea.id}/modifications/${modification.id}/reactions`)
      .then((reactions: Reaction[]) => reactions);
  }

  createReactionForModification(idea: Idea, modification: Modification, reaction: Reaction): Promise<Reaction> {
    return this.apiService.post(`/ideas/${idea.id}/modifications/${modification.id}/reactions`, reaction)
      .then((reaction: Reaction) => {
        // replace reaction if one with this ID already exists in list, push otherwise
        const existingReaction = modification.reactions.find(existingReaction => existingReaction.id === reaction.id);
        if (existingReaction) {
          modification.reactions.splice(modification.reactions.indexOf(existingReaction), 1, reaction);
        } else {
          modification.reactions.push(reaction);
        }

        return reaction;
      });
  }

  deleteReactionForModification(idea: Idea, modification: Modification): Promise<Reaction> {
    return this.apiService.delete(`/ideas/${idea.id}/modifications/${modification.id}/reactions`)
      .then((reaction: Reaction) => {
        // replace reaction if one with this ID already exists in list, push otherwise
        const previousReaction = modification.reactions.find(previousReaction => previousReaction.id === reaction.id);
        modification.reactions.splice(modification.reactions.indexOf(previousReaction), 1);

        return reaction;
      });
  }


  getReactionsForAddition(idea: Idea, modification: Modification, addition: Addition): Promise<Reaction[]> {
    return this.apiService.get(`/ideas/${idea.id}/modifications/${modification.id}/additions/${addition.id}/reactions`)
      .then(response => response as Reaction[]);
  }

  createReactionForAddition(idea: Idea, modification: Modification, addition: Addition, reaction: Reaction): Promise<Reaction> {
    return this.apiService.post(`/ideas/${idea.id}/modifications/${modification.id}/additions/${addition.id}/reactions`, reaction)
      .then((reaction: Reaction) => {
        // replace reaction if one with this ID already exists in list, push otherwise
        const existingReaction = addition.reactions.find(existingReaction => existingReaction.id === reaction.id);
        if (existingReaction) {
          addition.reactions.splice(addition.reactions.indexOf(existingReaction), 1, reaction);
        } else {
          addition.reactions.push(reaction);
        }

        return reaction;
      });
  }

  deleteReactionForAddition(idea: Idea, modification: Modification, addition: Addition): Promise<Reaction> {
    return this.apiService.delete(`/ideas/${idea.id}/modifications/${modification.id}/additions/${addition.id}/reactions`)
      .then((reaction: Reaction) => {
        // replace reaction if one with this ID already exists in list, push otherwise
        const previousReaction = addition.reactions.find(previousReaction => previousReaction.id === reaction.id);
        addition.reactions.splice(addition.reactions.indexOf(previousReaction), 1);

        return reaction;
      });
  }
}
