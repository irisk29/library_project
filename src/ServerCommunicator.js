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

    async getAllBooks() {
        return await this.get("get_all_books");
    }

    async getAllUsers() {
      return await this.get("get_all_users");
  }

    async createNewUser(userName, personalID) {
      const res = await axios.post(`http://localhost:8000/create_user/${userName}/${personalID}`);
      console.log(res);
      var res_json = JSON.parse(res.data);
      console.log(res_json["body"]);
      if(res.status !== 200){
          throw Error(res.data["body"]["message"]);
      }
      return "ok";
  }
}

export default ServerCommunicator;