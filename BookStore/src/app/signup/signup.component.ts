import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';  
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: User = new User();
  constructor(private userService: UserserviceService,
    private router: Router) { }
     
    
    userForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
  
    })

  ngOnInit(): void {
  }
  get name(){
    return this.userForm.get('name');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  get phone(){
    return this.userForm.get('phone');
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
     // alert("Registered Successfully!!!");
     Swal.fire("Registered Sucessfully",'','success');
      this.goToUserList();
    },
    error => 
    //console.log(error)
    //alert("Username or Password or EmailId already exits"));
    Swal.fire("Invalid Credentials!!",'','error'));
  }
  goToUserList(){
    this.router.navigate(['/login']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
