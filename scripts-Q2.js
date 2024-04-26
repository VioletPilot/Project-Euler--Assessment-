//Script for the 2nd problem

$(document).ready(function() {
    //Wait for document to completely render
        const button_compute_q1=document.querySelector('#test'/*'#compute-q2'*/);
        button_compute_q1.addEventListener("click", function() {
            // Call your function here
            fib_even_sum();
        });

        function fib_even_sum()
        {
            var fib1 = 0;
            var fib2 = 1;
            var sum_even=0;

            for(fib3=0; fib3<4000000;)
            {
                fib3 = fib1+fib2;
                fib1 = fib2;
                fib2 = fib3;

                if ((fib3%2)===0)
                {
                    sum_even+=fib3;
                }
            }
            button_compute_q1.innerText=sum_even;
        }
    
    //End of document ready
    });