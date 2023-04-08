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

let Time = document.getElementById("Time");
Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
let TimeUpdate = () => {
    Time.textContent = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
};
setInterval(TimeUpdate, 1000)