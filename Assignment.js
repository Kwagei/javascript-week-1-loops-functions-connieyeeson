

// 1. Write a function *areEvenNumbers* that 
// iterates from 1 -100 and prints an array containing
//  only the even numbers.

function evenNumber(){
    let arr = [];
    for (let i = 1; i <= 100; i++){
    if( i % 2 === 0){
          arr += i;
}
 
}
  console.log(arr);
  } 
evenNumber();

// 2. A list of numbers 1 - 10 is given, write a function
//  that prints the reverse of that that list

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function reverselist(list){
		list = [];
		for ( let i = arr.length; i > 0; i-- ){
		list += i;
}
		console.log(list);
}
	reverselist( arr);

    // 3. let arr = [1,5,30,56,3,48,67,44,7,32] write a function
    //  that prints that highest number
    //  in the array and prints the average of the numbers.

    