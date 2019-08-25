//question strings
var question1 = 'earth';
var question2 = 'javascript';
var question3 = '8086';
var question4 = 'iphone';
var question5 = 'model 3';

//correct answers
var score = 0;

var question1 = prompt('What Planet do we live on?');
if (question1.toLowerCase() === 'earth') {
  score+=1;
} 

var question2 = prompt('What is the only language a web browser can read');
if (question2.toLowerCase() === 'javascript') {
  score+=1;
} 


var question3 = prompt("What was Intel's first x86 CPU");
if (question3.toLowerCase() === '8086') {
  score+=1;
}  

var question4 = prompt('What was the first heavily adpoted SmartPhone');
if (question4.toLowerCase() === 'iphone') {
  score+=1;
} 
var question5 = prompt('What model was the first Tesla Vehicle designed for the masses?');
if (question5.toLowerCase() === 'model 3') {
  score+=1;
} 
  
//output results  
if(score > 4) {
 document.write("You have Earned the Gold Crown!, and got " +score );
} else if (score>=3)
{
 document.write("You have Earned the Silver Crown!, and got " +score );
  }
  else if (score>=1)
  {
     document.write("You have Earned the Bronze Crown!, and got " +score);
  } else  {
      document.write("Sorry you got " +score );
        
  }
 
