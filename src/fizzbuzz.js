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
    return numero+"";
}

export default generarFizzBuzz;