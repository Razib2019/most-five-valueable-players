// Event Handler for Budget or Expense Section's Calculate Button 
document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById('player-expense-field');

    if (isNaN(perPlayerExpense)) {
        alert('Please enter a valid Number and make sure it Will Never text or Negative Value');
        return '';
    }

    const numberOfTotalPlayer = getTextElementValueById('total-added-player');

    const totalPlayerExpense = perPlayerExpense * numberOfTotalPlayer;

    setTextElementValueById('players-total-expenses', totalPlayerExpense);

});

// Event Handler for Budget or Expense Section's Calculate Total Button 
document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const managerExpense = getInputFieldValueById('manager-expense-field');

    const coachExpense = getInputFieldValueById('coach-expense-field');

    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert('Please enter a valid Number and make sure it Will Never text or Negative Value');
        return '';
    }

    const totalPlayerExpenseAmount = getTextElementValueById('players-total-expenses');

    const total = totalPlayerExpenseAmount + managerExpense + coachExpense;

    setTextElementValueById('calculate-total-expense', total);
});