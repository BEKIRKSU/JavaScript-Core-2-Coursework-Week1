/*
  You are at a restaurant that has two items on the menu, burger and falafel.
  The menu object includes these two items and their price.

  You have an object cashRegister which handles charging for ordered items but it is missing some methods to do this.

  Add a method to the cashRegister object
    - the method name should be orderBurger
    - the method should take one argument called balance, which is a number
    - the method should check if there is enough money in the balance to order a burger (i.e. will the balance be greater than or equal to 0 if the burger is ordered)
    - if there is enough money in the balance to order the burger, then the price of the burger should be subtracted from the balance
    - the method should return the new balance

  Add another method to the cashRegister object which is called orderFalafel and handles ordering a falafel, in the same way as ordering a burger.
*/

const MENU = {
  burger: 6.5,
  falafel: 7.25,
};

let cashRegister = {
    balance: 0,
  
    orderBurger: function(balance) {
      const burgerPrice = MENU.burger;
      if (balance >= burgerPrice) {
        this.balance = balance - burgerPrice;
        return this.balance;
      } else {
        return balance;
      }
    },
    orderFalafel: function(balance) {
      const falafelPrice = MENU.falafel;
      if (balance >= falafelPrice) {
        this.balance = balance - falafelPrice;
        return this.balance;
      } else {
        return balance;
      }
    },
  };
    
  //   currentBalance: 0,
  //   orderBurger: function(burgerPrice) {
  //     if (this.currentBalance - burgerPrice >= 0) {
  //       this.currentBalance -= burgerPrice;
  //       return this.currentBalance;
  //     } else {
  //       return "You don't have enough money in your card. Sorry mate.";
  //     }
  //   }
  // };

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 4-restaurant.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("orderBurger subtracts 6.5 from balance", () => {
  let balance = 6.5;
  expect(cashRegister.orderBurger(balance)).toEqual(0);
});

test("orderFalafel subtracts 7.25 from balance", () => {
  let balance = 7.25;
  expect(cashRegister.orderFalafel(balance)).toEqual(0);
});

test("orderBurger will not subtract from balance if balance is too low", () => {
  let balance = 6.49;
  expect(cashRegister.orderBurger(balance)).toEqual(6.49);
});

test("orderFalafel will not subtract from balance if balance is too low", () => {
  let balance = 7.24;
  expect(cashRegister.orderFalafel(balance)).toEqual(7.24);
});
