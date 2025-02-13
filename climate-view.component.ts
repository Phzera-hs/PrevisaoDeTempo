import { Component } from '@angular/core';
import { TransferClimateService } from '../transfer-climate.service';

@Component({
  selector: 'app-climate-view',
  imports: [],
  templateUrl: './climate-view.component.html',
  styleUrl: './climate-view.component.css',
})
export class ClimateViewComponent {
  title = 'PrevisaoDoTempoAPI';
  receivedData: any;

  constructor(private transferClimate: TransferClimateService) {}

  ngOnInit(): void {
    this.transferClimate.currentData.subscribe((data) => {
      this.receivedData = data;
      console.log('Dados recebidos ', this.receivedData);
    });
  }

  BuscaCidade() {
    const cidadeClimateView = document.querySelector(
      '.input-cidade'
    ) as HTMLInputElement;
    const cidade = cidadeClimateView.value;
    console.log(cidade);

    this.transferClimate.changeData({ cidade });
  }
}
