import { Component, OnInit,  Input, EventEmitter, Output  } from '@angular/core';
import { Factura } from 'src/app/modelos/factura';
@Component({
  selector: 'app-agrfact',
  templateUrl: './agrfact.component.html',
  styleUrls: ['./agrfact.component.scss'],
})
export class AgrfactComponent  implements OnInit {

  
  public facturas:Factura[] =[];
  item:any;
  // the data object to hold values from this component
  @Input() data: any

  // emitt an event to indicate the user has clicked on 
  // the delete button in this component
  @Output() onDelete = new EventEmitter<any>();
  
  
  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  valor=1;
  constructor() { 

 



  }


  miau(){
    this.data.total =this.data.cantidad * this.data.unidad;
  }

  ngOnInit() {
    this.data.id = new Date().getTime()
    this.data.unidad= this.valor;
    
  }
  deleteClicked(item) {
    this.onDelete.next(this.data)
  }
}
