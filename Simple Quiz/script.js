//Open up the Chrome Developer Console first to view the questions of the QUIZ.

//IIFE to make our code private
(function(){
    function QuestionSet(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
}
 
//Diplay the Question with Options
QuestionSet.prototype.DisplayQuestions = function(){
    console.log(this.question);
    
    for(var i = 0; i< this.options.length; i++){
        console.log(i + ': ' + this.options[i]);
    }  
}


//checks the answer
QuestionSet.prototype.CheckAnswer = function(ans, call){
    var scorenow;
    if(ans === this.answer){
        console.log('-------------------------------');
        console.log('Correct Answer!');
        console.log('-------------------------------');
        scorenow = call(true);
    }
    else{
        console.log('-------------------------------');
        console.log('Oops! Wrong Answer... Try Again');
        console.log('-------------------------------'); 
        scorenow = call(false);        
    }
    DisplayScore(scorenow);
}

function DisplayScore(now){
    console.log('-------------------------------');
    console.log('Current Score: ' + now);
    console.log('-------------------------------');
}
	
function Score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var KeepScore = Score();

//Picks a random Question

function nextRandomQuestion(){
    
    //set of questions
var q1 = new QuestionSet('Where is Assam Located?',
                        ['India', 'China', 'Bangladesh'],
                        0);
var q2 = new QuestionSet('Who is the current President of USA?',
                        ['Obama', 'Bill Clinton', 'Donald Trump'],
                        2);
var q3 = new QuestionSet('Elun Musk is a/an :', 
                        ['Dancer', 'Athlete', 'Entrepreneur'],
                        2);
    
//storing the questions in an array
var questions = [q1,q2,q3];
    
//chooisng a random question
var n = Math.floor(Math.random(questions)*questions.length);

questions[n].DisplayQuestions(); //Displays Questions

var answer = prompt('Please give your Answer'); //promts user to input the correct option
//Quits the game if user types 'exit'
if(answer === 'exit'){
    
        console.log('---------------------------------');
        console.log('Refresh the page to Play the Quiz'); 
        console.log('---------------------------------');     
    }
    else{
        
        questions[n].CheckAnswer(parseInt(answer), KeepScore); // Displays Correct Answer
        nextRandomQuestion();
    }
}

nextRandomQuestion();   
})();
