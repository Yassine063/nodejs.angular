import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { WttrObject } from '../../../../../common/weather';

@Component({
  selector: 'app-p-heure',
  templateUrl: './p-heure.component.html',
  styleUrls: ['./p-heure.component.css']
})
export class PHeureComponent implements OnInit {

  public donnees: WttrObject[] = [];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {

    this._weatherService.data.subscribe({
      
      next: (donnees) => {
        this.donnees = donnees;
        console.log(this.donnees)
      },

      error: (error) => console.error(error)

    })

  }
  }
