import React , {useState } from "react";
import "./ExpenseItem.css";
// import card from './Card'

const ExpenseItem=(props) => {

 const [ title, setTitle] = useState(props.title);

const clickHandler=() =>{

  setTitle('updated');
  console.log(title);
}

  return (
    <>
    <div className="expense-item">
      <div> {props.date.toISOString()} </div>
      <div className="expense-item_description"> </div>
      <h2>{title}</h2>
      <div className="expense-item_price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}> change tittle</button>
    </>
  );
}

export default ExpenseItem;
