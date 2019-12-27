import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-informations',
  templateUrl: './coach-informations.component.html',
  styleUrls: ['./coach-informations.component.css']
})
export class CoachInformationsComponent implements OnInit {
  id: string;
  constructor() { }

  ngOnInit() {
    this.id = localStorage.getItem('coachId');
    console.log(this.id);
  }

}