let firstNumber =0.0;
let result = 0.0;
let lastType = "";

const buttonPressed = document.querySelectorAll('button');

buttonPressed.forEach(element => {
  element.addEventListener('click', keyPressed);
  element.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('down');
}

function keyPressed() {
  const display = document.querySelector('#display');
  if (this.className == "number") {
    this.classList.add('down');
    if (display.innerHTML == 0) {
      display.innerHTML = `${this.innerHTML}`;
    }
    else {
      display.innerHTML = ` ${display.innerHTML + this.innerHTML}`;
    }
  }
  else if (this.id == "AC") {
    this.classList.add('down');
    display.innerHTML = `0`;
    result = 0;
    lastType="";
    firstNumber=0;
  }
  else if (this.className == "operator") {
    this.classList.add('down');
    if (this.innerHTML != "=") {
      firstNumber=parseFloat(display.innerHTML);
      lastType = this.innerHTML;
      addToOperation(display.innerHTML, this.innerHTML);
      display.innerHTML = `0`;
    }
    else {
      addToOperation(display.innerHTML, lastType);
      display.innerHTML = `${result}`;
      if(display.innerHTML=="NaN"){
        alert("Is not possible division by zero");
        result=0;
        display.innerHTML = `0`;
      }
    }
  }
  //console.log(`display: ${display.innerHTML} boton: ${this.innerHTML} ultima operacion: ${lastType} primer numero: ${firstNumber} resultado: ${result}`)
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
