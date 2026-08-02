function greet(name = "Guest"){
    return "Hello, " + name ;
}


console.log(greet("Rayhan"));
console.log(greet());
console.log(greet("Isha"));


function makeCoffee(suger = 1){
    return "Coffee is prepared " + "with " + suger + " spoon suger"
}

console.log(makeCoffee(2));
console.log(makeCoffee(5));
console.log(makeCoffee());