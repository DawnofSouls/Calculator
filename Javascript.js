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

let GitHubLogo = document.getElementById("repo");

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

//Only Press Equal once to prevent pressing Equal again which causes bugs if pressed again.
// 1 means its Enabled. 0 means its Disabled.
let EqualEnableOrDisabled = 1;

//Maximum Number can be place 
let MaxNumberInput = () => {
  if (NumberScreen.textContent.length > 10){
    //nothing happens, doesnt place number because it reached the max
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "1";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 1;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }
}
// Automatically set time on upper right of an element
let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
let TimeUpdate = () => {
  Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
};
setInterval(TimeUpdate, 1000);

//Changes Button Color on press 

const DivideColorChange = () => {
  Divide.style.backgroundColor = "white";
  Divide.style.color = "#f69906";
  Multiply.style.backgroundColor = "";
  Multiply.style.color = "";
  Subtract.style.backgroundColor = "";
  Subtract.style.color = "";
  Addition.style.backgroundColor = "";
  Addition.style.color = "";
}

const MultiplyColorChange = () => {
  Multiply.style.backgroundColor = "white";
  Multiply.style.color = "#f69906";
  Divide.style.backgroundColor = "";
  Divide.style.color = "";
  Subtract.style.backgroundColor = "";
  Subtract.style.color = "";
  Addition.style.backgroundColor = "";
  Addition.style.color = "";
}

const SubtractColorChange = () => {
  Subtract.style.backgroundColor = "white";
  Subtract.style.color = "#f69906";
  Divide.style.backgroundColor = "";
  Divide.style.color = "";
  Multiply.style.backgroundColor = "";
  Multiply.style.color = "";
  Addition.style.backgroundColor = "";
  Addition.style.color = "";
}

const AdditionColorChange = () => {
  Addition.style.backgroundColor = "white";
  Addition.style.color = "#f69906";
  Divide.style.backgroundColor = "";
  Divide.style.color = "";
  Multiply.style.backgroundColor = "";
  Multiply.style.color = "";
  Subtract.style.backgroundColor = "";
  Subtract.style.color = "";
}

const ResetOperandColorChange = () => {
  Divide.style.backgroundColor = "";
  Divide.style.color = "";
  Multiply.style.backgroundColor = "";
  Multiply.style.color = "";
  Subtract.style.backgroundColor = "";
  Subtract.style.color = "";
  Addition.style.backgroundColor = "";
  Addition.style.color = "";
}

//Onclick Number Functions
Zero.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 0;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "0";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 0;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }


});

One.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 1;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "1";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 1;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }
});

Two.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 2;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "2";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 2;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

Three.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 3;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "3";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 3;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

Four.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 4;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
    
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "4";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 4;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

Five.addEventListener("click", () => {
  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 5;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "5";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 5;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }


});

Six.addEventListener("click", () => {

  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 6;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "6";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 6;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }
});

