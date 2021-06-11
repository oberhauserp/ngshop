import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog'
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  Title:string = "Dog List";
  dogs: Dog[] = [];
  favs: Dog[] = []
  popfav: boolean = false;

  constructor(private dogService: DogsService, private favService: FavoritesService) { 
  }

  ngOnInit(): void {
    this.dogService.all().subscribe(dogdata => this.dogs = dogdata);
    this.favService.all().subscribe(favdata => this.favs = favdata);
  }

  getAll()
  {
    this.popfav = false
    return this.dogService.all().subscribe(dogdata => this.dogs = dogdata);
  }

  getFavs()
  {
    this.popfav = true
    return this.favService.all().subscribe(favdata => this.favs = favdata);
  }

}
