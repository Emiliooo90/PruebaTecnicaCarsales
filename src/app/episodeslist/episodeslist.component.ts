import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import { Observable } from 'rxjs';
import { EpisodeResults } from '../interfaces/episode';

@Component({
  selector: 'app-episodeslist',
  standalone: true,
  imports: [AsyncPipe, ErrormessageComponent],
  templateUrl: './episodeslist.component.html',
  styleUrl: './episodeslist.component.css'
})
export class EpisodeslistComponent {
  public episodesList$!: Observable<EpisodeResults>
  constructor(private service: RickandmortyService) {}

  ngOnInit(): void {
    this.episodesList$ = this.service.getEpisodesList();
  }
}
