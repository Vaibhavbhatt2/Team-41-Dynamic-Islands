import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { Book } from '../book';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  login:boolean = false;
  book: Book[] | undefined;
  sample:Book[] | undefined;
  name!:string;
  tempName!:any;
  constructor(private app:AppComponent,private userService: UserserviceService) 
  {
    this.login = this.app.login;
    
    
   }

  ngOnInit(): void {
    this.getfavoritelist();
  }
  
  private getfavoritelist(){
    this.userService.getfavoritenames(this.app.nameOfUser).subscribe(data => {
      console.log(data)
     this.book=data;
     if(this.book.length==0)
     {
      //alert("Favorites are not added yet!!");
      Swal.fire('Favorites are not added yet!!','','info');
     }
    });
  }

  deleteBook(id: number){
    this.userService.deletebook(id).subscribe( data => {
      console.log(data);
      //alert("Deleted successfully!!");
      Swal.fire('Record deleted sucessfully!!','','success');
      this.getfavoritelist();
    })
  }
}
