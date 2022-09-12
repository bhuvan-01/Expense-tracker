import React from 'react'
import Chart from './Chart'

const ExpensesChart=(props)=> {
    const chartDataPoints=[
       { label:'jan', value:0},
       {label:'feb',value:0},
       { label:'Mar', value:0},
       {label:'Aprl',value:0},
       
       { label:'may', value:0},
       {label:'jun',value:0},
       
       { label:'jul', value:0},
       { label:'Aug',value:0},
       
       { label:'sep', value:0},
       {label:'oct',value:0},
       
       { label:'Nov', value:0},
       {label:'Dec',value:0},
       
    ];
    for (const expense in props.expense){
    const expenseMonth= expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    }
  return (
    <div>
        {/* <Chart/> */}
        <chart dataPoints={chartDataPoints}/>;

    </div>
  )
};

export default ExpensesChart;