import selectExpensesTotal from "../../selectors/expenseTotal";
import expenses from "../fixtures/expenses";

test("this should return 0 if no expense", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});
test("this should return the amount of the first expense", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("this should return the amount of the first expense", () => {
  const res = selectExpensesTotal([...expenses]);
  expect(res).toBe(114195);
});

