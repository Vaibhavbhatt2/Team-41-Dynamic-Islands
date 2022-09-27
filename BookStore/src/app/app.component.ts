import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { FormGroup,FormControl } from '@angular/forms';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
  login:boolean=false;
  nameOfUser!:string;
  constructor(private http:UserserviceService){}

  logout(){
    this.login=false;
    Swal.fire("You have been logged out Sucessfully!!",'','success');
  }
}
