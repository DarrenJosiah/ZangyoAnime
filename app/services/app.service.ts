import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeByIdSearchResult } from '../models/AnimeByIdSearchResult.model';
import { AnimeByTitleSearchResult } from '../models/AnimeByTitleSearchResult.model';
import { AnimeCharactersByIdSearchResult } from '../models/AnimeCharactersByIdSearchResult.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // private URL = "https://api.jikan.moe/v4/anime?q=spy x family&limit=20";

  constructor(private http : HttpClient) { }

  getAnimeByTitle(userInput: string) : Observable<AnimeByTitleSearchResult> {
    // spy x family
    return this.http.get<AnimeByTitleSearchResult>(`https://api.jikan.moe/v4/anime?q=${userInput}`);
  }

  getAnimeByID(userInput: number) : Observable<AnimeByIdSearchResult> {
    // jujutsu kaisen
    return this.http.get<AnimeByIdSearchResult>(`https://api.jikan.moe/v4/anime/${userInput}`);
  }

  // getAnimeCharactersById(userInput: number) : Observable<AnimeCharactersByIdSearchResult> {
  //   return this.http.get<AnimeCharactersByIdSearchResult>(`https://api.jikan.moe/v4/anime/${userInput}/characters`);
  // }

  getTopAnime() : Observable<any> {
    return this.http.get<any>(`https://api.jikan.moe/v4/top/anime`);
  }

  getAnimeGenres() : Observable<any> {
    return this.http.get<any>(`https://api.jikan.moe/v4/genres/anime`);
  }  
}
