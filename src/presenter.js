import generarFizzBuzz from "./fizzbuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroUsr = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
