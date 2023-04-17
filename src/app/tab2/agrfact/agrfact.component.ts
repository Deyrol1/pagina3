import { Subscription } from 'rxjs';
import { Component, OnInit,  Input, EventEmitter, Output  } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria';
import { Factura } from 'src/app/modelos/factura';
import { BasedatosService } from 'src/app/servicios/basedatos.service';
import { Producto } from 'src/app/modelos/producto';
@Component({
  selector: 'app-agrfact',
  templateUrl: './agrfact.component.html',
  styleUrls: ['./agrfact.component.scss'],
})
export class AgrfactComponent  implements OnInit {

  
  public categorias:Categoria[] =[];
  public categoriassub = new Subscription(); 
  
  public productos:Producto[] =[];
  public productossub = new Subscription(); 
  item:any;
  // the data object to hold values from this component
  @Input() data: any

  // emitt an event to indicate the user has clicked on 
  // the delete button in this component
  @Output() onDelete = new EventEmitter<any>();
  
  
  fecha = new Date();
  fechaf= this.fecha.toLocaleDateString();


  logs: string;
  valor=1;
  constructor(private base: BasedatosService) { 

 
    this.base.todascategorias()  ;

    this.categoriassub = this.base.todascategorias$().subscribe((res: Categoria[])=>{
  
      this.categorias = res;
  
      console.log("categoriaz",this.categorias);
  
    });


   

  }


  miau(){
    this.data.total =this.data.cantidad * this.data.unidad;
  }


  ngOnInit() {
    this.data.unidad= this.valor;
    
  }
  deleteClicked(item) {
    console.log("holaaaa",this.data.categoria);

  this.onDelete.next(this.data)
  
 




  
  }


 
  handleChange(e) {
    this.logs = (e.detail.value);
    console.log("el cozo da ezto:",this.logs);

    this.base.todosproductos(this.logs)  ;

    this.productossub = this.base.todosproductos$().subscribe((res: Producto[])=>{
  
      this.productos = res;
  
      console.log("prodcutoz",this.productos);
    });

  };
}
