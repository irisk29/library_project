# My Library App

## Project Explanation
This is a library wep application, designed in client-server architecture. 
The client is written in ReactJS and the server is written in Pyhton using the FastAPI library.
You can create/edit/delete users, edit and loan books.
## Project Architecture
![architecture_diagram](https://user-images.githubusercontent.com/48298162/223150055-eefc2e2d-ebcf-4e6f-9416-c6bc2e5a70ff.png)
## How to run the project
1. Download the project to your local computer.
2. Go inside LibraryServer folder and run the command ```uvicorn main:app --reload```. This command will run the server on localhost:8000. 
[NOTE: you will need an enviroment file which contains the API endpoint]
3. Go inside the library_project folder and run ```npm start```. This command will activate the client which will run on localhost:3000.
