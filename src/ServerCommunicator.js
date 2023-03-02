import axios from 'axios';

class ServerCommunicator{

    //server_url = 'localhost:8000';

    constructor() {
      if (ServerCommunicator._instance) {
        return ServerCommunicator._instance
      }
      ServerCommunicator._instance = this;
    }
    
    async get(resource) {
      const res = await axios.get(`http://localhost:8000/${resource}`);
        var res_json = JSON.parse(res.data);
        console.log(`inside get func for resource - ${resource} the body is: ${res_json["body"]}`);
        if(res.status !== 200){
            throw Error(res.data["body"]["message"]);
        }
        return JSON.parse(res_json["body"]);
    }

    async post(...params) {
      var url = `http://localhost:8000/`;
      url += params.join("/");
      const res = await axios.post(url);
      var res_json = JSON.parse(res.data);
      console.log(`inside post func for url - ${url} the body is: ${res_json["body"]}`);
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

    async createNewUser(userName, personalID) {
      return await this.post("create_user", userName, personalID);
    }

    async editUser(userID, userName, personalID) {
      return await this.post("edit_user", userID, userName, personalID);
    }
}

export default ServerCommunicator;