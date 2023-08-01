import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

  


                //  {/* <ExpenseItem 
                //  title={props.item[1].title}
                //  amount={props.item[1].amount}
                //  date={props.item[1].date}
                // />
  
                // <ExpenseItem 
                // title={props.item[2].title}
                // amount={props.item[2].amount}
                // date={props.item[2].date}
                // />
  
                // <ExpenseItem 
                // title={props.item[3].title}
                // amount={props.item[3].amount}
                // date={props.item[3].date}
                // /> */}
           
