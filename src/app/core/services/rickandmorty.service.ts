import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeResults, Episode } from '../../interfaces/episode';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getEpisodesList(): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>(`${environment.apiUrlBase}/episode`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${environment.apiUrlBase}/episode/${id}`);
  }

  searchEpisode(query: string): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>(`${environment.apiUrlBase}/episode/?name=${query}`);
  }
}
