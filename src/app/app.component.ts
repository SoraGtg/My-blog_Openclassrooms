import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCOSq5Z4wnYYB38tbzs2CVrgVh5P64KTcE",
      authDomain: "http-client-demo-e17fa.firebaseapp.com",
      databaseURL: "https://http-client-demo-e17fa.firebaseio.com",
      projectId: "http-client-demo-e17fa",
      storageBucket: "http-client-demo-e17fa.appspot.com",
      messagingSenderId: "578418698884",
      appId: "1:578418698884:web:8c41738c665dd7b1f830d1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