Seven.addEventListener("click", () => {

  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 7;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "7";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 7;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

Eight.addEventListener("click", () => {

  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 8;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "8";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 8;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

Nine.addEventListener("click", () => {

  if (NumberScreen.textContent.length >= 10){
    //nothing happens, doesnt place number because it reached the max
    if (AoR === 1) {
      InputNumber = 9;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  } else {
    ResetOperandColorChange();
    RepeatedEqual = 0;
    if (AoR === 0) {
      InputNumber += "9";
      NumberScreen.textContent = Number(InputNumber);
    } else if (AoR === 1) {
      InputNumber = 9;
      NumberScreen.textContent = Number(InputNumber);
      AoR = 0;
    }
  }

});

//Onclick Tools Functions
Clear.addEventListener("click", () => {
  ResetOperandColorChange();
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
  EqualEnableOrDisabled = 1;
});

Percentage.addEventListener("click", () => {
  let InitialValue = NumberScreen.textContent;
  let FinalValue;
  FinalValue = InitialValue / 100;
  NumberScreen.textContent = FinalValue;
});

PlusMinus.addEventListener("click", () => {
    NumberScreen.textContent = -NumberScreen.textContent;
  });  

Divide.addEventListener("click", () => {
  DivideColorChange();
  EqualEnableOrDisabled = 1;
  if (NumberListTwo >= 1){
    OperandChoice = "Divide";
    AoR = 1;
  }else {
    replaceOnDoubleOperand++;
    console.log(replaceOnDoubleOperand);
    NumberList.push(NumberScreen.textContent);
    OperandChoice = "Divide";
    AoR = 1;
  }
});

// Divide.addEventListener("click", () => {
//   replaceOnDoubleOperand++;
//   console.log(replaceOnDoubleOperand);

//   NumberList.push(NumberScreen.textContent);

//   OperandChoice = "Divide";
//   AoR = 1;
// });

Multiply.addEventListener("click", () => {
  MultiplyColorChange();
  EqualEnableOrDisabled = 1;
  if (NumberListTwo >= 1){
    OperandChoice = "Multiply";
    AoR = 1;
  }else {
    replaceOnDoubleOperand++;
    console.log(replaceOnDoubleOperand);
    NumberList.push(NumberScreen.textContent);
    OperandChoice = "Multiply";
    AoR = 1;
  }
});

Subtract.addEventListener("click", () => {
  SubtractColorChange();
  EqualEnableOrDisabled = 1;
  if (NumberListTwo >= 1){
    OperandChoice = "Subtract";
    AoR = 1;
  }else {
    replaceOnDoubleOperand++;
    console.log(replaceOnDoubleOperand);
    NumberList.push(NumberScreen.textContent);
    OperandChoice = "Subtract";
    AoR = 1;
  }
});

Addition.addEventListener("click", () => {
  AdditionColorChange();
  EqualEnableOrDisabled = 1;
  if (NumberListTwo >= 1){
    OperandChoice = "Addition";
    AoR = 1;
  }else {
    replaceOnDoubleOperand++;
    console.log(replaceOnDoubleOperand);
    NumberList.push(NumberScreen.textContent);
    OperandChoice = "Addition";
    AoR = 1;
  }
});

Decimal.addEventListener("click", () => {
  ResetOperandColorChange();
  if (NumberScreen.textContent.includes('.')){
    // nothing happens
  }else{
    InputNumber += ".";
    NumberScreen.textContent = InputNumber;
  }
});

Equal.addEventListener('click', () => {
  if (EqualEnableOrDisabled === 1){
    EqualEnableOrDisabled = 0;
    ResetOperandColorChange();
    if (OperandChoice === "Divide" ){
      if (NumberListTwo.length >= 1){
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberListTwo[NumberListTwo.length-1] / NumberList[NumberList.length-1];
        if (Answers === Infinity) {
          Answers = "Error";
        }

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
      } else {
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberList[ArrayIncrementOnEqual] / NumberList[NumberList.length-1];
        if (Answers === Infinity) {
          Answers = "Error";
        }

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
        ArrayIncrementOnEqual++;
      }
    }

    if (OperandChoice === "Multiply" ){
      if (NumberListTwo.length >= 1){
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberListTwo[NumberListTwo.length-1] * NumberList[NumberList.length-1];

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
      } else {
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberList[ArrayIncrementOnEqual] * NumberList[NumberList.length-1];

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
        ArrayIncrementOnEqual++;
      }
    }

    else if (OperandChoice === "Subtract"){
      if (NumberListTwo.length >= 1){
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberListTwo[NumberListTwo.length-1] - NumberList[NumberList.length-1];

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
      } else {
        NumberList.push(NumberScreen.textContent);
        let Answers = NumberList[ArrayIncrementOnEqual] - NumberList[NumberList.length-1];

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
        ArrayIncrementOnEqual++;
      }
    }

    else if (OperandChoice === "Addition"){
      if (NumberListTwo.length >= 1){
        NumberList.push(NumberScreen.textContent);
        let Answers = +NumberListTwo[NumberListTwo.length-1] + +NumberList[NumberList.length-1];

        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          let DecimalLength;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}
          
        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
      } else {
        NumberList.push(NumberScreen.textContent);
        let Answers = +NumberList[ArrayIncrementOnEqual] + +NumberList[NumberList.length-1];
        
        if (Answers.toString().length > 10) {
          let SplitNumbers = Answers.toString().split('.');
          SplitNumbers = SplitNumbers.map(x => x.split(''));
        
          let IntegerLength = SplitNumbers[0].length;
          let DecimalLength;
          if (typeof SplitNumbers[1] === 'undefined'){
            DecimalLength = 0;
          }else {
            DecimalLength = SplitNumbers[1].length;
          }
        
          if(IntegerLength > DecimalLength) {
            Answers = Answers.toExponential(2).toString();
          } else if (IntegerLength < DecimalLength || IntegerLength === DecimalLength ){
            Answers = Answers.toPrecision(3);
            if (Answers.toString().length > 10) {
              Answers = Answers.toExponential(2).toString();
            }
          }}

        NumberListTwo.push(Answers);
        NumberScreen.textContent = Answers;
        ArrayIncrementOnEqual++;
      }
    }
  }
  

  });

// Misc

GitHubLogo.addEventListener('click', () => {
  window.open(
    "https://github.com/DawnofSouls/Calculator/tree/main", "_blank");
})
