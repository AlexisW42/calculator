let firstNumber =0.0;
let result = 0.0;
let lastType = "";

const buttonPressed = document.querySelectorAll('button');

buttonPressed.forEach(element => {
  element.addEventListener('click', keyPressed);
});

function keyPressed() {
  const display = document.querySelector('#display');
  if (this.className == "number") {
    if (display.innerHTML == 0) {
      display.innerHTML = `${this.innerHTML}`;
    }
    else {
      display.innerHTML = ` ${display.innerHTML + this.innerHTML}`;
    }
  }
  else if (this.id == "AC") {
    display.innerHTML = `0`;
    result = 0;
    lastType="";
    firstNumber=0;
  }
  else if (this.className == "operator") {
    if (this.innerHTML != "=") {
      firstNumber=parseFloat(display.innerHTML);
      lastType = this.innerHTML;
      addToOperation(display.innerHTML, this.innerHTML);
      display.innerHTML = `0`;
    }
    else {
      addToOperation(display.innerHTML, lastType);
      display.innerHTML = `${result}`;
    }
  }
}

function addToOperation(number, type) {
  numberFloat = parseFloat(number);
  if (type == "+")
    result = firstNumber + numberFloat;
  else if (type == "-")
    result = firstNumber - numberFloat;
  else if (type == "/")
   result = firstNumber / numberFloat;
  else if (type == "*")
   result = firstNumber * numberFloat;
}
