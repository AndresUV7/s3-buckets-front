import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargador-archivos',
  templateUrl: './cargador-archivos.component.html',
  styleUrls: ['./cargador-archivos.component.css']
})
export class CargadorArchivosComponent implements OnInit {

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
