document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerExpenseField = document.getElementById('player-expense-field');
    const perPlayerExpenseString = perPlayerExpenseField.value;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);
    perPlayerExpenseField.value = '';

    const NumberOfThePlayer = document.getElementById('total-added-player');
    const numberOfThePlayerString = NumberOfThePlayer.innerText;
    const numberOfTotalPlayer = parseInt(numberOfThePlayerString);

    const totalPlayerExpense = perPlayerExpense * numberOfTotalPlayer;

    const totalPlayerExpenses = document.getElementById('players-total-expenses');
    totalPlayerExpenses.innerText = totalPlayerExpense;

});

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerExpenseField = document.getElementById('manager-expense-field');
    const managerExpenseString = managerExpenseField.value;
    const managerExpense = parseFloat(managerExpenseString);

    const coachExpenseField = document.getElementById('coach-expense-field');
    const coachExpenseString = coachExpenseField.value;
    const coachExpense = parseFloat(coachExpenseString);

    const totalPlayerExpenses = document.getElementById('players-total-expenses');
    const totalPlayerExpensesString = totalPlayerExpenses.innerText;
    const totalPlayerExpenseAmount = parseFloat(totalPlayerExpensesString);

    const total = totalPlayerExpenseAmount + managerExpense + coachExpense;

    const calculateTotalExpense = document.getElementById('calculate-total-expense');
    calculateTotalExpense.innerText = total;
});