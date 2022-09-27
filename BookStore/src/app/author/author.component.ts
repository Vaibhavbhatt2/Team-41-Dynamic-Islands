import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  login:boolean=false;
  letter!:string;
  i!: number;
  count!:number;
  constructor(private http:UserserviceService, private app:AppComponent) { 
    this.login=this.app.login;
  }
  results:any=[]
  ngOnInit(): void {
  }
  finalresult:any=[];
  searchAuthor(){
    this.http.searchAuthor().subscribe((res:any)=>{
      this.results=res.docs;
      console.warn(res);  
    })
  }
}
