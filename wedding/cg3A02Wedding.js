function calculate(numOfGuests, numOfTables){
    //calculate full table(s)
    fullTables = Math.floor(numOfGuests/numOfTables);

    //calculate remaining(s) at a table
    remainingGuests = (numOfGuests%numOfTables); 

    return{
        numOfGuests : numOfGuests,
        numOfTables : numOfTables,
        fullTables : fullTables,
        remainingGuests : remainingGuests,
    };
}

//prompts user input
let numOfGuestsInput = prompt("How many guest(s) do you have?");
let numOfTablesInput = prompt("How many table(s) do you want?");

//converts input to numeric data types
let numOfGuests = parseInt(numOfGuestsInput);
let numOfTables = parseInt(numOfTablesInput);

if (isNaN(numOfGuests) || isNaN(numOfTables) || numOfGuests <= 0 || numOfTables <= 0) {
    alert("Invalid input. Please enter valid positive numbers.");
} else {
    let result = calculate(numOfGuests, numOfTables);
    alert(`Your ${result.numOfGuests} guests will be seated as follows: ${result.remainingGuests} tables of ${result.fullTables + 1}, and ${numOfTables - result.remainingGuests} table of ${result.fullTables}.`);
}