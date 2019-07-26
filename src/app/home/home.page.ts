import { Component } from '@angular/core';
import { UserServiceService } from '../UserService/user-service.service';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
playerss
  constructor(public user: UserServiceService,public quiz:QuizService) {
    this.playerss=this.quiz.getPlayers()
  }
  logout()
  {

    this.user.logout()
  }
  getCat()
  {

    this.quiz.getCat()
  }
  ngOnInit() {
  }
}
