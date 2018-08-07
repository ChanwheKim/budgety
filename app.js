// BUDGET CONTROLLER
var budgetController = (function() {


})();


// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputBudget: '.add__budget',
        inputDescription: '.add__description',
        inputType: '.add__type',
        inputQuantity: '.add__quantity',
        inputUnitCost: '.add__unit-cost',
        inputBtn: '.add__btn'
    }
    
    return {
        getInput: function() {
            return {
                budget: document.querySelector(DOMstrings.inputBudget).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                type: document.querySelector(DOMstrings.inputType).value,
                quantity: document.querySelector(DOMstrings.inputQuantity).value,
                unitCost: document.querySelector(DOMstrings.inputUnitCost).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the field data input
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add a new item to data structure

        // 3. Add a new item on the user interface

        // 4. Clear the fields

        // 5. Calculate and update budget

        // 6. Calculate and update percentage

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);