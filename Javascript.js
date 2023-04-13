// Calculator Keys
const Clear = document.getElementById("ACButtons");
const PlusMinus = document.getElementById("PlusMinusButtons");
const Percentage = document.getElementById("PercentButtons");
const Divide = document.getElementById("DivideButtons");
const Multiply = document.getElementById("TimesButtons");
const Subtract = document.getElementById("MinusButtons");
const Addition = document.getElementById("PlusButtons");
const Decimal = document.getElementById("DecimalButtons");
const Equal = document.getElementById("EqualButtons");

const Zero = document.getElementById("ZeroButtons");
const One = document.getElementById("OneButtons");
const Two = document.getElementById("TwoButtons");
const Three = document.getElementById("ThreeButtons");
const Four = document.getElementById("FourButtons");
const Five = document.getElementById("FiveButtons");
const Six = document.getElementById("SixButtons");
const Seven = document.getElementById("SevenButtons");
const Eight = document.getElementById("EightButtons");
const Nine = document.getElementById("NineButtons");

// Input Number Screen
const NumberScreen = document.getElementById("Input");
let InputNumber = 0;
NumberScreen.textContent = Number(InputNumber);

//Operand Choice to determine how equal button works
let OperandChoice;

// Array Number to do the math
let NumberList = [];

//ArrayList to do math when you press another operation in middle of repeated Equal
let NumberListTwo = [];

//Add or Replace the number shown on screen. If AoR = 0, add number to value. For example,
// continuously pressing eight will get 8888. If AoR = 1, which only happens after you press an operation. In this case,
// if you press 10 then press divide button and then 5, instead of 105, it will be 5
let AoR = 0;

//Decimal Switch. Once it equals to 1, you can no longer enter decimal until you press Clear button
let DecimalSwitch = 0;

//Repeated Equal activation when it's equal to RepeatedEqual = 1.
//ex: 100/2 = 50 = 25 = 12.5 = 6.25 and so on
let RepeatedEqual = 0;

// Array Switch. Basically once you press any operand on the second onclick, it will replace NumberSwitch[1] with a a new number.
// Ex: 10 * 2 = 20: [10, 2, 20, 40, 80, 160....] amd so on but if you want to switch to another operation in midst of it, lets say we press divide then
// four and press equal, it will become [10, 4, 20, 40, 80, 160, (this is where we pressed divide then 4) 40, 10, 2.5, 0.625] 
let replaceOnDoubleOperand = 0;

// Automatically set time on upper right of an element
let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
let TimeUpdate = () => {
  Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
};
setInterval(TimeUpdate, 1000);

//Onclick Number Functions
Zero.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "0";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 0;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

One.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "1";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 1;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Two.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "2";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 2;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Three.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "3";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 3;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Four.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "4";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 4;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Five.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "5";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 5;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Six.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "6";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 6;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Seven.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "7";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 7;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Eight.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "8";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 8;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

Nine.addEventListener("click", () => {
  if (AoR === 0) {
    InputNumber += "9";
    NumberScreen.textContent = Number(InputNumber);
  } else if (AoR === 1) {
    InputNumber = 9;
    NumberScreen.textContent = Number(InputNumber);
    AoR = 0;
  }
});

//Onclick Tools Functions
Clear.addEventListener("click", () => {
  replaceOnDoubleOperand = 0;
  InputNumber = 0;
  AoR = 0;
  RepeatedEqual = 0;
  console.log(RepeatedEqual);
  NumberList = [];
  OperandChoice = "";
  DecimalSwitch = 0;
  NumberScreen.textContent = 0;
});

// PlusMinus.addEventListener("click", () => {
//   InputNumber = 0;
//   NumberScreen.textContent = Number(InputNumber);
// });

Percentage.addEventListener("click", () => {
  let InitialValue = NumberScreen.textContent;
  let FinalValue;
  FinalValue = InitialValue / 100;
  NumberScreen.textContent = FinalValue;
});

PlusMinus.addEventListener("click", () => {
    let InitialValue = NumberScreen.textContent;
    let FinalValue;
    FinalValue = InitialValue * -1;
    NumberScreen.textContent = FinalValue;
  });  

Divide.addEventListener("click", () => {
  replaceOnDoubleOperand++;
  console.log(replaceOnDoubleOperand);
  NumberList.push(NumberScreen.textContent);
  OperandChoice = "Divide";
  AoR = 1;
});

Multiply.addEventListener("click", () => {
  replaceOnDoubleOperand++;
  console.log(replaceOnDoubleOperand);
  NumberList.push(NumberScreen.textContent);
  OperandChoice = "Multiply";
  AoR = 1;
});

Subtract.addEventListener("click", () => {
  replaceOnDoubleOperand++;
  console.log(replaceOnDoubleOperand);
  NumberList.push(NumberScreen.textContent);
  OperandChoice = "Subtract";
  AoR = 1;
});

Addition.addEventListener("click", () => {
  replaceOnDoubleOperand++;
  console.log(replaceOnDoubleOperand);
  NumberList.push(NumberScreen.textContent);
  OperandChoice = "Addition";
  AoR = 1;
});

Decimal.addEventListener("click", () => {
  if (DecimalSwitch === 0) {
    InputNumber += ".";
    DecimalSwitch = 1;
    NumberScreen.textContent = InputNumber;
  } else if (DecimalSwitch === 1) {
    // You can place decimal until you press clear
  }
});

