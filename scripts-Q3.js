//Script for the 3rd problem

$(document).ready(function() 
{
	//Wait for document to completely render
	const button_compute_q3 = document.querySelector('#compute-q3');
	const card_answer_q3	= document.querySelector('#answer-q3');
	button_compute_q3.addEventListener("click", function() 
	{
		largest_prime_factor();
	});

	function largest_prime_factor() 
	{
		//function Start
		const max = parseInt(document.querySelector('#max-prime').value);

		var curr_number = max;
		var prime_large = 0;

		//Check for a prime factor of 2
		while (curr_number % 2 === 0) 
		{
			prime_large = 2;
			curr_number /= 2;
		}

		//Check for prime factors 3 and above
		var factor = 3;
		while (factor * factor <= curr_number) 
		{
			while (curr_number % factor === 0) 
			{
				prime_large = factor;
				curr_number /= factor;
			}
			// Increment by 2 to check only odd factors
			factor += 2;
		}

		// If the remaining number is prime and greater than 1
		if (curr_number > 1) 
		{
			prime_large = curr_number;
		}
		card_answer_q3.innerText = prime_large;
		//function Finish
	}

	//End of document ready
});