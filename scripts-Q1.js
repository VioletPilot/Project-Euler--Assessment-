//Script for the 1st problem

$(document).ready(function() 
{
//Wait for document to completely render

        const button_compute_q1 = document.querySelector('#compute-q1');
        button_compute_q1.addEventListener("click", function() {
            multiples_under_max();
        });

        function multiples_under_max()
        {
            const multiple1    = 3;//document.querySelector("#1st-multiple");
            const multiple2    = 5;//document.querySelector("#2nd-multiple");
            const max          = 1000;//document.querySelector("#maximum");

            var total = 0;

            for (i=0; i<max; i++)
            {
                if (((i%multiple1===0)||(i%multiple2===0)))
                {
                    total+=i;
                }
            }
            button_compute_q1.innerText=total;
        }
//End of document ready
});