import Expenses from "./components/Expenses/Expenses";
import './components/Expenses/ExpenseDate.css';
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";


const dummy_expenses = [
    { id: 'e1',
    title: 'Car Insurance', 
    amount: 2000, 
    date: new Date(2023, 2, 28)
  },
{ id: 'e2',
title: 'Maintenance', 
amount: 8000, 
date: new Date(2023, 2, 10)
}
// { id: 'e3',
// title: 'Electricity bill', 
// amount: 1250, 
// date: new Date(2023, 2, 31)
// },
// {
//   id: 'e4',
//     title: 'Gas bill', 
//     amount: 1105, 
//     date: new Date(2023, 2, 17)
];

// return React.createElement(
//     'div', 
//     {},
//     React.createElement('h2', {}, "Let's get started!"),
//     React.createElement(Expenses, {item: expenses})
//   );

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);
  
  const addExpenseHandler = (expense) =>{

    // setExpenses([expense, ...expenses]);
    // below is clean way of updating an older value of state snapshot
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

  // console.log('In App.js');
  // console.log(expense);

};

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
