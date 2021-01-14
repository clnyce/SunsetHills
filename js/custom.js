// Sunset Hills Function
function sunsetHills() {

    // Parse User Input
    let userInput1 = parseInt(document.getElementById("input1").value);
    let userInput2 = parseInt(document.getElementById("input2").value);
    let userInput3 = parseInt(document.getElementById("input3").value);
    let userInput4 = parseInt(document.getElementById("input4").value);
    let userInput5 = parseInt(document.getElementById("input5").value);

    //Check that only numbers have been entered
    if (isNaN(userInput1) || isNaN(userInput2) || isNaN(userInput3) || isNaN(userInput4) || isNaN(userInput5)) {
        swal("Unable to process", "Please enter a number in each box!", "error");
        clearText();
        return;
    }    

    // Build Array with user Input
    let userArray = [userInput1, userInput2, userInput3, userInput4, userInput5];
    // Open new array to hold buildings that can see sunset
    let buildArray = [];
    // Open place holder to count buildings and hold first building which always sees sunset
    let count = 1;
    let currentMax = userArray[0];
    buildArray.push(`<br>Building #1 with a height of ${userArray[0]} feet<br>`);

        // Loop through buildings in array to see if height is taller than 1st building, and store the ones that are for output.
        for (let i = 0; i < userArray.length; i++) {

            if (userArray[i] > currentMax) {
                count++;
                // buildArray.push(userArray[i]) ;
                buildArray.push(`Building #${userArray.indexOf(userArray[i]) + 1} with a height of ${userArray[i]} feet<br>`) ;
                currentMax = userArray[i];
            }
            document.getElementById("output").innerHTML = `"<b>${count}</b>" building(s) can see the sunset. Those buildings are: <br><b>${buildArray.join("")}</b>`;
            clearText();
    }
}

// Clear user entered input
function clearText() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
}