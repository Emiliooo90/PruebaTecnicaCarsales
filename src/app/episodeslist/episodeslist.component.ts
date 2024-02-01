import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EpisodeitemComponent } from '../episodeitem/episodeitem.component';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { EpisodeResults } from '../interfaces/episode';
import { Episode } from '../interfaces/episode';

@Component({
  selector: 'app-episodeslist',
  standalone: true,
  imports: [AsyncPipe, EpisodeitemComponent, ErrormessageComponent],
  templateUrl: './episodeslist.component.html',
  styleUrl: './episodeslist.component.css'
})
export class EpisodeslistComponent implements OnInit {
  @Input() episodeInfo!: Episode
  public episodeResults$!: Observable<EpisodeResults>;
  public errorMessage!: string;
  public page: number = 1;

  constructor(private service: RickandmortyService) { }

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.episodeResults$ = this.service.getEpisodesList(this.page).pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }));
  }

  nextPage(): void {
    if (this.page < 3) {
      this.page++;
      this.loadEpisodes();
    } else {
      console.log("No hay más páginas disponibles.");
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadEpisodes();
    }
  }
}