function isDistinct(year) { // evaluates if a year has distinct digits
    var num = year;
    var array = []; // empty array 
    var count = num.toString(); // to be able to count how many digits in the input number
    for (var i = 0; i < count.length; i++) {
        array.push(count[i]);
    } // adding characters to array
    
    var notGood = 0;
    for (var c = 1; c <= array.length; c++) { // now I can use .length to know how many times to check in the loop
        if (array[0] == array[c]) { // if one number equal to another, increment counter
            notGood += 1;
        }
    }
    
    if (notGood > 0) { // if counter is more than 0, it means there are repeating numbers
        return false;// number is not distinct
    } else {
        return true; // number is distinct
    }
}

console.log(isDistinct(122));

// Hide output message
document.getElementById("output").style.display = "none";

function onSubmit() {
    // get elements from inputs
    var baseYear = 0;
    baseYear = parseInt(document.getElementById("base-year").value);

    if (!baseYear || isNaN(baseYear) || baseYear == " " || (baseYear > 10000)) {
        // Hide output message
        document.getElementById("output").style.display = "none";
        // Display Error message
        document.getElementById("err").innerHTML = "Please Enter valid year(e.g. 1207)";
    } else {
        // Clear Error, if present
        document.getElementById('err').style.display = "none";
        document.getElementById("output").style.display = "block";
       
        // var allYears = []; // empty array 

        // for (var i = baseYear; i <= 10000; i++) { //populate array with all years starting from entered year
        //     allYears.push(i);
        // }
        // console.log(allYears);
        // console.log(typeof allYears[1]);

        // check if next year after baseYear is distinct, if not add 1 to baseYear
        // when year is distinct output the year
        var b = 1;
        while (isDistinct(baseYear+b)){            
            b++;
        }
        document.getElementById("output").innerHTML=baseYear+b;


        // isDistinct function is checking if a year has distinct digits and returns boolean true if numbers are distinct
        // Unfortunately isDistinct function only compares first number to all other numbers
        // For the function to work properly it needs to compare all digits to each other
        // My main issue I am not sure how to compare a number to another number but exclude itself
        // At this point I cannot afford to spend more time at this assignment, already behind with other classes. 
        // Really curious to see the working solution, if anybody did this one.
        // Thank you

    }
}