$('#button-next').hide();
var buttonsContainer = $('#buttons');

var userAnswers = [];
var Qanswers;

var setButtons = function(answers) {
  buttonsContainer.empty();
  $.each(answers, function(key, answer) {
    buttonsContainer.append('<button id="'+key+'" value="'+key+'">'+answer.value+'</button>');
  });
  Qanswers = answers;
};

$('#buttons').click(function(e){
  var even =0;
  for (i=0; i<Qanswers.length; i++){
    $('#'+i+'').prop('disabled',true);
    even = even + Qanswers[i].correct*i;
  }
  // _.map(Qanswers, function(num){ $('#'+num+'').prop('disabled',true); });
  // var even = _.find([0, 1, 2, 3], function(num){ return Qanswers[num].correct==1;});
  if(Qanswers[e.target.value].correct){
    $('#'+e.target.value+'').css("background-color","green");
  }
  else {
    $('#'+even+'').css("background-color","green");
    $('#'+e.target.value+'').css("background-color","red");
  }
  userAnswers.push(e.target.value);
  $('#button-next').show();
});

var setQuestion = function(question) {
  $('#question').text(question);
};

var generateAnswers = function(obj) {
  var answers = [];
  var correctIndex = _.random(0, 3);
  for (var i = 0; i < 4; i++) {
    if (i === correctIndex) {
      answers.push({
        correct: 1,
        value: obj.value,
      });
    }
    else {
      var wrong = obj.wronganswers.pop();
      answers.push({
        correct: 0,
        value: wrong,
      });
    }
  }
  return answers;
};

var questions =[];
_.each(censusBits2,function(obj){
  var question = {
    id: obj.id,
    question: obj.subject,
    answers: generateAnswers(obj)
  };
  questions.push(question);
});

var finalpage = {
  id:6,
  question: "You are a "
};

questions.push(finalpage);

setButtons(questions[0].answers);
setQuestion(questions[0].question);
var state_q=1;
$('#button-next').click(function(){
  setButtons(questions[state_q].answers);
  setQuestion(questions[state_q].question);
  state_q++;
  $('#button-next').hide();
});
