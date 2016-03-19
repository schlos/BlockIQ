

var obj1 = {title: "question1", choice1: "value1", choice2: "value2", choice3: "value3", choice4: "value4", choice5: "value5"};
var obj2 = {title: "question2", choice1: "value1", choice2: "value2", choice3: "value3", choice4: "value4", choice5: "value5"};
var obj3 = {title: "question3", choice1: "value1", choice2: "value2", choice3: "value3", choice4: "value4", choice5: "value5"};

var array = [obj1, obj2, obj3];
console.log(array);



var state = 1;

$("#questionLabel").text(array[0].title);
$("#label1").text(array[0].choice1);
$("#label2").text(array[0].choice2);
$("#label3").text(array[0].choice3);
$("#label4").text(array[0].choice4);
$("#label5").text(array[0].choice5);


$("#submit").click(function(){
  console.log(state);
  if (state==1){
      $("#questionLabel").text(array[1].title);
      $("#label1").text(array[1].choice1);
      $("#label2").text(array[1].choice2);
      $("#label3").text(array[1].choice3);
      $("#label4").text(array[1].choice4);
      $("#label5").text(array[1].choice5);
      state = state+1;
    }
    else if (state==2){
        $("#questionLabel").text(array[1].title);
        $("#label1").text(array[1].choice1);
        $("#label2").text(array[1].choice2);
        $("#label3").text(array[1].choice3).css("color", "blue");
        $("#label4").text(array[1].choice4);
        $("#label5").text(array[1].choice5);
        state = state+1;
      }
    else if (state==3){
        $("#questionLabel").text(array[2].title);
        $("#label3").text(array[2].choice1);
        $("#label2").text(array[2].choice2);
        $("#label3").text(array[2].choice3).css("color", "black");
        $("#label4").text(array[2].choice4);
        $("#label5").text(array[2].choice5);
        state = state+1;
      }
});

// $(document).ready(function(){
//   if (state==2){
//     $("#question1").text(array[1].title);
//     state = state-1;
//   }
//   if (state==3){
//     $("#question1").text(array[2].title);
//     state = state-1;
//   }
// });

//Changes the value on the screen for the slider
function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}

  // var myForm = {"1": $("#1").val(), "fader": $("#fader").val()};
  // console.log (myForm);
