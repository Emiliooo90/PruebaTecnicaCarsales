import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import  { RickandmortyService } from '../core/services/rickandmorty.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Episode } from '../interfaces/episode';
import { ErrormessageComponent } from '../errormessage/errormessage.component';

@Component({
  selector: 'app-episodedetails',
  standalone: true,
  imports: [ErrormessageComponent, CommonModule],
  templateUrl: './episodedetails.component.html',
  styleUrl: './episodedetails.component.css'
})
export class EpisodedetailsComponent implements OnInit {
  public episode$!: Observable<Episode>;
  public errorMessage!: string;
  constructor(private route: ActivatedRoute, private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.episode$ = this.rickandmortyService.getEpisodeById(id).pipe(catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      }));
    });
  }
}