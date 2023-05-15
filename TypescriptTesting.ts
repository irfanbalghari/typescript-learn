

  interface Person  {
    name: string
    Age: number
    isAlive: boolean
  }

type Animal = {
  name: string
  sound: string
  rate: number
}

let Dogi: Animal;

let array1: string[];

let obj1: {
  name: string,
  Age: number
};

let obj2: Person;

obj1 = {
    name : "irafn",
   Age: 23
  }

  obj2 = {
    name : "aslam",
   Age: 23,
   isAlive: true

  }

 function Add( a: number, b: number ): number {
  return a + b;
}
let result = Add( 5 , 8);

console.log("the result is: ", result);