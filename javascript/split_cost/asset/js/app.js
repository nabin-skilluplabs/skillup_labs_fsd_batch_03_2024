function User(name, email, mobile, photo) {
  this.name = name;
  this.email = email;
  this.mobile = mobile;
  this.photo = photo;
}

function Expense(description, amount) {
  this.description = description;
  this.amount = amount;
  this.isSettled = false;
  this.date = new Date();
}

function SplitCostApp() {
  this.unsettledAmount = 0;
  this.users = [];
  this.expenses = [];

  this.displayUnsettledAmount = function () {
    document.querySelector(".amount").textContent = `$${this.unsettledAmount}`;
  };

  this.addUser = function (name, email, mobile, photo) {
    const user = new User(name, email, mobile, photo);
    this.users.push(user);
    this.displayUsers();
  };

  this.displayUsers = function () {
    let userElements = "";
    for (let user of this.users) {
      userElements += `<div><img src="${user.photo}" alt="${user.name}"/></div>`;
    }
    document.querySelector(".users-wrapper").innerHTML = userElements;
  };

  this.addExpenses = function (event) {
    event.preventDefault();
    const description = document.querySelector("#description").value;
    const amount = document.querySelector("#amount").value;

    if (description && amount) {
      const expense = new Expense(description, amount);
      this.expenses.unshift(expense);
      this.displayExpenses();
      document.querySelector("form").reset();
      this.calculateUnsettledAmount();
      this.displayUnsettledAmount();
    }
  };

  this.calculateUnsettledAmount = function () {
    let total = 0;
    for (let expense of this.expenses) {
      if (!expense.isSettled) {
        total = total + Number(expense.amount);
      }
    }
    const unsettledAmount = total / this.users.length ;
    this.unsettledAmount = unsettledAmount.toFixed(2);
  };

  this.displayExpenses = function () {
    let expenseElements = "";
    for (let expense of this.expenses) {
      expenseElements += `
            <div class="expenses-item ${expense.isSettled && "settled"}"><div>
            <span>${expense.description}</span>
            <span>$${expense.amount}</span>
            </div> <div class="date">"${expense.date}" </div></div>`;
    }
    document.querySelector(".expenses-wrapper").innerHTML = expenseElements;
  };

  this.addNewEventListener = function () {
    document.querySelector("form").addEventListener("submit", (event) => {
      this.addExpenses(event);
    });
  };
  this.addSettleNowEventListener = function () {
    document
      .querySelector("#settleNowBtn")
      .addEventListener("click", (event) => {
        this.settleNow(event);
      });
  };
  this.settleNow = function (event) {
    this.expenses = this.expenses.map((expense) => {
      return { ...expense, isSettled: true };
    });
    this.displayExpenses();
    this.calculateUnsettledAmount();
    this.displayUnsettledAmount();
  };

  this.addNewUserEventListener = function () {
    document.getElementById("addNewUser").addEventListener("click", () => {
      const randomValue = parseInt(Math.random() * 100);
      this.addUser(
        "jethalaal",
        "jethalaal@goley.com",
        "04567890283",
        `https://randomuser.me/api/portraits/women/${randomValue}.jpg`
      );
      this.calculateUnsettledAmount();
      this.displayUnsettledAmount();
    })
  };
}

const splitCostApp = new SplitCostApp();

splitCostApp.addNewEventListener();
splitCostApp.addSettleNowEventListener();
splitCostApp.displayUnsettledAmount();
splitCostApp.addUser(
  "jethalaal",
  "jethalaal@goley.com",
  "04567890283",
  "https://randomuser.me/api/portraits/men/90.jpg"
);
splitCostApp.addUser(
  "Sameer",
  "Bhuwan@goley.com",
  "04562347890",
  "https://randomuser.me/api/portraits/men/81.jpg"
);
splitCostApp.addUser(
  "Nabin sir",
  "nabin@skillup.com",
  "04512345676",
  "https://randomuser.me/api/portraits/men/33.jpg"
);
splitCostApp.addUser(
  "Bhuwan",
  "Bhuwan@goley.com",
  "04509876543",
  "https://randomuser.me/api/portraits/men/54.jpg"
);

splitCostApp.displayUsers();
splitCostApp.addNewUserEventListener();
