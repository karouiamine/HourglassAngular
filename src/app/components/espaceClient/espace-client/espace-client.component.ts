import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  id: number;
  constructor() { }

  ngOnInit() {
   this.id = 1;
  }

}
