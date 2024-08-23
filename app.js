let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // PlayerX , PlayerO
// 2D array for winning combinations
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked!!");

        // PlayerO
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        // PlayerX
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};

const checkWinner = () => {
    // check winning patterns
    winPattern.forEach((pattern) => {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // Check if all 3 values are the same
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner!!!", pos1val);
            showwinner(pos1val);
        }
    });
};

const resetGame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
