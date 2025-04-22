let saveNumber = 0;
let resultNum = 0;
let activeNum = 0;
function calculate(a) {
  function sum(b) {
    saveNumber += Number(b);
    document.querySelector(".semi-answer").innerText += `${b}+ `;
    activeNum = 0;
  }
  function minus(c) {
    saveNumber -= Number(c);
    document.querySelector(".semi-answer").innerText += `${c}- `;
    activeNum = 0;
  }
  function multiply(d) {
    saveNumber *= Number(d);
    document.querySelector(".semi-answer").innerText += `${d}+ `;
    activeNum = 0;
  }
  function divide(e) {
    saveNumber += Number(e);
    document.querySelector(".semi-answer").innerText += `${e}+ `;
    activeNum = 0;
  }
  function result(f) {
    document.querySelector(".answer").innerText = f;
    console.log(activeNum);
    saveNumber = Number(resultNum);
    activeNum = 0;
  }
  function clear() {
    document.querySelector(".answer").innerText = 0;
    document.querySelector(".semi-answer").innerText = "";
    saveNumber = 0;
    activeNum = 0;
    resultNum = 0;
  }
  if (document.querySelector(".answer").innerText === "0") {
    document.querySelector(".answer").innerText = a;
    activeNum = Number(document.querySelector(".answer").innerText);
  } else if (a !== "+" && a !== "-" && a !== "*" && a !== "/") {
    document.querySelector(".answer").innerText += a;
    activeNum = Number(document.querySelector(".answer").innerText);
  }
  if (a === "+") {
    sum(activeNum);
    document.querySelector(".answer").innerText = 0;
  }
  if (a === "/") {
    divide(activeNum);
    document.querySelector(".answer").innerText = 0;
  }
  if (a === "-") {
    minus(activeNum);
    document.querySelector(".answer").innerText = 0;
  }
  if (a === "*") {
    multiply(activeNum);
    document.querySelector(".answer").innerText = 0;
  }
  if (a === "=") {
    result(resultNum);
  }
  if (a === "c") {
    clear();
  }
  resultNum = Number(saveNumber) + Number(activeNum);
  console.log(`savenumber: ${saveNumber}
activenumber: ${activeNum}
resultnumber: ${resultNum}`);
}
