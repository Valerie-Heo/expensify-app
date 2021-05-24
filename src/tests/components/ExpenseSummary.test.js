import { shallow } from "enzyme";
import React from "react";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("this should render Expense Summary without any expenses ", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseCost={195} />
  );
  expect(wrapper).toMatchSnapshot();
});


test("this should render Expense Summary without any expenses ", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={13} expenseCost={223195} />
  );
  expect(wrapper).toMatchSnapshot();
});
