import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number
  user: User = new User;
  login:boolean=false;
  constructor(private app: AppComponent,private route: ActivatedRoute, private userService: UserserviceService,private router: Router) 
  {
    this.login=this.app.login;
   }

  ngOnInit(): void {
   
  }
  saveUser1(){
    this.userService.forgetPassword(this.user).subscribe( data =>{
      console.log(data);
      //alert("Password Reset Successfull!!!");
      Swal.fire('Password Reset Sucessfully!!!','','success');
      this.goToUserList();
    },
    error =>
    //console.log(error)
    this.goToback());
    
  }
  goToUserList(){
    this.router.navigate(['/home']);
  }
  goToback(){
    //alert("Email Id is not present in database. Give valid Email Id to change the Password.");
    Swal.fire("Email Id bad credential",'','warning');
  }
  onSubmit(){
    console.log(this.user);
    
    this.saveUser1();
    
  }
}



