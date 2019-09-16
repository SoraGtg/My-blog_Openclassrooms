import {Component, Input, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: PostComponent;

  constructor() { }

  ngOnInit() {
  }

  OnVote(like: boolean) {
    if (like) {
      this.post.votes++;
    } else {
      this.post.votes--;
    }
  }
}
