$("#start").on("click", function(){
    game.start();
   
})
var questions =[{
    questions:"who is the legendary super sayion?",
    answers:["piccolo", "vegeta", "goku", "broly"],
    correctAnswers: "broly"
}, {
    questions:"who did goku defeat on planet namek?",
    answers:["raditz", "cell", "majin buu", "frieza"],
    correctAnswers: "frieza"
}, {
    questions:"what two did a fusion too destroy kid buu?",
    answers:["Goten&Trunks", "vegeta&Goku", "Gohan&Goten", "broly&goku"],
    correctAnswers: "vegeta&Goku"
}, {
    questions:"how were they able to summon the dragon?",
    answers:["dende", "supremeKi", "genie", "dragonBalls"],
    correctAnswers: "dragonBalls"
}, {
    questions:"who was goku wife?",
    answers:["bulma", "chi-Chi", "pan", "panchy"],
    correctAnswers: "chi-chi"
}, {
    questions:"who was pan parents?",
    answers:["gohan&videl", "goku&chi-chi", "vegeta&bulma", "krillin&android17"],
    correctAnswers: "gohanVidel"
}, {
    questions:"what color is the super sayian hair?",
    answers:["red", "green", "yellow", "gold"],
    correctAnswers: "yellow"
}]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <=0){
            console.log("times up");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>time remaining: <span id="counter">20</span> seconds</h2>');
        $("#start").remove();
        for(var i=0; i < questions.length; i ++){
            $("#subwrapper").append("<h2>" + questions[i].questions+ "</h2>");
            for(var j=0; j < questions[i].answers.length; j++){
                $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        
    },
    done: function(){
        $.each($('input[name="question-0]" :checked'), function(){
            if($(this).val()==questions[0].correctAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    
    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();

        $("#subwrapper").html("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>" );
        $("#subwrapper").append("<h3>InCorrect Answers: "+this.incorrect+"</h3>" );
        $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}