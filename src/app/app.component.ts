import { Component } from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new PostComponent("New challenges", "I love these new challenges on kaggle !"),
    new PostComponent("Life sucks...", "My bae dumped me for some other guy :'( feeling so desperate..."),
    new PostComponent("What if ?...", "Hey wassup ppl ! what do you guys think of Chinese restaurant owners " +
      "selling sushi ? Personnally it doesn't bother me but I'd love to eat some real Japanese sushi from Japan sometime" +
      ", too bad I'm low on cash x)")
  ];

}
