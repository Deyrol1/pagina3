import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(private http:HttpClient ) { }


   factura = "http://localhost:3000/facturas";
  
  facturas(){
     return this.http.get(this.factura);
   }
}
