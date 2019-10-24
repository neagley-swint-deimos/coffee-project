"use strict"
//-------------------calls the coffee to the screen-------------------
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="genDiv">' + "<h3>" + coffee.name + "&emsp;" + "</h3>" + coffee.roast +  '</div>';
    html += '</div>';

    return html;
}

//--------------prints the coffee--------------------------
function renderCoffees(coffeesReversed) {
    var html = '';
    for(var i = coffeesReversed.length - 1; i >= 0; i--) {
        html += renderCoffee(coffeesReversed[i]);
    }
    return html;
}

//-----------------filters the coffees------------------------
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var userInput = document.getElementById("nameSelection").value;
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all")&& coffee.name.toLowerCase().includes(userInput)) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeesReversed = coffees.reverse();

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var inputField = document.querySelector("#nameSelection");

div.innerHTML = renderCoffees(coffeesReversed);

submitButton.addEventListener('click', updateCoffees);
inputField.addEventListener('input', updateCoffees);


