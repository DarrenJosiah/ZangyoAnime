import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeByTitleSearchResult } from '../models/AnimeByTitleSearchResult.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  anime!: any;

  constructor(
    private router: Router,
    private appService : AppService
  ) {}

  ngOnInit(): void {
    this.searchTopAnime();
  }

  searchTopAnime() {
    this.appService.getTopAnime()
    .subscribe(
      res => this.onSuccess(res),
      err => console.log(err)
    );
  }

  onSuccess(res: any) {
    this.anime = res;
    console.log(this.anime);
  }

  onError() {
    console.log('ERROR');
  }

}
