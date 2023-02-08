import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeByTitleSearchResult } from './models/AnimeByTitleSearchResult.model';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title!: "Zangyo";
  anime!: AnimeByTitleSearchResult;

  constructor(
    private router: Router,
    private appService : AppService
  ) {}

  ngOnInit(): void {
      // this.searchAnime();

  }

  searchAnime() {
    this.appService.getAnimeByTitle("spy x family")
    .subscribe(
      res => this.onSuccess(res),
      err => console.log(err)
    );
  }

  onSuccess(res: AnimeByTitleSearchResult) {
    this.anime = res;
    console.log(this.anime);
  }
} 
