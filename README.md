# My Library App

## Project Explanation
This is a library wep application, designed in client-server architecture. 
The client is written in ReactJS and the server is written in Pyhton using the FastAPI library.
You can create/edit/delete users, edit and loan books etc.
## Project Architecture
First, the client initiate an action using the UI, than an HTTP request is sent to server. 
Then, the server sends an HTTP request to the API Gateway endpoint (I allowed the endpoint to receive requests outside its domain by activating the CORS option).
After that, when using a specific API option, I activated the corresponded Lambda function (serverless function) which runs my code and access the RDS.
RDS, which is an AWS service that is built from EC2 that has postgresql installed on it, and manages it on its own, will return an answer to the lambda function, it will return the answer to the server and finally the answer will be prented on the screen for the client.
In order to enable the Lambda function to access the RDS and the Secret Manager I used the IAM Role.
The API_Functions folder contains the lambda functions code written in NodeJS, where all the sensative data is stored in the secret manager.

![Untitled Diagram drawio](https://user-images.githubusercontent.com/48298162/223193921-f24221dd-a435-4896-bae4-c284615b5b81.png)
## How to run the project
1. Download the project to your local computer.
2. Go inside LibraryServer folder and run the command ```uvicorn main:app --reload```. This command will run the server on localhost:8000. 
[NOTE: you will need an enviroment file which contains the API endpoint]
3. Go inside the library_project folder and run ```npm start```. This command will activate the client which will run on localhost:3000.
