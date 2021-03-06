import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.html',
  styleUrls: ['./post-list-item-component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  OnVote(like: boolean) {
    this.postsService.vote(like, this.post);
  }

  onDeletePost() {
    this.postsService.deletePost(this.post);
  }

}
