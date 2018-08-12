//Open up the console first to view the questions of the QUIZ.

//Using IIFE
(function(){
	//Defining a Constructor with arguments- Question, Options and Correct Answer
    function QuestionSet(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    }
	//displayoing Questions with Options
    QuestionSet.prototype.displayQuestion = function() {

        console.log(this.question);

         for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }   

    }
	
	//displaying Options for answers
    QuestionSet.prototype.checkAnswer = function(ans, scorenow){
        var sc;
        if(ans === this.correct){
            console.log('Correct!');
            sc = scorenow(true);
            
        }
        else{
            console.log('Try Again!');
            sc = scorenow(false); 
            
        }
        
        this.displayScore(sc);
    }
    //displaying Scores
    QuestionSet.prototype.displayScore = function(sc){
            console.log('------------------------------');
            console.log('Your current score is: ' + sc);
            console.log('------------------------------');
    }
    
	
	
	//Inputting Questions
    var q1 = new QuestionSet('Is JavaScript the coolest programming language in the world?',
                              ['Yes', 'No'],
                              0);

    var q2 = new QuestionSet('Where is Assam located?',
                              ['China', 'India', 'Myanmar'],
                              1);
	var q3 = new QuestionSet('What is the opposite of Happy?',
                              ['Bad', 'Popular', 'Sad'],
                              2);						  


    var questions= [q1,q2,q3]; //storing all the Questions in an array

    //couting the Scores for Correct Answers
    function score(){
        var sc = 0;
        return function(correct){
                if(correct){
                    sc++;
                }
            return sc;
        }
    }
	
    var keepScore = score(); //storing the Score in a varaible
    
	//Main process that calls displayQuestion to display a Question randomly and checks the Answer and continues if the ANSWER IS NOT 'exit'.
	//The user can quit the game by typing 'exit' in the answer box.
    function process(){

    var n = Math.floor(Math.random(questions)* questions.length);

    questions[n].displayQuestion();

    var answers = prompt('Please select the correct answer.');
	//if Answer is NOT 'exit' then call teh checkAnswer function 
    if (answers !== 'exit') {
        questions[n].checkAnswer(parseInt(answers), keepScore);
        process();
        
        }
    
    }
	// Calling rhe process function 
    process(); 

    }
)();
























