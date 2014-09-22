$(document).ready(function(){
	var fizzbuzz = function() {
		var number = prompt("Enter A Whole Number From 1-100");
		number = +number;
		while (isNaN(number)) {
			number = prompt("Please Enter A NUMBER!");
		}	// End of NaN...
		while (number %1 != 0) {
			number = prompt("Did we forget what a WHOLE NUMBER is?");
		}	//End of != 0...
		for (i=1; i<=number; i++) {
			if(i%3===0 && i%5===0){
				$('.list').append("<li class='fizz-buzz'>" + "FizzBuzz" + "</li>");
			}	// End of if loop...
			else if(i%3===0){
				$('.list').append("<li class='fizz-buzz'>" + "Fizz" + "</li>");
			}	// End of else if loop...
			else if(i%5===0){
				$('.list').append("<li class='fizz-buzz'>" + "Buzz" + "</li>");
			}	// End of else if loop...
			else {
				$('.list').append("<li>"+ i +"</li>");
			}	// End of else loop...
		}	// End of for loop...
	}	// End of fizzbuzz function...
	fizzbuzz();
});	// End of .ready function...