import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  stateData: any;
  _genre_name?: number;

  anime!: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService : AppService
  ) {
    this.stateData = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
    
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    .subscribe({
      next: (res) => {
        this.stateData = res;
        this._genre_name = this.stateData.genre_name;
        console.log(this.stateData.genre_name);
      }
    })

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