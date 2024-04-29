//Script for the 2nd problem

$(document).ready(function() 
{
	//Wait for document to completely render
	const button_compute_q2 = document.querySelector('#compute-q2');
	const card_answer_q2	= document.querySelector('#answer-q2');
	button_compute_q2.addEventListener("click", function() 
	{
		fib_even_sum();
	});

	function fib_even_sum() 
	{
		//function Start
		const max  = parseInt(document.querySelector("#max-fib").value);

		var fib1   = parseInt(document.querySelector("#fib-seq1").value) -1;
		var fib2   = parseInt(document.querySelector("#fib-seq2").value) -1;
		var sum_even = 0;

		for (var fib3 = 0; fib3 < max;) 
		{
			fib3 = fib1 + fib2;
			fib1 = fib2;
			fib2 = fib3;

			if ((fib3 % 2) === 0) 
			{
				sum_even += fib3;
			}
		}
		card_answer_q2.innerText = sum_even;
		//function Finish
	}

	//End of document ready
});