import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import { EMPTY, Observable, forkJoin, switchMap, map, catchError } from 'rxjs';
import { Episode, CharacterDetails } from '../interfaces/episode';
import { ErrormessageComponent } from '../errormessage/errormessage.component';

@Component({
  selector: 'app-episodedetails',
  standalone: true,
  imports: [CommonModule, ErrormessageComponent],
  templateUrl: './episodedetails.component.html',
  styleUrls: ['./episodedetails.component.css']
})
export class EpisodedetailsComponent implements OnInit {
  public episode$!: Observable<Episode>;
  public characters$: Observable<CharacterDetails[]> | undefined;
  public errorMessage!: string;

  constructor(private route: ActivatedRoute, private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.episode$ = this.rickandmortyService.getEpisodeById(id);

      this.characters$ = this.episode$.pipe(
        switchMap(episode => {
          const characterObservables = episode.characters.map(characterUrl => {
            return this.rickandmortyService.getCharacterByUrl(characterUrl);
          });
          return forkJoin(characterObservables).pipe(
            map(characters => {
              return characters.map(character => {
                return {
                  name: character.name,
                  image: character.image
                };
              });
            }),
            catchError((error: string) => {
              this.errorMessage = error;
              return EMPTY;
            })
          );
        })
      );
    });
  }
}