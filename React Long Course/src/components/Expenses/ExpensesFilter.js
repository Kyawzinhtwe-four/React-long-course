import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Select Year">Select Year</option>
          <option value="2023">2023</option>
          <option value="2023">2022</option>
          <option value="2023">2021</option>
          <option value="2023">2020</option>
          <option value="2023">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
