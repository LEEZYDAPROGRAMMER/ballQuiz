import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.page.html',
  styleUrls: ['./question-three.page.scss'],
})
export class QuestionThreePage implements OnInit {
  answerThree
  question=[]
  constructor(public quiz:QuizService) { 
    this.question=[]
    this.question=quiz.retQuestion()
  }

  ngOnInit() {
  }
  getAnswerThree(event)
  {
  
    this.answerThree=event.detail.value
  }
  quest3()
  {
     this.quiz.quest3()
 
  }
  quest4()
  {
     this.quiz.quest4()
 
  }
  score(answerThree,theAnswer)
  {
    this.quiz.score(answerThree,theAnswer)
    
  }
}
