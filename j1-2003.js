
function onSubmit() {
    // get elements from inputs
    var tLength = parseInt(document.getElementById("tine-length").value);
    var tSpacing = parseInt(document.getElementById('tine-spacing').value);
    var hLength = parseInt(document.getElementById('handle-length').value);
  
    if(!tLength || !tSpacing || !hLength ){
        document.getElementById("err").innerHTML = "Please Enter All values";        
    } else{
        // Clear Error, if present
        document.getElementById('err').style.display= "none";
        document.getElementById("output").innerHTML = " ";  
        // Render prongs
        for (var i = 0; i < (tLength); i++) {            
            document.getElementById("output").innerHTML += "<br/>";
            document.getElementById("output").innerText += "*";
            for (var c = 0; c < tSpacing; c++) {
                document.getElementById("output").innerHTML += "&nbsp;";
            }
            document.getElementById("output").innerHTML += "*";
            for (var t = 0; t < tSpacing; t++) {
                document.getElementById("output").innerHTML += "&nbsp;";
            }
            document.getElementById("output").innerHTML += "* <br/>";
        }
        // Render the middle part
        for (var f = 0; f < (tSpacing + 3); f++) {
            document.getElementById("output").innerHTML += "*";
        }
        document.getElementById("output").innerHTML += "<br/>";

        // Render the Handle
        for (var handle = 0; handle < hLength; handle++) {
            for (var h = 0; h < (tSpacing+2); h++) {
                document.getElementById("output").innerHTML += "&nbsp;";
            }
            document.getElementById("output").innerHTML += "* <br/>";
        }
    }
}