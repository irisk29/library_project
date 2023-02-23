import axios from 'axios';

class ServerCommunicator{

    //server_url = 'localhost:8000';

    constructor() {
      if (ServerCommunicator._instance) {
        return ServerCommunicator._instance
      }
      ServerCommunicator._instance = this;
    }
    
    async getAllBooks() {
        const res = await axios.get('http://localhost:8000/get_all_books');
        console.log(res);
        var res_json = JSON.parse(res.data);
        console.log(res_json["body"]);
        if(res.status !== 200){
            throw Error(res.data["body"]["message"]);
        }
        return JSON.parse(res_json["body"]);
    }
}

export default ServerCommunicator;