import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./App.css";
import NewExpense from "./NewExpense";
import ExpenseForm from "./ExpenseForm";
import ExpensesChart from "./ExpensesChart";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car",
    amount: 85.34,
    date: new Date(2020, 10, 14),
  },
  {
    id: "e2",
    title: "bike",
    amount: 85.34,
    date: new Date(2020, 12, 14),
  },
  {
    id: "e3",
    title: "phone",
    amount: 85.34,
    date: new Date(2020, 5, 14),
  },
];

const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
 const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return[expense,...prevExpenses]
    });
  };
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <expenses items={expenses}/>
      <div/>
      <ExpensesChart/>
      
         {/* {filteredExpenses.length=== 0 ? (
          <p>no expense found.</p>
         ):()} */}
     {/* {props.item.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}    */}
       
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
