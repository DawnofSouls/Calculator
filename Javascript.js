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

// Array where you add Input value to
let NumberList = [];

// Array where the answers are placed 
let NumberListTwo = [];

//Add or Replace the number shown on screen. If AoR = 0, add number to value. For example,
// continuously pressing eight will get 8888. If AoR = 1, which only happens after you press an operation. In this case,
// if you press 10 then press divide button and then 5, instead of 105, it will be 5
let AoR = 0;

//Decimal Switch. Once it equals to 1, you can no longer enter decimal until you press Clear button
let DecimalSwitch = 0; //DEPRECATED 

//Repeated Equal activation when it's equal to RepeatedEqual = 1.
//ex: 100/2 = 50 = 25 = 12.5 = 6.25 and so on
let RepeatedEqual = 0;

// Array Switch. Basically once you press any operand on the second onclick, it will replace NumberSwitch[1] with a a new number.
// Ex: 10 * 2 = 20: [10, 2, 20, 40, 80, 160....] amd so on but if you want to switch to another operation in midst of it, lets say we press divide then
// four and press equal, it will become [10, 4, 20, 40, 80, 160, (this is where we pressed divide then 4) 40, 10, 2.5, 0.625] 
let replaceOnDoubleOperand = 0; //MAY BE DEPRECATED

//This moves to the next array for NumberList
let ArrayIncrementOnEqual = 0;

//This switch is going to determine whether we add the NumberScreen.txt content to NumberList or NumberListTwo array. If it's
// 1, it pushes to NumberList, if it's -1, it pushes to NumberListTwo
let PushToOneOrTwo = 1;

//Allows to successfully switch to another array when in middle of switching to another operand without clearing
let OperandSwitch = 0;

// Automatically set time on upper right of an element
let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
let TimeUpdate = () => {
  Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
};
setInterval(TimeUpdate, 1000);

//Onclick Number Functions
Zero.addEventListener("click", () => {
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  RepeatedEqual = 0;
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
  NumberListTwo = [];
  OperandChoice = "";
  NumberScreen.textContent = 0;
  ArrayIncrementOnEqual = 0;
});

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
  if (NumberScreen.textContent.includes('.')){
    // nothing happens
  }else{
    InputNumber += ".";
    NumberScreen.textContent = InputNumber;
  }
});

Equal.addEventListener('click', () => {


    if (OperandChoice === "Divide" ){
      NumberList.push(NumberScreen.textContent);
      let Answers = NumberList[ArrayIncrementOnEqual] / NumberList[NumberList.length-1];
      NumberListTwo.push(Answers);
      NumberScreen.textContent = Answers;
      ArrayIncrementOnEqual++;
    }

    else if (OperandChoice === "Multiply"){
      NumberList.push(NumberScreen.textContent);
      let Answers = NumberList[ArrayIncrementOnEqual] * NumberList[NumberList.length-1];
      NumberListTwo.push(Answers);
      NumberScreen.textContent = Answers;
      ArrayIncrementOnEqual++;
    }
    else if (OperandChoice === "Subtract"){
      NumberList.push(NumberScreen.textContent);
      let Answers = NumberList[ArrayIncrementOnEqual] - NumberList[NumberList.length-1];
      NumberListTwo.push(Answers);
      NumberScreen.textContent = Answers;
      ArrayIncrementOnEqual++;
    }
    else if (OperandChoice === "Addition"){
      NumberList.push(NumberScreen.textContent);
      let Answers = +NumberList[ArrayIncrementOnEqual] + +NumberList[NumberList.length-1];
      NumberListTwo.push(Answers);
      NumberScreen.textContent = Answers;
      ArrayIncrementOnEqual++;
    }
  });

