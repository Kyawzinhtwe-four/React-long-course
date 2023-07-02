import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("Select Year");
  const filterChangeHandler = (filterYearVal) => {
    setFilterYear(filterYearVal);
  };

  const allExpensesItem = [...props.items];
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filterYear === "Select Year" ? (
        <ExpenseList items={allExpensesItem} />
      ) : (
        <ExpenseList items={filteredExpenses} />
      )}
    </>
  );
};
export default Expenses;
