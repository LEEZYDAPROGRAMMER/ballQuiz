import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  database = firebase.database();

 players=[]
 question1=[]
 question1Options=[]
 question1All=[]

  userEmail
  playername
  photoUrl
  nameCurr

  answer
  question
  fake1
  fake2
finalscore=0
  
  constructor() { }

  retScore()
  {

    return this.finalscore
  }
  //get categories
getPlayers()
{

  return this.players
}
//return players
retQuestion()
{

  return this.question1All
}
  getCat()
  {
    this.players=[]
    var rootRef=this.database.ref().child("players")
    console.log(rootRef)
  // ...
 
   rootRef.on("child_added", snap =>{
     this.playername=(snap.child("name").val()); 
     this.photoUrl=(snap.child("photoUrl").val()); 
   
     this.players.push({name: this.playername,photoUrl:this.photoUrl })

    // console.log(this.playername)
    
     
   });
  
   console.log(this.players)

   
  }
//  return question 1 and options
sendPerson(name)
{
  
  this.nameCurr= name;
  console.log(this.nameCurr)

  //------------------------------------------------------------------- if its james 
  if(this.nameCurr=="james")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/jquestion1")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/jquestion1/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
 // if its curry 
 if(this.nameCurr=="curry")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/cquestion1")
  rootERef.once("value", (snap) =>{
    
 
    this.answer=""
    this.question=""
   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/cquestion1/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }

  // if its kawhi
  if(this.nameCurr=="kawhi")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/kquestion1")
  rootERef.once("value", (snap) =>{
    
    this.answer=""
    this.question=""
   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/kquestion1/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
//end function
}
//question 2 
 quest2()
 {
  this.nameCurr
  console.log(this.nameCurr)

  //------------------------------------------------------------------- if its james 
  if(this.nameCurr=="james")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/jquestion2")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/jquestion2/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
 // if its curry 
 if(this.nameCurr=="curry")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/cquestion2")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/cquestion2/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }

  // if its kawhi
  if(this.nameCurr=="kawhi")
  {
 
    //get question 

    // get first ref
  var rootERef=this.database.ref().child("/questions/kquestion2")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/kquestion2/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
//end function
}

 
//question 3
quest3()
 {
  
  console.log(this.nameCurr)

  //------------------------------------------------------------------- if its james 
  if(this.nameCurr=="james")
  {
 
    //get question 3

    // get first ref
  var rootERef=this.database.ref().child("/questions/jquestion3")
  rootERef.once("value", (snap) =>{
    
    this.answer=""
    this.question=""
   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/jquestion3/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
 // if its curry 
 if(this.nameCurr=="curry")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/cquestion3")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""


   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/cquestion3/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }

  // if its kawhi
  if(this.nameCurr=="kawhi")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/kquestion3")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/kquestion3/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
//end function
}
  
 
// question 4
quest4()
 {
  
  console.log(this.nameCurr)

  //------------------------------------------------------------------- if its james 
  if(this.nameCurr=="james")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/jquestion4")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/jquestion4/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All.splice(0,1)
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
 // if its curry 
 if(this.nameCurr=="curry")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/cquestion4")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/cquestion4/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
    this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }

  // if its kawhi
  if(this.nameCurr=="kawhi")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/kquestion4")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""
    
   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/kquestion4/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
//end function
}
  
 
// question 5
quest5()
 {
  
  console.log(this.nameCurr)

  //------------------------------------------------------------------- if its james 
  if(this.nameCurr=="james")
  {
 
    //get question 5

    // get first ref
  var rootERef=this.database.ref().child("/questions/jquestion5")
  rootERef.once("value", (snap) =>{
    
    this.answer=""
    this.question=""
   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/jquestion5/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
 // if its curry 
 if(this.nameCurr=="curry")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/cquestion5")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/cquestion5/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }

  // if its kawhi
  if(this.nameCurr=="kawhi")
  {
 
    //get question 1

    // get first ref
  var rootERef=this.database.ref().child("/questions/kquestion5")
  rootERef.once("value", (snap) =>{
    this.answer=""
    this.question=""

   // get question and answer
    this.answer=  snap.child("theAnswer").val()
    console.log(this.answer)
    this.question=  snap.child("theQuestion").val()
    console.log(this.question)

    //push in array
    this.question1=[]
    this.question1.push({theQuestion: this.question, theAnswer:this.answer })
    console.log(this.question1)
  
 //------------------------------------------ get options ref
 var root2Ref=this.database.ref().child("/questions/kquestion5/options")
  console.log(root2Ref)
// ...
root2Ref.once("value", snap =>{
  this.fake1=""
  this.fake2=""
  this.fake1=(snap.child("fake1").val()); 
  this.fake2=(snap.child("fake2").val()); 

  this.question1Options=[]
  this.question1Options.push({fake1: this.fake1, fake2:this.fake2 })
   console.log(this.question1Options) 
 
   this.question1All=[]
   this.question1All.push({theQuestion:this.question1[0].theQuestion,theAnswer:this.question1[0].theAnswer,fake1:this.question1Options[0].fake1,fake2:this.question1Options[0].fake2})
   console.log(this.question1All) 
 //-----------------------------------------final question


 //inner search close
});

//outer search close
  });
  console.log(rootERef)
  }
//end function
}
  
score(answer,theAnswer)
{
  if(answer==theAnswer)
  
  this.finalscore+=1
      
}



  //end
}
