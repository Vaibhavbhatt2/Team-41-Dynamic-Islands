import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { take } from 'rxjs';
import { AppComponent } from '../app.component';
import { Book } from '../book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results:any=[];
  searchValue="";
  searchForm=new FormGroup({
    data: new FormControl('')
  })
  book: Book = new Book();
  showData:boolean = false;
  login:boolean=false;
  authorname!:string;
  name!:string;
  //,private bookDetails:Bookdetails,private bookdetailsService:BookdetailsserviceService 
  constructor(private app:AppComponent,private http:UserserviceService)
  {
    this.login=this.app.login;
    this.name=this.app.nameOfUser;
  }
  
  value!:any[];
  //bookDetails!:any[];
  ngOnInit(): void {
  }
  
  search(){
    this.http.searchBook(this.searchForm.value).pipe(take(20)).subscribe((res:any)=>{
      console.log(res)
      this.results=res.docs;
      if(this.results.length==0)
      {
        //alert("No match found");
        Swal.fire("No match found",'','info');
      }
      console.warn(this.results)
    })
    this.showData=true;
    this.searchValue=this.searchForm.value.data
  }
  wishlistdata(title:string,author_name:string,publish_date:string,publisher:string,language:string,publish_year:string)
  {
    //alert("Added to your wishlist!!!");
    console.log("Author Name: "+this.results.authorName);
    this.book.title=title;
    this.book.publisher=publisher[0];
    this.book.publish_date=publish_date[0];
    this.book.authorName=author_name[0];
    this.book.username=this.name;
    this.book.language=language[0];
    this.book.publish_year=publish_year
   this.http.createBook(this.book).subscribe( data =>{
   console.log(data);
  //alert("book stored Successfully!!!");
  Swal.fire("Added to your Wishlist!!!",'','success');
   },
   error => 
   //console.log(error)
  alert("error in book storage"));
    };

  }   
   



