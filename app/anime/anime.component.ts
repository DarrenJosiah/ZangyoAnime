import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeByIdSearchResult } from '../models/AnimeByIdSearchResult.model';
import { AnimeByTitleSearchResult, Daum } from '../models/AnimeByTitleSearchResult.model';
import { AnimeCharactersByIdSearchResult } from '../models/AnimeCharactersByIdSearchResult.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  // From RouterLink
  parentData: any;

  searchForm: FormGroup;
  animeData?: AnimeByIdSearchResult;
  animeCharactersData?: AnimeCharactersByIdSearchResult;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private appService : AppService
  ) {
    this.parentData = this.router.getCurrentNavigation()?.extras.state;
    console.log('state is ' + this.parentData.animeId);
    
    this.searchForm = this.fb.group({
      animeTitle: [null, [Validators.required, Validators.maxLength(14)]]
    })
  }

  ngOnInit(): void {
    this.searchAnimeByID();
    // this.searchAnimeCharactersById();
  }

  searchAnimeByID() {
    // eg. Jujutsu Kaisen = mal_id: 40748
    this.appService.getAnimeByID(this.parentData.animeId)
    .subscribe(
      res => this.onSuccessAnime(res),
      err => console.log(err)
    );
  }
  onSuccessAnime(res: AnimeByIdSearchResult) {
    this.animeData = res;
    // this.animeData = this.anime.data[0];
    console.log(this.animeData);
  }

  // searchAnimeCharactersById() {
  //   // eg. Jujutsu Kaisen = mal_id: 40748
  //   this.appService.getAnimeCharactersById(this.parentData.animeId)
  //   .subscribe(
  //     res => this.onSuccessAnimeCharacters(res),
  //     err => console.log(err)
  //   );
  // }
  // onSuccessAnimeCharacters(res: AnimeCharactersByIdSearchResult) {
  //   this.animeCharactersData = res;
  //   console.log('Characters result = ' + JSON.stringify(this.animeCharactersData));
  // }

  onError() {
    console.log('ERROR');
  }
}
