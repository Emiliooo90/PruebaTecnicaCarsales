import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EpisodeitemComponent } from '../episodeitem/episodeitem.component';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { EpisodeResults } from '../interfaces/episode';

@Component({
  selector: 'app-episodeslist',
  standalone: true,
  imports: [AsyncPipe, EpisodeitemComponent, ErrormessageComponent],
  templateUrl: './episodeslist.component.html',
  styleUrl: './episodeslist.component.css'
})
export class EpisodeslistComponent {
  public episodeResults$!: Observable<EpisodeResults>;
  public errorMessage!: string;
  constructor(private service: RickandmortyService) {}

  ngOnInit(): void {
    this.episodeResults$ = this.service.getEpisodesList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }
}
