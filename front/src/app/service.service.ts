import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8080/api/';
  constructor(private http : HttpClient,private toastr: ToastrService) { }

  addTache(data:any){
    return this.http.post(this.url+"AddTache",data);
  }
  showSuccess(message : string) {
    this.toastr.success(message);
  }
  showError(message : string) {
    this.toastr.error(message);
  }
  getTache(){
    return this.http.get(this.url+"AllTache");
  }
  updateTache(data:any){
    return this.http.put(this.url +"UpdateTache",data);
  }
  tacheById(id:number){
    return this.http.get(this.url+"TacheById/"+id)
  }
  deleteTache(id:any){
    return this.http.delete(this.url+"deleteTache/"+id);
  }
 
}
