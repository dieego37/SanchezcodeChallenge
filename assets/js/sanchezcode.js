let letras = document.getElementById("divLetras");
let numeros = document.getElementById("divNumeros");

let btnA1 = document.getElementById("btnA1");
let btnA2 = document.getElementById("btnA1");
let btnA3 = document.getElementById("btnA1");
let btnA4 = document.getElementById("btnA1");
let btnA5 = document.getElementById("btnA1");
let btnA6 = document.getElementById("btnA1");
let btnA7 = document.getElementById("btnA1");
let btnA8 = document.getElementById("btnA1");
let btnA9 = document.getElementById("btnA1");
let btnA0 = document.getElementById("btnA1");
let tmpLetras = "";
let tmpNumeros = "";
let tmpContador = 0;

//logica
const logicaA1 = () => {
  if (tmpContador >= 12) {
    tmpContador = 10;
    numeros.innerHTML = "1";
    tmpNumeros = "1";
    tmpContador = tmpContador + 1;
  } else {
    if (tmpContador >= 10) {
      if (tmpNumeros === "1") {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "1";
        tmpNumeros = "1";
        tmpContador = tmpContador + 1;
      }
    } else {
      if (tmpLetras === "A") {
        alert("Letra ya ingresada");
      } else {
        letras.innerHTML = "A";
        tmpLetras = "A";
        tmpContador = 1;
      }
    }
  }
};

const logicaB2 = () => {
  if (tmpContador >= 11) {
    if (tmpNumeros === "12") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 12) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "12";
        tmpNumeros = tmpNumeros + "2";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "AB") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "A") {
        letras.innerHTML = tmpLetras + "B";
        tmpLetras = tmpLetras + "B";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 2) {
          alert("Letra ya ingresada");
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaC3 = () => {
  if (tmpContador >= 12) {
    if (tmpNumeros === "123") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 13) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "123";
        tmpNumeros = tmpNumeros + "3";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABC") {
      alert("Letra ya ingresada");
      console.log("1");
    } else {
      if (tmpLetras === "AB") {
        letras.innerHTML = tmpLetras + "C";
        tmpLetras = tmpLetras + "C";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 3) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaD4 = () => {
  if (tmpContador >= 13) {
    if (tmpNumeros === "1234") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 14) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "1234";
        tmpNumeros = tmpNumeros + "4";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCD") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABC") {
        letras.innerHTML = tmpLetras + "D";
        tmpLetras = tmpLetras + "D";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 4) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaE5 = () => {
  if (tmpContador >= 14) {
    if (tmpNumeros === "12345") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 15) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "12345";
        tmpNumeros = tmpNumeros + "5";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCDE") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCD") {
        letras.innerHTML = tmpLetras + "E";
        tmpLetras = tmpLetras + "E";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 5) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaF6 = () => {
  if (tmpContador >= 15) {
    if (tmpNumeros === "123456") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 16) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "123456";
        tmpNumeros = tmpNumeros + "6";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCDEF") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCDE") {
        letras.innerHTML = tmpLetras + "F";
        tmpLetras = tmpLetras + "F";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 6) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaG7 = () => {
  if (tmpContador >= 16) {
    if (tmpNumeros === "1234567") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 17) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "1234567";
        tmpNumeros = tmpNumeros + "7";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCDEFG") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCDEF") {
        letras.innerHTML = tmpLetras + "G";
        tmpLetras = tmpLetras + "G";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 7) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaH8 = () => {
  if (tmpContador >= 17) {
    if (tmpNumeros === "12345678") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 18) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "12345678";
        tmpNumeros = tmpNumeros + "8";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCDEFGH") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCDEFG") {
        letras.innerHTML = tmpLetras + "H";
        tmpLetras = tmpLetras + "H";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 8) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaI9 = () => {
  if (tmpContador >= 18) {
    if (tmpNumeros === "123456789") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 19) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "123456789";
        tmpNumeros = tmpNumeros + "9";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "ABCDEFGHI") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCDEFGH") {
        letras.innerHTML = tmpLetras + "I";
        tmpLetras = tmpLetras + "I";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 9) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

const logicaJ0 = () => {
  if (tmpContador >= 19) {
    if (tmpNumeros === "1234567890") {
      alert("Número ya ingresado");
    } else {
      if (tmpContador >= 20) {
        alert("Número ya ingresado");
      } else {
        numeros.innerHTML = "1234567890";
        tmpNumeros = tmpNumeros + "0";
        tmpContador = tmpContador + 1;
      }
    }
  } else {
    if (tmpLetras === "AABCDEFGHIJ") {
      alert("Letra ya ingresada");
    } else {
      if (tmpLetras === "ABCDEFGHI") {
        letras.innerHTML = tmpLetras + "J";
        tmpLetras = tmpLetras + "J";
        tmpContador = tmpContador + 1;
      } else {
        if (tmpContador >= 10) {
          if (tmpContador >= 11) {
            alert("Faltan Números");
          } else {
            alert("Letra ya ingresada");
          }
          s;
        } else {
          alert("Faltan Letras");
        }
      }
    }
  }
};

//eventos click
btnA1.onclick = function () {
  logicaA1();
};

btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
  logicaC3();
};

btnD4.onclick = function () {
  logicaD4();
};

btnE5.onclick = function () {
  logicaE5();
};

btnF6.onclick = function () {
  logicaF6();
};

btnG7.onclick = function () {
  logicaG7();
};
// eventos click
btnH8.onclick = function () {
  logicaH8();
};
// eventos click
btnI9.onclick = function () {
  logicaI9();
};
// eventos click
btnJ0.onclick = function () {
  logicaJ0();
};
