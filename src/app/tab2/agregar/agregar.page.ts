import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  inputRowValues = [{}];



  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  constructor(public navCtrl: NavController) { }

  addRow() {
    this.inputRowValues.push({})
  }

  _event:any;
  // removes entry from the  inputRowValues array based on the id
  onDelete(_event) {
    console.log(_event)
    this.inputRowValues = this.inputRowValues.filter((i: any) => i.id !== _event.id)
  }
  ngOnInit() {

  }

}
