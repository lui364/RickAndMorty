import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
 constructor(private router:Router,private toastrService:ToastrService){}


  buscar(user:any){
    if(user !== ''){
      this.router.navigate(['/listado'],{
        queryParams:{u:user}
      })
      return;
    }
    this.toastrService.error('Por favor ingrese un nombre', 'HUBO UN ERROR', {
      positionClass:'toast-top-left'
    });
  }
}
