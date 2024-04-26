//Script for the 3rd problem

$(document).ready(function() {
    //Wait for document to completely render
        const button_compute_q3=document.querySelector('#compute-q3');
        button_compute_q3.addEventListener("click", function() {
            largest_prime_factor();
        });

        function largest_prime_factor()
        {
            const max= 600851475143;

            var curr_number = max;
            var curr_prime  = 0;
            var prime_large = 0;
            var counter;
            //function Start

            while (curr_number % 2 === 0) {
                prime_large = 2;
                curr_number /= 2;
            }
        
            // Now, we only need to check odd factors starting from 3
            var factor = 3;
            while (factor * factor <= curr_number) {
                while (curr_number % factor === 0) {
                    prime_large = factor;
                    curr_number /= factor;
                }
                // Increment by 2 to check only odd factors
                factor += 2;
            }
        
            // If the remaining number is prime and greater than 1
            if (curr_number > 1) {
                prime_large = curr_number;
            }

            /*while (curr_number>1)
            {
                counter=0;
                if ((curr_number%2)===0)
                {
                    curr_prime=2;
                    curr_number/=curr_prime;
                    prime_large=bigger_prime(prime_large,curr_prime);

                    console.log("triggered 2");
                }
                else if ((curr_number%3)===0)
                {
                    curr_prime=3;
                    curr_number/=curr_prime;
                    prime_large=bigger_prime(prime_large,curr_prime);
                    
                    console.log("triggered 3");
                }

                for (counter=0; counter<=40; counter++)
                {
                    if ((curr_number%((6*counter)-1))===0)
                {
                    curr_prime=((6*counter)-1);
                    curr_number/=curr_prime;
                    prime_large=bigger_prime(prime_large,curr_prime);

                    console.log("triggered 6+1"+curr_number);
                    counter=41;
                }
                else if ((curr_number%((6*counter)+1))===0)
                {
                    curr_prime=((6*counter)+1);
                    curr_number/=curr_prime;
                    prime_large=bigger_prime(prime_large,curr_prime);

                    console.log("triggered 6-1"+curr_number);
                    counter=41;
                }
                } 
                
                while (counter>40)
                {
                 if ((curr_number%(Math.pow(counter)+(counter+41)))===0)
                {
                    curr_prime=(Math.pow(counter)+counter+41);
                    curr_number/=curr_prime;
                    prime_large=bigger_prime(prime_large,curr_prime);

                    counter=-1;
                    console.log("triggered power");
                    console.log("counter");

                }else
                {
                    counter++;
                }
                
                }
                
                console.log("Counter       : "+(counter-1));
                console.log("Current number: "+curr_number);
                console.log("Largest prime : "+prime_large);
            }*/

            //function Finish
            
            button_compute_q3.innerText=prime_large;
        }

        function bigger_prime(prime_large,curr_prime)
        {
            return Math.max(prime_large, curr_prime);
        }
    
    //End of document ready
    });