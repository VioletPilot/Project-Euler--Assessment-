//Script for the 1st problem

$(document).ready(function() 
{
	//Wait for document to completely render

	const button_compute_q1 = document.querySelector('#compute-q1');
	const card_answer_q1 = document.querySelector('#answer-q1');
	button_compute_q1.addEventListener("click",
	function() 
	{
		if ((document.querySelector("#first-mult").value !== '') || 
			(document.querySelector("#second-mult").value !== '') || 
			(document.querySelector("#max-mult").value !== '')) 
			{
			multiples_under_max();
		} 
		else 
		{
			window.alert("Please fill in all the inputs for this question!");
		}
	});

	function multiples_under_max() 
	{
		//function Start
		const multiple1 = parseInt(document.querySelector("#first-mult").value);
		const multiple2 = parseInt(document.querySelector("#second-mult").value);
		const max = parseInt(document.querySelector("#max-mult").value);

		const sumOfMultiples = (multiple, max) => 
		{
			const n = Math.floor((max - 1) / multiple);
			return (multiple * n * (n + 1) / 2); //formula for sum of an arithmetic series
		};
	
		card_answer_q1.innerText = sumOfMultiples(multiple1, max) + sumOfMultiples(multiple2, max) - sumOfMultiples(multiple1 * multiple2, max);
		//function Finish
	}
	//End of document ready
});