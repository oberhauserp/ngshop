import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Input() id: any;
  likes: number = 0;

  constructor(private dogService: DogsService) { }

  ngOnInit(): void {
  }

  addLike()
  {
    this.likes += 1
    console.log(this.likes)
  }
}
