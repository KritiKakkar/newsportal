import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Newspost } from '../newspost';
import { NewspostService } from '../newspost.service';



@Component({
  selector: 'app-newspost-list',
  templateUrl: './newspost-list.component.html',
  styleUrls: ['./newspost-list.component.css']
})
export class NewspostListComponent implements OnInit {

  title='News';
  news!: Newspost[];
  error!: {} ;
  sub!:Subscription;
 // user : any;

  
  constructor(private titleService : Title,
    private newspostService: NewspostService) { }

  ngOnInit() {
     
  this.titleService.setTitle(this.title);
   this.newspostService.getNews().subscribe((data)=>this.news=data)
  // {
  //  //next: (data :  any ) => this.news = data,   
  //   next:  (data: Newspost[]) => this.news = data,
  //error: error => this.error = error
  // });
  //console.log("hii");
  }


}
