
 let user;
 let seats = [false, false, false, false, false, false, false, false, false, false];
 let firstClass = 1;
 let economy = 6;
 let cust = 0;
 
 //Function
 function bookingSeat() {
     
     if (cust <= 10)
     
         while ((firstClass != 0) && (economy != 0)) {
             user = parseInt(document.getElementById("form").user.value);
              
             if (user == 1) {
                
                 if (firstClass <= 5 && seats[firstClass] == 0) {
                     //if user books again 
                     let check = prompt("You have booked first class, seat " + firstClass + ". Do you want to make another booking?", "yes or no");
                     if (check == "yes") {
                         seats[firstClass] - 1 //removes one seat from firstclass 
                         ++cust; //add user to let 
                        ++firstClass; //adds one seat to firstClass
                     }
                     else if(check == "no") {
                        alert("Your flight will be leaving in three hours Thankyou for using RotaVegas airlines");
                         break;
                     }
                 } 
                 //If firstclass is full and economy still has seats, Ask if they would like a seat in economy 
                 else if (firstClass > 5 && economy <= 10) {
                    let con = prompt("First class seats are full. Can I offer you a economy seat?", "yes or no");
 
                     if (con == "yes") {
                         //see if they want another booking
                    let an = prompt("You have booked in ecomony class, seat " + economy + ". Would you like to make another booking?", "yes or no");
                        if (an == "yes") {
                        seats[economy] - 1; //removes seat from economy class
                        ++cust; //add client to variable
                        ++economy; //adds seat to economy class
                     }
                     else if(an == "no") {
                         alert("Flight leaves in 3 hours Thankyou for using RoatVegas airlines ");
                         break;
                     }
                 }                    
             } 
 
                 if (user == 2) {

                 if (economy <= 10 && seats[economy] == 0) {
                 let fs = prompt("You have booked economy class, seat " + economy + ".  Do you want to make another booking?");
                 if (fs == "yes")
                     seats[economy] - 1 // Removes seat from economy 
                    ++cust; //add client to variable 
                    ++economy;//adds seat to first class
                }
                else if(fs == "no") {
                    alert("Your flight will be leaving in three hours")
                    break;
                 }
             }
                else if (economy > 10 && firstClass <= 5) {
                    //check if they would like a seat in first class 
                    let con = confirm("Economy is full. Would like a seat in first class?");
                    if (con) {
                        confirm("You have booked  first class, seat " + firstClass + ". do you want to make another booking?");
                         seats[firstClass] - 1; //Removes seat from first class
                         ++cust; // Add client to variable
                         ++firstclass; // adds seat to first class
                     }
 
                     else {
                         alert("Flight leaves in 3 hours thankyou for using RotaVegas airlines");
                     
                     }
                 }
             }
 
         } 
 }
 