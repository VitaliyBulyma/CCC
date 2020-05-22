// Hide output message
document.getElementById("output").style.display = "none";
function onSubmit() {
    // get elements from inputs
    var baseNum = parseInt(document.getElementById("base-num").value);
    var shiftNum = parseInt(document.getElementById("shift-num").value);
    // get element for output
    var base = document.getElementById("base");
    var shift = document.getElementById("shift");
    var sum = document.getElementById("sum");

    if (!baseNum || !shiftNum || isNaN(shiftNum) || isNaN(baseNum)) {
        document.getElementById("err").innerHTML = "Please Enter All values(Only positive numbers )";
    } else {
        // Clear Error, if present
        document.getElementById('err').style.display = "none";
        
        // Initialize array to store base number
        var numbers = [baseNum]; 
        // multiply first number(0 index) in the array by 10
        // push to the array
        // multiply next number by 10
        // push number to the array
        for (var i=0; i<shiftNum; i++){
            var temp = numbers[i];
            temp *=10;
            numbers.push(temp);            
        }
        
        console.log (numbers);

        // sum all numbers from array
        // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
        var total= numbers.reduce(function(acc, val) { return acc + val; }, 0);
        // Display output
        document.getElementById("output").style.display = "block";
        base.innerHTML = baseNum;
        shift.innerHTML = shiftNum;
        sum.innerHTML = total;
        

    }
}