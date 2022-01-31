class TypeQuestion{
    constructor(question, answer, hint){
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }
};

var questions = [];
questions.push(new TypeQuestion("我","我","ji3"));
questions.push(new TypeQuestion("早","早","yl3"));
questions.push(new TypeQuestion("你","你","su3"));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomQuestion(){
    var question = questions[getRandomInt(0, questions.length-1)];
    return question;
}
function create_question(no, ind){
    var question = questions[ind];
    var question_text = question.question;
    var answer_text = question.answer;
    var hint_text = question.hint;
    var main_div = document.createElement("div");
    main_div.classList.add("row");

    var no_div = document.createElement("div");
    no_div.classList.add("no");
    no_div.innerHTML = "Q" + (no+1);
    var question_div = document.createElement("div");
    question_div.classList.add("question");
    var answer_div = document.createElement("input");
    answer_div.classList.add("answer");

    answer_div.onkeyup = function(){
        console.log(answer_div.value);
        if (answer_div.value == answer_text){
            answer_div.classList.add("correct");
        }
        else{
            answer_div.classList.remove("correct");
        }
    }
    var hint_div = document.createElement("div");
    var hint_btn = document.createElement("button");
    hint_btn.innerHTML = "hint";
    hint_div.classList.add("hint");
    question_div.innerHTML = question_text;
    // answer_div.innerHTML = answer_text;
    hint_div.innerHTML = hint_text;
    hint_div.style.display = "none";

    hint_btn.onclick = function(){
        if (hint_div.style.display === "none") {
            hint_div.style.display = "block";
          } else {
            hint_div.style.display = "none";
          }
    }
    main_div.appendChild(no_div);
    main_div.appendChild(question_div);
    main_div.appendChild(answer_div);
    main_div.appendChild(hint_btn);
    main_div.appendChild(hint_div);

    panel_div = document.getElementById("panel2");
    panel_div.appendChild(main_div);
}
function reset(){
    var inds = shuffle_indices(questions.length);
    for(var i=0; i<inds.length; i++){
        create_question(i, inds[i]);
    }
}

function shuffle_indices(n){
    var indices = [];
    for (var i=0; i<n; i++){
        indices.push(i);
    }
    for (var i=0; i<n; i++){
        var j = getRandomInt(0, n-1);
        var temp = indices[i];
        indices[i] = indices[j];
        indices[j] = temp;
    }
    return indices;
}
$(document).ready(reset);