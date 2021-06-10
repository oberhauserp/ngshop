import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import DOGS from './dogdata.json';
import { Dog } from './dog'

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData: Dog[] = DOGS;

  constructor() { }

all(): Observable<Dog[]>
{
  return of(this.dogData);
}

get(dogID: string): Dog[] 
{
  return this.dogData.filter(dog => dog.id === dogID)
}

}
