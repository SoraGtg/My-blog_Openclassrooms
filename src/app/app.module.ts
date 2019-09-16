import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponentComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
