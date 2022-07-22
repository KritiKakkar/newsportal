import { Newspost } from '../newspost';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable, Subscription, switchMap } from 'rxjs';

import { NewspostService } from '../newspost.service';

@Component({
  selector: 'app-newspost-detail',
  templateUrl: './newspost-detail.component.html',
  styleUrls: ['./newspost-detail.component.css']
})
export class NewspostDetailComponent implements OnInit {

  news$! : Observable<Newspost> ;
  subs! : Subscription;
 
  constructor(private route:ActivatedRoute,
    private router: Router,
    private newspostService: NewspostService,
    private titleService: Title) { }

  ngOnInit() : void{
  //   this.route.paramMap.subscribe(param =>{
  //     console.log(param)
      

  //   // let pid = param.get('newsId')
  //   // this.newspostService.getNew(pid).subscribe(res=>{
  //   //   console.log(res)
  //   // })
  // })
  // this.newspostService.getNew('N2').subscribe(param =>{
  //   console.log(param)
  // })

   
  //  this.route.paramMap.subscribe(param=>{
  //   this.subs = this.newspostService.getNew(param.get('id')).subscribe(res=>{
  //    // this.subs =  console.log(res)
  //   this.news$ = res;
  //   })
    
      
 // })
    this.news$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
      this.newspostService.getNew(params.get('id'))
      )
    );
    this.titleService.setTitle('News Detail');
   }

}
