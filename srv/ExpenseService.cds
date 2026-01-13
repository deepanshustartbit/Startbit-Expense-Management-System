using { sbtexp as database } from '../db/schema';

service ExpenseService  {
    entity Expenses as projection on database.Expenses;
    function FetchExpenseData() returns array of Expenses;
}