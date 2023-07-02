import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div>
          <ExpenseTitle title={props.title} />
          <ExpenseAmount amount={props.amount} />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
