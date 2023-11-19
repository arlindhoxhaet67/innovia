/*
 * Filename: sophisticated_code.js
 * Content: An elaborate and complex JavaScript multi-function program
 * 
 * Description:
 * This code demonstrates a sophisticated JavaScript program showcasing numerous functions, classes, and complex logic.
 * It includes a banking system, a messaging system, and a user management system with various operations.
 * This code is detailed, professional, and extensive, demonstrating the versatility of JavaScript in building complex applications.
 */

// Banking System
class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.error("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Messaging System
class Message {
  constructor(sender, receiver, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.message = message;
    this.timestamp = new Date();
  }

  showMessage() {
    console.log(`[${this.timestamp.toLocaleString()}] ${this.sender}: ${this.message}`);
  }
}

// User Management System
const users = [];

class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  addFriend(user) {
    console.log(`${this.username} has added ${user.username} as a friend.`);
  }

  sendMessage(receiver, message) {
    const newMessage = new Message(this.username, receiver.username, message);
    newMessage.showMessage();
  }

  static displayUserCount() {
    console.log(`Total Users: ${users.length}`);
  }
}

// Bank Operations
const account1 = new Account("123456789", "John Doe", 5000);
account1.deposit(2500);
account1.withdraw(1000);

const account2 = new Account("987654321", "Jane Smith", 10000);
account2.withdraw(3000);

account1.displayAccountInfo();
account2.displayAccountInfo();

// Messaging Operations
const user1 = new User(1, "user1", "user1@example.com");
const user2 = new User(2, "user2", "user2@example.com");
user1.addFriend(user2);
user1.sendMessage(user2, "Hello, how are you?");

// User Management Operations
users.push(user1, user2);
User.displayUserCount(); // Output: Total Users: 2

// ... Add more functionality and logic below ...

// End of code