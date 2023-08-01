import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

//     const [enteredYear, setEnteredFilter] = useState('');

    const dropDownChangeHandler = (event) => {

        // setEnteredFilter(event.target.value);
        // console.log(event.target.value);
        props.onChangeFilter(event.target.value);
   };


    return(
        <form>
            <div className='expenses-filter'>

                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select value={props.selected} onChange={dropDownChangeHandler}>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                    </select>
                    
                </div>

            </div>
        </form>
    );
};

export default ExpenseFilter;