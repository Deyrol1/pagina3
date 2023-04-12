import { Component } from '@angular/core';

import { BasedatosService } from '../servicios/basedatos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {





  factura:any;


  constructor( private base: BasedatosService) {



    
    this.base.facturas().subscribe(data=>{
      this.factura=data;
    })
    
    
    
   }


}

