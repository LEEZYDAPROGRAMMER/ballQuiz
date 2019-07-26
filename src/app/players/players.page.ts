import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
playerss= []
photoUrl
  constructor(public quiz:QuizService) {
    this.playerss=this.quiz.getPlayers()
   
   }
 getCat()
  {

    this.quiz.getCat()
  }
sendPerson(name)
{

    this.quiz.sendPerson(name)
}
  ngOnInit() {
  }

 
}
