import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AnimeByTitleSearchResult } from '../models/AnimeByTitleSearchResult.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchForm: FormGroup;
  anime!: AnimeByTitleSearchResult;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private appService : AppService
  ) {
    this.searchForm = this.fb.group({
      animeTitle: [null, [Validators.required, Validators.maxLength(14)]]
    })
  }

  ngOnInit(): void {}

  searchAnimeByTitle() {
    
    if (this.searchForm.get(['animeTitle'])!.value === null) {
      this.searchForm.controls['animeTitle'].setValue('Attack on Titan');
    }

    let userInput = this.searchForm.get(['animeTitle'])!.value;
    
    this.appService.getAnimeByTitle(userInput)
    .subscribe(
      res => this.onSuccess(res),
      err => console.log(err)
    );
  }

  onSuccess(res: AnimeByTitleSearchResult) {
    this.anime = res;
    console.log(this.anime);
  }

  onError() {
    console.log('ERROR');
  }

}
