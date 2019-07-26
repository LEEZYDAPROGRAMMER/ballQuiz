import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.page.html',
  styleUrls: ['./question-two.page.scss'],
})
export class QuestionTwoPage implements OnInit {
answerTwo
question=[]
  constructor(public quiz:QuizService) { 
    this.question=[]
    this.question=quiz.retQuestion()
  }

  ngOnInit() {
  }
  getAnswerTwo(event)
  {
  
    this.answerTwo=event.detail.value
  }
  quest2()
 {
    this.quiz.quest2()

 }
 quest3()
 {
    this.quiz.quest3()

 }
 score(answerTwo,theAnswer)
 {
  this.quiz.score(answerTwo,theAnswer)
   
 }
}
