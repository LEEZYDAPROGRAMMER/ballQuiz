import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
score
  constructor(public quiz: QuizService) {

    this.score =this.quiz.retScore()
   }

  ngOnInit() {
  }

}
