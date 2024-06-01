let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
console.log(choices);

//Computer Choice Generator 
const computerchoice =() =>{
    let options = ["rock","paper","siz"];
    const randomid = Math.floor(Math.random()*3);
    return options[randomid];
};

//Winner Function
const winner = (val) => {
    const userChoice = val;
    console.log("User Choice : ",userChoice);
    const compChoice = computerchoice();
    console.log("Computer Choice: ",compChoice);
    let win = winDecide(userChoice,compChoice);
    console.log("Value Returned By the func",winDecide(userChoice,compChoice));
    let text = document.querySelector(".msg");
    // calling Points Table 
    pointsTable(win);
    //console.log(text.innerText);
    if(win == 1){
        text.innerText="User Won the Match!!";
        text.classList.remove(".msg");
        text.classList.remove("draw");
        text.classList.remove("lost");
        text.classList.add("won");
    }else if(win ==0){
        text.innerText="Computer Won the Match!!";
        text.classList.remove(".msg");
        text.classList.remove("draw");
        text.classList.remove("won");
        text.classList.add("lost");
    }else{
        text.innerText="Match Draw";
        text.classList.remove(".msg");
        text.classList.remove("won");
        text.classList.remove("lost");
        text.classList.add("draw");
    }
};

const winDecide=(user,comp)=>{
    if(user==comp){
        //draw
        return -1;
    }else{//Computer winnings 
        if(user =="rock" && comp=="paper" || user=="siz" && comp=="rock" || user=="paper" && comp=="siz"){
            console.log("Computer Wins");
            return 0;
        }else{
            console.log("User Winss!!");
            return 1;
        }
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let val = choice.getAttribute("id");
        console.log(`${val} was Clicked!`);
        winner(val);
    });

});
let uS = document.querySelector("#userScore");
let cS = document.querySelector("#ComputerScore");
let ucount=0,ccount=0;
let pointsTable=(win) =>{
        if(win==1){
            ucount++;
            uS.innerText=ucount;
        }else if(win==0){
            ccount++;
            cS.innerText=ccount;
        }
};
