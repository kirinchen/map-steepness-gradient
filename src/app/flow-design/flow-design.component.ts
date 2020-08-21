import { HttpClientService } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare let $: any;

declare let mermaid: any;

@Component({
  selector: 'app-flow-design',
  templateUrl: './flow-design.component.html',
  styleUrls: ['./flow-design.component.css']
})
export class FlowDesignComponent implements OnInit {


  constructor(
  ) { }

  async ngOnInit(): Promise<void> {
    this.drawChart();


  }
  private drawChart(): void {
    const graphDefinition = $('#graphDiv').text();
    this.drawByCode(graphDefinition);
  }

  private drawByCode(code: string): void {
    const insertSvg = (svgCode, bindFunctions) => {
      $('#graphDiv').html(svgCode);
    };
    const graph = mermaid.mermaidAPI.render('graph', code, insertSvg);
  }



}
