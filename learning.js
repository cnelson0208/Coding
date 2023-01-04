console.log("Hello World!"); 
let sentence = ("Hello World!")
console.log (sentence);
console.log (sentence + "Hello World!");

let name = ("Chance");
console.log(name);
console.log (name + "Chance" );


console.log("843-901-3543");
console.log(843-901-3543); 

let y = 1;
y=2
{
    let y = 3; console.log(y);
}

let cl = console.log;
cl("Hello World!");

let myname = "Chance"
for (let index = 0; index < myname.length; index++) {
    const letter = myname[index];
    console.log(letter);
    
}

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);

let nb1 = Number((" 3:"));
let nb2 = Number((" 5:"));
let nb3 = Number((" 8:"));
if (nb1 > nb2) {
nb1 = nb3 * 2;
} else {
nb1++;
if (nb2 > nb3) {
nb1 += nb3 * 3;
} else {
nb1 = 0;
nb3 = nb3 * 2 + nb2;
}
}
console.log(nb1, nb2, nb3);

console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 

console.log(true && "Hello"); 
console.log(false && "Hello"); 
console.log(undefined && "Hello");
console.log("" && "Hello"); 
console.log("Hello" && "Goodbye") 
console.log(true || "Hello"); 
console.log(false || "Hello"); 
console.log(undefined || "Hello"); 
console.log("" || "Hello"); 
console.log("Hello" || "Goodbye") 


    
for (let index = 1; index < 101; index++) { 
    if(index % 3 === 0 && index % 5 === 0) {
        console.log ("FizzBuzz");
    } else if(index % 3 === 0) {
        console.log("Fizz");
    } else if(index % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(index);
    }
    
    
}

let myObject= {};
let o = {};
o.name = "Chance";
o.age = 15;console.log
cl(o);

console.log("Hello from JavaScript!");
console.log("Let's do some math");
console.log(4 + 7);
console.log(12 / 0);
console.log("Goodbye!");

cl (6 - 3);
cl (6 + 3);
cl (6 / 3); 
cl (6 * 3)

let pie;
pie = 3.14;
console.log(pie);

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

let number1 = 5;
let number2 = 3;
cl (number1); 
cl (number2); 

console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");


for (let index = 1; index <= 5; index++) {
    console.log(index);
    index++; 
    }


    for (let index = 1; index <= 5; index++) {
        console.log(index);
        index++; 
        }

    
    for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) {
    console.log(`${index} is even`);
    }
    } 

    function sayHello(firstName, lastName) {
        const message = `Hello, ${firstName} ${lastName}!`;
        return message;
        }
        console.log(sayHello("Chance"));
     

        let number = 0;
        while(number <2 || number >9){
          number = Number(("5"))
        }
       for(i = 1; i <= 10; i++){
            result = (number * i)
        console.log(`${number} x ${i} = ${result}`);
        }
       

   
        function min(n1,n2) {
            if (n1 < n2) {
                return n1;
            } else if ( n2 < n1) {
                return n2;
            } else {
                return n1 || n2;
            }
            }
            console.log(min(4.5,5)); 
            console.log(min(1,1));  
            console.log(min(19,9)); 

            const arrays = [[1, 4], [11], [3, 5, 7]];
            console.log(31); 

            const students = [
                {
                name: "Anna",
                sex: "f",
                grades: [4.5, 3.5, 4]
                },
                {
                name: "Dennis",
                sex: "m",
                country: "Germany",
                grades: [5, 1.5, 4]
                },
                {
                name: "Martha",
                sex: "f",
                grades: [5, 4, 2.5, 3]
                },
                {
                name: "Brock",
                sex: "m",
                grades: [4, 3, 2]
                }
                ];
                const femaleStudentsResults = [];
                for (const student of students) {
                if (student.sex === "f") {
                let gradesSum = 0;
                for (const grade of student.grades) {
                gradesSum += grade;
                }
                const averageGrade = gradesSum / student.grades.length;
                femaleStudentsResults.push({
                name: student.name,
                avgGrade: averageGrade
                });
                }
                }
                console.log(femaleStudentsResults);
