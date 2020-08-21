import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-model-repo-menu',
  templateUrl: './model-repo-menu.component.html',
  styleUrls: ['./model-repo-menu.component.css']
})
export class ModelRepoMenuComponent implements OnInit {

  constructor(
    private httpClient: HttpClientService
  ) { }

  ngOnInit(): void {
  }

  public async listGits(): Promise<void> {

  }

}
