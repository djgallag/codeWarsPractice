// This is the practice assessment question for Fullstack Academy

/*
FizzBuzz
*/

// This is my solution to their practice question

function fizzBuzz(num) {
    let value = 1;
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {       //This will assign value to FizzBuzz
            value = 'FizzBuzz';
        }
        else if (i % 3 === 0) {                   //This will assign value to Fizz
             value = 'Fizz';
        }
        else if (i % 5 === 0) {                    //This will assign value to Buzz
            value = 'Buzz';
        }
        else {                                       // This will assign value to i
            value = `${i}`;
        }
        console.log(value);
    }
}