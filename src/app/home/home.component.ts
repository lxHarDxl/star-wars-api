import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  starWarsPeople;
  isLoading = false;

  constructor(private starWars: StarWarsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.starWars.getApiPeople().subscribe( (dados) => {this.starWarsPeople = dados; this.isLoading = false; } );
    
  }

}
