import { Component, Input, OnInit } from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postsList: [PostComponent];

  constructor() { }

  ngOnInit() {
  }

}
