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
});

