import { BasedatosService } from './../../servicios/basedatos.service';

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Factura } from 'src/app/modelos/factura';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  inputRowValues = [{}];





  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  public facturas:Factura[] =[];



  
  dato={
    id:0,                          
    fecha: this.fechaf,
    articulos:this.inputRowValues ,
    subtotal:13,
    iva:12,
    descuento:32,
    total:4
  }
 

  constructor(public navCtrl: NavController, private base: BasedatosService) {



    
   }



   generar(){
    let factura = new Factura();

    let data: any;

  
    factura.set(this.dato);

    this.facturas.push(factura)


    console.log("factura",this.facturas);
   }


   correo:any;
   ngOnInit() {


 


   }
 












  addRow() {
    this.inputRowValues.push({})
  }

  _event:any;
  // removes entry from the  inputRowValues array based on the id
  onDelete(_event) {
    console.log("el evento da:",_event)
    this.inputRowValues = this.inputRowValues.filter((i: any) => i.id !== _event.id)
  }

  


  
}
