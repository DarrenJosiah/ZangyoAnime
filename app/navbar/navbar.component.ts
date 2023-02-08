import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeByTitleSearchResult } from '../models/AnimeByTitleSearchResult.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  genres!: any;

  constructor(
    private appService : AppService
  ) {}

  ngOnInit(): void {
    this.searchAnimeGenre();
  }

  // Search Genre
  searchAnimeGenre() {
    this.appService.getAnimeGenres()
    .subscribe(
      res => this.onSuccess(res),
      err => console.log(err)
    );
  }
  onSuccess(res: any) {
    this.genres = res;
    console.log(this.genres);
  }

  onError() {
    console.log('ERROR');
  }
  
  // onClickNavbarSearch() {
  //   let userInput = this.searchForm.get(['animeTitle'])!.value;
  //   console.log('userInput = ' + userInput);
  //   this.router.navigate(['/'], { state: { userInput: userInput, fromNavigation: true } });
  // }
}