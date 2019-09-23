export class Post {

  title: string;
  message: string;
  postedOn: string;
  votes: number;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.postedOn = new Date().toString();
    console.log(this.postedOn);
    this.votes = 0;
  }

}
