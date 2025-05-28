const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');


let expenses = [];

function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center expense-item';
        li.innerHTML = `
            ${expense.amount} - ${expense.description} [${expense.category}]
            <div>
                <button class="btn btn-sm btn-warning me-2" onclick="editExpense(${index})">Edit Expense</button>
                <button class="btn btn-sm btn-danger" onclick="deleteExpense(${index})">Delete Expense</button>
            </div>
        `;
        expenseList.appendChild(li);
    });
}

function addExpense() {
    const amount = amountInput.value;
    const description = descriptionInput.value;
    const category = categoryInput.value;

    if (amount === '' || description === '') {
        alert('Please fill in both amount and description.');
        return;
    }

    expenses.push({ amount, description, category });
    renderExpenses();

    amountInput.value = '';
    descriptionInput.value = '';
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

function editExpense(index) {
    const expense = expenses[index];
    amountInput.value = expense.amount;
    descriptionInput.value = expense.description;
    categoryInput.value = expense.category;
    deleteExpense(index);
}

addExpenseBtn.addEventListener('click', addExpense);
