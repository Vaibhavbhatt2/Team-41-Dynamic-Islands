import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id!: number
  user: User = new User;
  constructor(private route: ActivatedRoute, private userService: UserserviceService,private router: Router,private app:AppComponent) { }
  login=false;
  username!:string;
  showMsg: boolean = false;
  ngOnInit(): void {
  }

  userForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })
  get name(){
    return this.userForm.get('name');
  }
  
  get password(){
    return this.userForm.get('password');
  }
  
  saveUser(){
    this.userService.Userlogin(this.user).subscribe( data =>{
      console.log(data);
      Swal.fire("Login Sucessfully",'','success');
      //alert("login Successfully!!!");
      //Swal.fire("login success");

      this.login=true;
      this.username=this.user.name;
      //this.showMsg= true;
      
      this.goToUserList();
    },
    error =>
    //console.log(error)
    this.goToback());
    
  }
  goToUserList(){
    this.app.login=true;
    this.app.nameOfUser=this.user.name;
    console.log(this.app.nameOfUser);
    this.router.navigate(['/home']);
  }
  goToback(){
    //alert("Username or Password does not exit.");
    Swal.fire("Invalid Credentials!!",'','warning');
    
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
