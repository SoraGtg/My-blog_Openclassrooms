import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postsList: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postsList = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
