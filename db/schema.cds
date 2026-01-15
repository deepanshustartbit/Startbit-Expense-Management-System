using { managed } from '@sap/cds/common';

namespace sbtexp;

entity Catagories : managed {
  key ID    : UUID;
  name      : String(111) ;
  description    : String(1111);
}

/* Expense */ 
entity Expenses : managed { 
  key ID      : UUID; 
  title       : String(150); 
  amount      : Decimal(9,2); 
  currency    : String(3); 
  expenseDate : Date; 
  notes       : String(500); 
  category    : Association to Catagories; 
  createdBywho: Association to Users;
}

/** Hierarchically organized Code List for Genres */
entity Users : managed {
  key ID : UUID;
  name   : String(100);
  email  : String(100);
  
  expenses : Association to many Expenses
               on expenses.createdBywho = $self;
}
