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

// Automatically set time on upper right of an element
let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
let TimeUpdate = () => {
    Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
};
setInterval(TimeUpdate, 1000);

//Onclick Number Functions
Zero.addEventListener("click", () => {
  InputNumber += "0";
  NumberScreen.textContent = Number(InputNumber);
});

One.addEventListener("click", () => {
  InputNumber += "1";
  NumberScreen.textContent = Number(InputNumber);
});

Two.addEventListener("click", () => {
  InputNumber += "2";
  NumberScreen.textContent = Number(InputNumber);
});

Three.addEventListener("click", () => {
  InputNumber += "3";
  NumberScreen.textContent = Number(InputNumber);
});

Four.addEventListener("click", () => {
  InputNumber += "4";
  NumberScreen.textContent = Number(InputNumber);
});

Five.addEventListener("click", () => {
  InputNumber += "5";
  NumberScreen.textContent = Number(InputNumber);
});

Six.addEventListener("click", () => {
  InputNumber += "6";
  NumberScreen.textContent = Number(InputNumber);
});

Seven.addEventListener("click", () => {
  InputNumber += "7";
  NumberScreen.textContent = Number(InputNumber);
});

Eight.addEventListener("click", () => {
  InputNumber += "8";
  NumberScreen.textContent = Number(InputNumber);
});

Nine.addEventListener("click", () => {
  InputNumber += "9";
  NumberScreen.textContent = Number(InputNumber);
});

//Onclick Tools Functions
Clear.addEventListener("click", () => {
  InputNumber = 0;
  NumberScreen.textContent = Number(InputNumber);
});

PlusMinus.addEventListener("click", () => {
  InputNumber = 0;
  NumberScreen.textContent = Number(InputNumber);
});

Percentage.addEventListener("click", () => {
  let InitialValue = NumberScreen.textContent;
  let FinalValue;
  FinalValue = InitialValue / 100;
  NumberScreen.textContent = FinalValue;
});

Divide.addEventListener("click", () => {
  
});