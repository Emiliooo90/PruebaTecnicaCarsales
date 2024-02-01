import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import {EpisodeslistComponent } from '../episodeslist/episodeslist.component';
import { Observable, Subject, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { Character } from '../interfaces/episode';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, EpisodeslistComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm$ = new Subject<string>();
  characters$!: Observable<Character[]>;
  private filterSvc = inject(RickandmortyService);

  constructor() {
    this.characters$ = this.searchTerm$.pipe(
      filter((term: string) => term.length >= 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.filterSvc.filterCharacter(term))
    );
  }

  search(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }
}
