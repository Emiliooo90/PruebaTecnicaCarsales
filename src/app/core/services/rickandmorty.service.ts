import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeResults } from '../../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getEpisodesList(): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>('https://rickandmortyapi.com/api/episode')
  }
}
