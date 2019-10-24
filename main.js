"use strict"
//-------------------calls the coffee to the screen-------------------
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div>' + "<h1>" + coffee.name + "</h1>" + coffee.roast +'</div>';
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
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}
//-------------- coffee search --------------------------
function searchCoffees() {
    var input, filter, div, txtValue;
    input = document.getElementById("name-selection");
    filter = input.value;
    div = document.getElementById("coffees");

    for (var i = 0; i < coffees.length; i++){
        txtValue = coffees.name;
        if(txtValue.indexOf(filter) > -1){
            coffees.name.style.display = "";
        } else {
            coffees.name.style.display = "none";
        }
    }
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

div.innerHTML = renderCoffees(coffeesReversed);

submitButton.addEventListener('click', updateCoffees);
