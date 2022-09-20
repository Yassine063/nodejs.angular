import { Component, OnInit } from '@angular/core';
import { WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-actuel',
  templateUrl: './actuel.component.html',
  styleUrls: ['./actuel.component.css']
})
export class ActuelComponent implements OnInit {

  

  constructor(private _weatherService: WeatherService) { }
  
  public donnees: WttrObject[] = [];
  
  ngOnInit(): void {

    this._weatherService.data.subscribe({
      
      next: (donneesMeteos) => {
        this.donnees = donneesMeteos;
        console.log("meteos actuel => " , donneesMeteos)
      },

      error: (error) => console.error(error)

    })

  }
  }


