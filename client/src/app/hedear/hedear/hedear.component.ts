import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-hedear',
  templateUrl: './hedear.component.html',
  styleUrls: ['./hedear.component.css']
})
export class HedearComponent implements OnInit {

public locations: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  updateLocation(){
    this.weatherService.getWeathers(this.locations).subscribe();
  }

}
