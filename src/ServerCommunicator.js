import axios from 'axios';

class ServerCommunicator{

  //server_url = 'localhost:8000';

  constructor() {
    if (ServerCommunicator._instance) {
      return ServerCommunicator._instance
    }
    ServerCommunicator._instance = this;
  }
  
  async get(...params) {
    var url = `http://localhost:8000/`;
    url += params.join("/");
    const res = await axios.get(url);
    var res_json = JSON.parse(res.data);
    console.log(`inside post func for url - ${url} the body is: ${res.data}`);
    if(res.status !== 200){
        throw Error(res.data["body"]["message"]);
    }
    return JSON.parse(res_json["body"]);
  }

  async post(...params) {
    var url = `http://localhost:8000/`;
    url += params.join("/");
    const res = await axios.post(url);
    console.log(`inside post func for url - ${url} the body is: ${res.data}`);
    if(res.status !== 200){
        throw Error(res.data["body"]["message"]);
    }
    return "ok";
  }

  async delete(...params) {
    var url = `http://localhost:8000/`;
    url += params.join("/");
    const res = await axios.delete(url);
    console.log(`inside delete func for url - ${url} the body is: ${res.data}`);
    if(res.status !== 200){
        throw Error(res.data["body"]["message"]);
    }
    return "ok";
  }

  async getAllBooks() {
      return await this.get("get_all_books");
  }

  async getAllUsers() {
    return await this.get("get_all_users");
  }

  async getUserBooks(userID) {
    return await this.get("get_user_books", userID);
  }

  async getUserLoanedBooksID(userID) {
    return await this.get("get_user_loaned_books", userID);
  }

  async getBooksUserCanLoan(userID) {
    return await this.get("get_books_user_can_loan", userID);
  }

  async getUsersWhoLoansTheBook(bookID) {
    return await this.get("get_book_loaners", bookID);
  }

  async createNewUser(userName, personalID) {
    return await this.post("create_user", userName, personalID);
  }

  async editUser(userID, userName, personalID) {
    return await this.post("edit_user", userID, userName, personalID);
  }

  async editBook(bookID, bookName, author, numOfCopies) {
    return await this.post("edit_book", bookID, bookName, author, numOfCopies);
  }

  async loanBook(bookID, userID) {
    return await this.post("loan_book", bookID, userID);
  }

  async endLoan(bookID, userID) {
    return await this.post("end_loan", bookID, userID);
  }

  async deleteUser(userID) {
    return await this.delete("delete_user", userID);
  }
  
}

export default ServerCommunicator;