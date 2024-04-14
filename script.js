let boxes=document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

 let turnO =true; //playerx,playery
 const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

 const resetgame=()=>{
    let turnO =true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;


        checkwinner();
    });
 });


 const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

 const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const showwinner=(posva1)=>{
    
    msg.innerText=`Congratulations, Winner is ${ posva1} `;
    msgcontainer.classList.remove("hide");
    disabledboxes();
 }
 const checkwinner=()=>{
    for(pattern of winpattern){

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !=""&& pos3val !="")
        {
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }

 }


 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);


