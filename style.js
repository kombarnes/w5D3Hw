// Sum All Primes

function sumPrimes(num) {
    var array = [];
    for(var i = 2; i <= num; i++){
        for(var j = 2; j <= i; j++){
            if(i===j){
                array.push(i);
            }
            if(i % j === 0){
                break;
            }
        }
    }
    return array.reduce(function(x,y){return x+y;});
}

sumPrimes(10);

//Make a Person

var Person = function(firstAndLast){
    var array = firstAndLast.split(" ");
    this.getFirstName = function(){
        return array[0];
    };

    this.getLastName = function(){
        return array[1];
    };

    this.getFullName = function(){
        return array[0] + " " + array[1];
    };

    this.setFirstName = function(first){
        array[0] = first;
    };

    this.setLastName = function(last){
        array[1] = last;
    };

    this.setFullName = function(firstAndLast){
        var arraySplit = firstAndLast.split(" ");
        setFirstName(arraySplit[0]);
        setLastName(arraySplit[1]);
    };

};

var bob = new Person('Bob Ross');

//Drop it
function dropElements(arr, func) {
    while(!func(arr[0])){
        arr.shift();
    };
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

