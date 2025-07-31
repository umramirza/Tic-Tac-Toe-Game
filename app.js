let turn0=true;
let count=0;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]


let msg=document.querySelector('#msg')
let boxes=document.querySelectorAll('.boxes');
let msgContainer = document.querySelector(".msg-container");
let startBtn=document.querySelector("#startBtn");
let resetBtn=document.querySelector("#resetBtn");


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="X";
            box.disabled=true;
            turn0=false;
        }else{
            box.innerText="O";
            box.disabled=true;
            turn0=true;
        }
        count++;

       let isWinner=checkWinner();

       if (count === 9 && !isWinner) {
        gameDraw();
      }
    })
})


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
function showWinner(winner){
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

function reset(){
    enableBoxes();
    turn0=true;
    count=0;
    msgContainer.classList.add("hide");
}


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText="";
    }
  };


function checkWinner(){
    for (pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2 !="" && val3!=""){
            if(val1==val2 && val2==val3){
               showWinner(val1);
            }
        }
    }
}

startBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);
 