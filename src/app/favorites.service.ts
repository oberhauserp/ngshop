import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog'


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
private favData: Dog[] = [];
  constructor() { }


  all(): Observable<Dog[]>
  {
    console.log(this.favData)
    return of(this.favData)
  }

  add(dog)
  {
    this.favData.push(dog)
    console.log(this.favData)
  }

}