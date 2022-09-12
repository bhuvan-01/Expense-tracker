import React from 'react'

function Expenses() {
  return (
    <div>
        <div className="App">
      <h1>Bhuvan Rajpot</h1>
      <ExpenseItem
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
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
    </div>
  )
}

export default Expenses