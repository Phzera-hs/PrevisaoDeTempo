import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransferClimateService } from './transfer-climate.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa o HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true, // Isso define o componente como standalone
  imports: [HttpClientModule, RouterOutlet], // Inclua o HttpClientModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isColapsed = false;
  constructor(private transferClimate: TransferClimateService) {}

  private httpService = inject(HttpClient);

  cidades: string = '';
  cidadeAtual: string = '';
  key: string = '9c8914ab21a5d457df7e7e50cf8ea7e7';

  ngOnInit(): void {
    this.transferClimate.currentData.subscribe((data) => {
      if (data && data.cidade && data.cidade !== this.cidadeAtual) {
        this.cidades = data.cidade;
        this.cidadeAtual = this.cidades;
        this.loadCityData();
      }
    });
  }

  loadCityData(): void {
    this.httpService
      .request(
        'GET',
        `https://api.openweathermap.org/data/2.5/weather?q=${this.cidades}&appid=${this.key}&lang=pt_br`,
        {
          responseType: 'json',
        }
      )
      .subscribe((Response: any) => {
        console.log(Response);
        const temperatura = Response.main.temp - 273.15;
        const TemperaturaConvert = Math.round(temperatura);
        this.transferClimate.changeData({
          cidade: Response.name,
          temperatura: TemperaturaConvert + 1,
          clima: Response.weather[0].description,
          umidade: Response.main.humidity,
          icon: `https://openweathermap.org/img/wn/${Response.weather[0].icon}.png`,
        });
      });
  }

  sendData() {
    const data = { message: 'Hello from Sender Component' };
    this.transferClimate.changeData(data);
  }
}
