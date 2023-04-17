

import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@capacitor/core/types/core-plugins';
import { Observable, Subject } from 'rxjs';
import { Factura } from '../modelos/factura';
import { Producto } from '../modelos/producto';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {


  public facturas$ = new Subject<Factura[]>();
  public factura$ = new Subject<Factura>();
  public facturas : Factura[] =[];
  public factura : Factura ;


  public categorias$ = new Subject<Categoria[]>();
  public categoria$ = new Subject<Categoria>();
  public categorias : Categoria[] =[];
  public categoria : Categoria ;
  

  public productos$ = new Subject<Producto[]>();
  public producto$ = new Subject<Producto>();
  public productos : Producto[] =[];
  public producto : Producto ;


  constructor(private http:HttpClient ) { }


   url = "http://localhost:3000/";
  
 

   async todasfacturas ()  {

    this.facturas =[];

    const opt ={
      url: this.url+"facturas"
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el rezponze ez:",response);
   
    response.data.forEach((item:any)=>{
      console.log("el item ez:",item);
      this.factura= new Factura();
      this.factura.set(item);
      this.facturas.push(this.factura);

    });

    console.log("laz facturaz zon:",this.facturas);
    this.facturas$.next(this.facturas);
    console.log("laz facturaz$ zon:",this.facturas$);
    return this.facturas$;
   }




  todasfacturas$(): Observable<Factura[]>{
    return this.facturas$.asObservable();
  }


  async  regfac(){



    const opt ={
      url: this.url+"facturas",
      data: {
        "fecha": "2023-04-14T02:24:10.261Z",
        "articulos": {},
        "subtotal": 0,
        "iva": 0,
        "descuento": 3,
        "total": 0,
      },
      headers: {"content-type":"application/json" }
    };
 
  

    const response: HttpResponse = await CapacitorHttp.post(opt);


  }


  async todascategorias ()  {

    this.categorias =[];

    const opt ={
      url: this.url+"categorias"
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el rezponze ez:",response);
   
    response.data.forEach((item:any)=>{
      console.log("el item ez:",item);
      this.categoria= new Categoria();
      this.categoria.set(item);
      this.categorias.push(this.categoria);

    });

    console.log("laz categoriaz zon:",this.categorias);
    this.categorias$.next(this.categorias);
    console.log("laz categoriaz$ zon:",this.categorias$);
    return this.categorias$;
   }




  todascategorias$(): Observable<Categoria[]>{
    return this.categorias$.asObservable();
  }


  async todosproductos (dato:string)  {

    this.productos =[];

    const opt ={
      url: "http://localhost:3000/categorias?filter[include][]=productos&filter[where][nombre]="+dato
    }

    const response: HttpResponse = await CapacitorHttp.get(opt);


    console.log("el rezponze ez:",response);
   
    let uga: any;
    response.data.forEach((item:any)=>{
      console.log("el item ez uga:",item);

      uga = item.productos;
      uga.forEach((item:any) => {
        this.producto= new Producto();
        this.producto.set(item);
  
  
        this.productos.push(this.producto);
      });
    
  

    });

    console.log("loz productoz zon:",this.productos);
    this.productos$.next(this.productos);
    console.log("laz productoz$ zon:",this.productos$);
    return this.productos$;
   }




  todosproductos$(): Observable<Producto[]>{
    return this.productos$.asObservable();
  }






  }

