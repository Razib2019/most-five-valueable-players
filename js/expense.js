// Calculate Total Player Expense
document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById('player-expense-field');

    if (isNaN(perPlayerExpense)) {
        alert('Please enter a valid Number As Input and make sure it will not text or Negative number');
        return '';
    }

    const numberOfTotalPlayer = getTextElementValueById('total-added-player');

    const totalPlayerExpense = perPlayerExpense * numberOfTotalPlayer;

    setTextElementValueById('players-total-expenses', totalPlayerExpense);

});

// Calculate Total Expense 

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const managerExpense = getInputFieldValueById('manager-expense-field');

    const coachExpense = getInputFieldValueById('coach-expense-field');

    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert('Please enter a valid Number As Input and make sure it will not text or Negative number');
        return '';
    }

    const totalPlayerExpenseAmount = getTextElementValueById('players-total-expenses');

    const total = totalPlayerExpenseAmount + managerExpense + coachExpense;

    setTextElementValueById('calculate-total-expense', total);
});