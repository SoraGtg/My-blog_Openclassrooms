import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postedOn: Date;
  title: string;
  message: string;
  votes = 0;


  constructor(title: string, message: string) {
    this.postedOn = new Date();
    this.title = title;
    this.message = message;
  }

  ngOnInit() {
  }

}