Equal.addEventListener("click", () => {
  if (RepeatedEqual === 0) {

    if (OperandChoice === "Divide") {
      NumberList.push(NumberScreen.textContent);
      let Answer = NumberList[0] / NumberList[1];
      if (Answer === Infinity) {
        Answer = "Error";
      }
      NumberList.push(Answer);
      RepeatedEqual = 1;
      console.log(RepeatedEqual);
      NumberScreen.textContent = Answer;
      console.log(NumberList);

    } else if (OperandChoice === "Multiply") {
      NumberList.push(NumberScreen.textContent);
      let Answer = NumberList[0] * NumberList[1];
      if (Answer === Infinity) {
        Answer = "Error";
      }
      NumberList.push(Answer);
      RepeatedEqual = 1;
      console.log(RepeatedEqual);
      NumberScreen.textContent = Answer;
      console.log(NumberList);

    } else if (OperandChoice === "Subtract") {
      NumberList.push(NumberScreen.textContent);
      let Answer = NumberList[0] - NumberList[1];
      if (Answer === Infinity) {
        Answer = "Error";
      }
      NumberList.push(Answer);
      RepeatedEqual = 1;
      console.log(RepeatedEqual);
      NumberScreen.textContent = Answer;
      console.log(NumberList);

    } else if (OperandChoice === "Addition") {
      NumberList.push(NumberScreen.textContent);
      let Answer = +NumberList[0] + NumberList[1]/1;
      if (Answer === Infinity) {
        Answer = "Error";
      }
      NumberList.push(Answer);
      RepeatedEqual = 1;
      console.log(RepeatedEqual);
      NumberScreen.textContent = Answer;
      console.log(NumberList);
    }
  } else if (RepeatedEqual === 1) {
    if (OperandChoice === "Divide") {
      if(replaceOnDoubleOperand >= 2){
        let Numbers = NumberScreen.textContent;
        NumberListTwo.push(Numbers);
        NumberScreen.textContent = NumberList[NumberList.length-1] / NumberListTwo[NumberListTwo.length-1];
      } else {
        let Answers = NumberList[NumberList.length-1]/NumberList[1];
        NumberScreen.textContent = Answers;
        NumberList.push(Answers);
      }

      Multiply.onclick = () => {
        console.log("Set to Multiplication");
        RepeatedEqual = 0;
        OperandChoice = "Multiply";
      };
      Subtract.onclick = () => {
        console.log("Set to Subtract");
        RepeatedEqual = 0;
        OperandChoice = "Subtract";
      };
      Addition.onclick = () => {
        console.log("Set to Addition");
        RepeatedEqual = 0;
        OperandChoice = "Addition";
      };

    } else if (OperandChoice === "Multiply") {
      if(replaceOnDoubleOperand >= 2){
        let Numbers = NumberScreen.textContent;
        NumberListTwo.push(Numbers);
        NumberScreen.textContent = NumberList[NumberList.length-1] * NumberListTwo[NumberListTwo.length-1];
      } else {
        let Answers = NumberList[NumberList.length-1]*NumberList[1];
        NumberScreen.textContent = Answers;
        NumberList.push(Answers);
      }

      Divide.onclick = () => {
        console.log("Set to Divide");
        RepeatedEqual = 0;
        OperandChoice = "Divide";
      };
      Subtract.onclick = () => {
        console.log("Set to Subtract");
        RepeatedEqual = 0;
        OperandChoice = "Subtract";
      };
      Addition.onclick = () => {
        console.log("Set to Addition");
        RepeatedEqual = 0;
        OperandChoice = "Addition";
      };

    } else if (OperandChoice === "Subtract") {
      if(replaceOnDoubleOperand >= 2){
        let Numbers = NumberScreen.textContent;
        NumberListTwo.push(Numbers);
        NumberScreen.textContent = NumberList[NumberList.length-1] - NumberListTwo[NumberListTwo.length-1];
      } else {
      let Answers = NumberList[NumberList.length-1]-NumberList[1];
      NumberScreen.textContent = Answers;
      NumberList.push(Answers);
      }

      Multiply.onclick = () => {
        console.log("Set to Multiply");
        RepeatedEqual = 0;
        OperandChoice = "Multiply";
      };
      Divide.onclick = () => {
        console.log("Set to Divide");
        RepeatedEqual = 0;
        OperandChoice = "Divide";
      };
      Addition.onclick = () => {
        console.log("Set to Addition");
        RepeatedEqual = 0;
        OperandChoice = "Addition";
      };

    } else if (OperandChoice === "Addition") {
      if(replaceOnDoubleOperand >= 2){
        let Numbers = NumberScreen.textContent;
        NumberListTwo.push(Numbers);
        NumberScreen.textContent = +NumberList[NumberList.length-1] + +NumberListTwo[NumberListTwo.length-1];
      } else {
      let Answers = +NumberList[NumberList.length-1] + +NumberList[1];
      NumberScreen.textContent = Answers;
      NumberList.push(Answers);
      }
      
      Multiply.onclick = () => {
        console.log("Set to Multiply");
        RepeatedEqual = 0;
        OperandChoice = "Multiply";
      };
      Divide.onclick = () => {
        console.log("Set to Divide");
        RepeatedEqual = 0;
        OperandChoice = "Divide";
      };
      Subtract.onclick = () => {
        console.log("Set to Subtract");
        RepeatedEqual = 0;
        OperandChoice = "Subtract";
      };
    }
  }
});