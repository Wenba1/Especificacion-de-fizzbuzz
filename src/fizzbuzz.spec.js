import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("generar el mismo numero si no sigue ninguna regla", () => {
    //let resultado
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  it("generar el mismo numero para cualquier numero sinosigue ninguna regla", () => {
    //let resultado
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("generar el fizz para el 3", () => {
    //let resultado
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
  it("generar el fizz para mutliplos de 3", () => {
    //let resultado
    expect(generarFizzBuzz(6)).toEqual("Fizz");
    expect(generarFizzBuzz(9)).toEqual("Fizz");
    expect(generarFizzBuzz(12)).toEqual("Fizz");
  });
  it("generar el buzz para el 5", () => {
    //let resultado
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
  it("generar el fizz para mutliplos de 5", () => {
    //let resultado
    expect(generarFizzBuzz(10)).toEqual("Buzz");
    //expect(generarFizzBuzz(15)).toEqual("Buzz");
    expect(generarFizzBuzz(20)).toEqual("Buzz");
  });
  it("generar el fizzbuzz para el 15", () => {
    //let resultado
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });
});
