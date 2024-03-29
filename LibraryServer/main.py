from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import boto3
import json
import requests

load_dotenv()
# Create a new API Gateway client
client = boto3.client('apigateway')
app = FastAPI()

# change the cores to allow access

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_gateway_endpoint = os.environ["API_ENDPOINT"]
headers = {"Content-type": "application/json"}


@app.get("/get_all_books")
async def getAllBooks():
    resource_name = "get_all_books"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers)
    return req.text


@app.get("/get_all_users")
async def getAllUsers():
    resource_name = "get_all_users"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers)
    return req.text


@app.post("/create_user/{userName}/{personalID}")
async def createNewUser(userName, personalID):
    input_data = {
        "userName": userName,
        "personalID": personalID
    }
    json_data = json.dumps(input_data)
    resource_name = "create_new_user"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.post(url, headers=headers, data=json_data)
    return req.text


@app.post("/edit_user/{userID}/{userName}/{personalID}")
async def editUser(userID, userName, personalID):
    input_data = {
        "userID": userID,
        "userName": userName,
        "personalID": personalID
    }
    json_data = json.dumps(input_data)
    resource_name = "edit_user"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.post(url, headers=headers, data=json_data)
    return req.text


@app.post("/edit_book/{bookID}/{bookName}/{author}/{copies}")
async def editBook(bookID, bookName, author, copies):
    input_data = {
        "bookID": bookID,
        "bookName": bookName,
        "author": author,
        "copies": copies
    }
    json_data = json.dumps(input_data)
    resource_name = "edit_book"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.post(url, headers=headers, data=json_data)
    return req.text


@app.get("/get_user_books/{userID}")
async def getUserBooks(userID):
    input_data = {
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "get_user_books"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers, data=json_data)
    return req.text


@app.get("/get_books_user_can_loan/{userID}")
async def getBooksUserCanLoan(userID):
    input_data = {
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "get_books_user_can_loan"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers, data=json_data)
    return req.text


@app.post("/loan_book/{bookID}/{userID}")
async def loanBook(bookID, userID):
    input_data = {
        "bookID": bookID,
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "loan_book"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.post(url, headers=headers, data=json_data)
    return req.text


@app.post("/end_loan/{bookID}/{userID}")
async def endLoan(bookID, userID):
    input_data = {
        "bookID": bookID,
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "end_loan"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.post(url, headers=headers, data=json_data)
    return req.text


@app.get("/get_book_loaners/{bookID}")
async def getUsersWhoLoansTheBooks(bookID):
    input_data = {
        "bookID": bookID,
    }
    json_data = json.dumps(input_data)
    resource_name = "get_loaners"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers, data=json_data)
    return req.text


@app.get("/get_user_loaned_books/{userID}")
async def getUsersWhoLoansTheBooks(userID):
    input_data = {
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "get_user_loaned_books"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers, data=json_data)
    return req.text


@app.get("/get_poss_loaners/{bookID}")
async def getUsersWhoCanLoanTheBooks(bookID):
    input_data = {
        "bookID": bookID,
    }
    json_data = json.dumps(input_data)
    resource_name = "get_users_who_can_loan"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.get(url, headers=headers, data=json_data)
    return req.text


@app.delete("/delete_user/{userID}")
async def deleteUser(userID):
    input_data = {
        "userID": userID,
    }
    json_data = json.dumps(input_data)
    resource_name = "delete_user"
    url = f"{api_gateway_endpoint}/{resource_name}"
    req = requests.delete(url, headers=headers, data=json_data)
    return req.text
