import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog'

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  Title:string = "Dog List";
  dogs: Dog[] = [];

  constructor(private dogService: DogsService) { 
  }

  ngOnInit(): void {
    this.dogService.all().subscribe(data => this.dogs = data);
  }

  getAll()
  {
    return this.dogService.all().subscribe(data => this.dogs = data);
  }

}
