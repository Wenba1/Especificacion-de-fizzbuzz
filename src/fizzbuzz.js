function generarFizzBuzz(numero){
    if(numero==3){
        return "Fizz";
    }
    else if(numero%3==0){
        return "Fizz"
    }
    else if(numero==5){
        return "Buzz"
    }
    else if(numero%5==0){
        return "Buzz"
    }
    else if(numero==15){
        return "FizzBuzz"
    }
    return numero+"";
}

export default generarFizzBuzz;