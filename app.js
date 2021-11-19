//getting the required elements

const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");
const option_list = document.querySelector(".option-list");
const timeCount = quiz_box.querySelector(".timer .timer-sec");



//if start quiz button clicked
start_btn.onclick = () => {
   info_box.classList.add("activeInfo"); //shows info box



}

//if exit t quiz button clicked
exit_btn.onclick = () => {
   info_box.classList.remove("activeInfo"); //hides info box

}

//if continue button is clicked
continue_btn.onclick = () => {
   info_box.classList.remove("activeInfo"); //hides info box
   quiz_box.classList.add("activeQuiz"); //shows quiz box
  showQuestions(0);
  queCounter(1);
}

let que_count = 0;
let que_numb = 1;
let counter;

const next_btn = quiz_box.querySelector(".next-button");

//if next button clicked
next_btn.onclick = () => {
  if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  } else{
    console.log("Question completed");
  }
}

//getting questions and options from array

function showQuestions(index){
  const que_text = document.querySelector(".que-text");
  let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '<span>';
  let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;


  const option = option_list.querySelectorAll(".option");
  for (let i=0; i< option.length; i++){
    option[i].setAttribute("onclick" , "optionSelected(this)");
  }
}


let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;

  if(userAns == correctAns){
    answer.classList.add("correct");
    console.log("correcr");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else{
    answer.classList.add("incorrect");
      console.log("wrong");
      answer.insertAdjacentHTML("beforeend", crossIcon);

      //if answer is incorrect automatically select the right once

      for (let i = 0; i < allOptions; i++){
        if(option_list.children[i].textContent == correctAns){
          option_list.children[i].setAttribute("class", "option correct");
        }
      }
  }

  //once user selected disable all optionSelected
  for (let i = 0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled");
  }
}

















function queCounter(index){
  const bottom_que_counter = quiz_box.querySelector(".total-que");
  let totalQuesCountTag = '<span> <p>' + que_count +  '</p> Of <p>' + questions.length + '</p> Questions </span>';
  bottom_que_counter.innerHTML = totalQuesCountTag;
}
