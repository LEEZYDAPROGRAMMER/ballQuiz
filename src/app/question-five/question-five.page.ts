import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.page.html',
  styleUrls: ['./question-five.page.scss'],
})
export class QuestionFivePage implements OnInit {
  answerFive
  question=[]
  constructor(public quiz:QuizService) {
    this.question=[]
    this.question=quiz.retQuestion()
   }

  ngOnInit() {
  }
  
  getAnswerFive(event)
  {
  
    this.answerFive=event.detail.value
  }
  quest5()
  {
     this.quiz.quest5()
 
  }
  score(answerFive,theAnswer)
  {
    this.quiz.score(answerFive,theAnswer)

  }
}
