module.exports = function multiplicar (x,y){
    return x * y;
};

module.exports = class Pessoa {
    constructor(dog){
        this.dog = dog;
    };

    latir(){
        console.log(`${this.dog} está latingo..`)
    };
};
