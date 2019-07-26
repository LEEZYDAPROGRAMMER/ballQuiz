import { Component, OnInit } from '@angular/core';
import { QuizService } from '../QuizService/quiz.service';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.page.html',
  styleUrls: ['./question-one.page.scss'],
})
export class QuestionOnePage implements OnInit {
   answerOne
   
   question=[]
  constructor(public quiz:QuizService) {
    this.question=[]
     this.question=quiz.retQuestion()

   }

  ngOnInit() {
  }
//
getAnswerOne(event)
{

  this.answerOne=event.detail.value
}

sendPerson(name)
{

    this.quiz.sendPerson(name)
}
quest2()
{
   this.quiz.quest2()

}
score(answerOne,theAnswer)
{
  this.quiz.score(answerOne,theAnswer)
  
}
}
