import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, map, retry, share, catchError } from 'rxjs';
import { EpisodeResults, Episode, Character, ResponseInfoResults } from '../../interfaces/episode';
import { environment } from '../../../environments/environment';

interface CharacterDetails {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Character[]> {
    return this.http.get<ResponseInfoResults>(`${environment}/character`).pipe(
      retry(1),
      map((res: ResponseInfoResults) => res?.results),
      share(),
      catchError(() => EMPTY));
  }

  getEpisodesList(page: number = 1): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>(`${environment.apiUrlBase}/episode?page=${page}`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${environment.apiUrlBase}/episode/${id}`);
  }

  searchEpisode(query: string): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>(`${environment.apiUrlBase}/episode/?name=${query}`);
  }

  filterCharacter(name: string): Observable<Character[]> {
    const API = `${environment.apiUrlBase}/character/?name=${name}`;
    return this.http.get<ResponseInfoResults>(API).pipe(
      map((res: ResponseInfoResults) => res?.results)
    )
  }

  getCharacterByUrl(url: string): Observable<CharacterDetails> {
    return this.http.get<Character>(url).pipe(
      map(character => {
        return {
          name: character.name,
          image: character.image
        };
      })
    );
  }
}