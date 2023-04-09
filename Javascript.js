// Calculator Keys
const Clear = document.getElementById("ACButtons");
const PlusMinus = document.getElementById("PlusMinusButtons");
const Percentage = document.getElementById("PercentButtons");
const Divide = document.getElementById("DivideButtons");
const Times = document.getElementById("TimesButtons");
const Minus = document.getElementById("MinusButtons");
const Plus = document.getElementById("PlusButtons");
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

//Add or Replace the number shown on screen. If AoR = 0, add number to value. For example, 
// continuously pressing eight will get 8888. If AoR = 1, which only happens after you press an operation. In this case,
// if you press 10 then press divide button and then 5, instead of 105, it will be 5
let AoR = 0;

// Automatically set time on upper right of an element
let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
let TimeUpdate = () => {
    Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
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
  InputNumber = 0;
  NumberList = [];
  OperandChoice = '';
  NumberScreen.textContent = Number(InputNumber);
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

Divide.addEventListener("click", () => {
  NumberList.push(NumberScreen.textContent);
  OperandChoice = "Divide";
  AoR = 1;
});

Equal.addEventListener("click", () => {
    if (OperandChoice === "Divide"){
        NumberList.push(NumberScreen.textContent);
        let Answer = NumberList[0] / NumberList[1];
        if (Answer === Infinity){
            Answer = "Error";
        }
        NumberScreen.textContent = Answer;
        console.log(NumberList);
    }
  });