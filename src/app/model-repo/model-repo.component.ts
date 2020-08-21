import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-repo',
  templateUrl: './model-repo.component.html',
  styleUrls: ['./model-repo.component.css']
})
export class ModelRepoComponent implements OnInit {


  public devGitsJson: string;

  constructor(
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

  }



}
