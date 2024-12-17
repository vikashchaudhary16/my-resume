//currying function in JavaScript

function addon(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

console.log(addon(1))
console.log(addon(1)(3))
console.log(addon(1)(3)(5))