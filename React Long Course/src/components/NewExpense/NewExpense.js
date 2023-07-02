import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (newExpenseData) => {
    const newExpenseObj = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseObj);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
