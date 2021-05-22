import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("this should render dashboard page", () => {
  const render = shallow(<ExpenseDashboardPage />);
  expect(render).toMatchSnapshot();
});
