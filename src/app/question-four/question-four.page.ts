import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.page.html',
  styleUrls: ['./question-four.page.scss'],
})
export class QuestionFourPage implements OnInit {
  answerFour
  question=[]
  constructor(public quiz:QuizService) {
    this.question=[]
    this.question=quiz.retQuestion()
   }

  ngOnInit() {
  }
  getAnswerFour(event)
  {
  
    this.answerFour=event.detail.value
  }
  quest4()
  {
     this.quiz.quest4()
 
  }
  quest5()
  {
     this.quiz.quest5()
 
  }
  score(answerFour,theAnswer)
  {
    this.quiz.score(answerFour,theAnswer)
    
  }
}
