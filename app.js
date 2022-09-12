let inpBinValue = document.querySelector("#inpBinValue");
let outDecValue = document.querySelector("#outDecValue");
let btn = document.querySelector("#btn");
let alertMsg = document.querySelector("#alertMsg");
let inpValue = null;
let res = 0;

inpBinValue.addEventListener("keydown", alertFn);

btn.addEventListener("click", countFn);

function countFn() {
  inpValue = inpBinValue.value;
  console.log("inpValue,", typeof inpValue, inpValue.length, inpValue);

  for (let i = 0; i < inpValue.length; i++) {
    if (+inpValue[i] !== 0 && +inpValue[i] !== 1) {
      alertMsg.textContent = "not a binary value!! try again!!";
      inpBinValue.value = "";
      res = 0;
      outDecValue.innerHTML = "";
      break;
    }
    console.log(inpValue[i]);
    res = res * 2 + +inpValue[i];
  }
  if (res !== 0) {
    outDecValue.innerHTML = "result as decimal number: " + res;
    inpBinValue.value = "";
    alertMsg.textContent = "";
    res = 0;
  }
}

function alertFn(e) {
  console.log(e.key === "0");
  if (e.key !== "0" && e.key !== "1" && e.key !== "Backspace") {
    alertMsg.textContent = "not a binary value!!";
  }
}
