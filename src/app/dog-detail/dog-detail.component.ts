import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';
import {FavoritesService } from '../favorites.service'

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Input() id: any;
  likes: number = 0;

  constructor(private dogService: DogsService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  addLike()
  {
    this.likes += 1
  }

  addFavorite()
  {

    this.favoritesService.add(this.dog)
  }
}
