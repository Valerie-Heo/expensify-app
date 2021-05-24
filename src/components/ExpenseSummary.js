import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import SelectExpenses from "../selectors/expenses";
import SelectExpensesTotal from "../selectors/expenseTotal";

export const ExpenseSummary = ({ expenseCount, expenseCost }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const FormatedexpenseCost = numeral(expenseCost / 100).format("0, 000.00");
  return (
    <div>
      <h1>  Viewing {expenseCount} {expenseWord} with at total cost that equal {FormatedexpenseCost} </h1>
    </div>
  );
};

const mapToStateProp = (state) => {
  const visibleExpenses = SelectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseCost: SelectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapToStateProp)(ExpenseSummary);
