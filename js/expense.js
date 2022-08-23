document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById('player-expense-field');

    if (isNaN(perPlayerExpense)) {
        alert('Please enter a valid amount and make sure its not text or minus number')
        return '';
    }

    const numberOfTotalPlayer = getTextElementValueById('total-added-player');

    const totalPlayerExpense = perPlayerExpense * numberOfTotalPlayer;

    setTextElementValueById('players-total-expenses', totalPlayerExpense);

});

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const managerExpense = getInputFieldValueById('manager-expense-field');

    const coachExpense = getInputFieldValueById('coach-expense-field');

    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert('Please enter a valid amount and make sure its not text or minus number');
        return '';
    }

    const totalPlayerExpenseAmount = getTextElementValueById('players-total-expenses');

    const total = totalPlayerExpenseAmount + managerExpense + coachExpense;

    setTextElementValueById('calculate-total-expense', total);
});