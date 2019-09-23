import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitPosts();
  }

  vote(like: boolean, post: Post) {
    const postIndexToUpdate = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    if(like) {
      this.posts[postIndexToUpdate].votes++;
    } else {
      this.posts[postIndexToUpdate].votes--;
    }
    this.savePosts();
    this.emitPosts();
  }

}
