const previous_btn = document.getElementById("previous_btn")
const next_btn = document.getElementById("next_btn")


const questionSet1 = document.getElementById("questionSet1")
const questionSet2 = document.getElementById("questionSet2")
const questionSet3 = document.getElementById("questionSet3")
const questionSet4 = document.getElementById("questionSet4")
const questionSet5 = document.getElementById("questionSet5")

let question_set = 1
let direction
previous_btn.addEventListener("click", () =>{

    direction = "left"

    if(question_set > 1){
        question_set--
    }
    displaySlide()
    console.log(question_set)
})

next_btn.addEventListener("click", () =>{
    
    direction = "left"

    if(question_set < 5){
        question_set++
    }
    displaySlide(question_set)
    console.log(question_set)
})

function displaySlide(){
    switch(question_set){
        case 1:
            if( questionSet1.classList.contains("hidden_question_set")){
                questionSet1.classList.remove("hidden_question_set")
            }
            questionSet2.classList.add("hidden_question_set")
    break;
        case 2:
            console.log(questionSet2)
            if(questionSet2.classList.contains("hidden_question_set")){
                questionSet2.classList.remove("hidden_question_set")
            }
            questionSet1.classList.add("hidden_question_set")
            questionSet3.classList.add("hidden_question_set")
            console.log(questionSet3)
    break;
        case 3:
            console.log(questionSet3)
            if(questionSet3.classList.remove("hidden_question_set")){
                questionSet3.classList.remove("hidden_question_set")
            }
            questionSet2.classList.add("hidden_question_set")
            questionSet4.classList.add("hidden_question_set")
            console.log(questionSet3)
    break;
        case 4:
            questionSet4.classList.remove("hidden_question_set")
            questionSet3.classList.add("hidden_question_set")
            questionSet5.classList.add("hidden_question_set")
            next_btn.innerText = "next"
    break;
        case 5:
            questionSet5.classList.remove("hidden_question_set")
            questionSet4.classList.add("hidden_question_set")
            next_btn.innerText = "submit"
    break;
    }
}