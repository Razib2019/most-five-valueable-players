document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerExpense = getInputFieldValueById('player-expense-field');

    const numberOfTotalPlayer = getTextElementValueById('total-added-player');

    const totalPlayerExpense = perPlayerExpense * numberOfTotalPlayer;

    setTextElementValueById('players-total-expenses', totalPlayerExpense);

});

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const managerExpense = getInputFieldValueById('manager-expense-field');

    const coachExpense = getInputFieldValueById('coach-expense-field');

    const totalPlayerExpenseAmount = getTextElementValueById('players-total-expenses');

    const total = totalPlayerExpenseAmount + managerExpense + coachExpense;

    setTextElementValueById('calculate-total-expense', total);
});