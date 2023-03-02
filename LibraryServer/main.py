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
    print(url)
    req = requests.request("GET", url, headers=headers)
    return req.text


@app.post("/create_user/{userName}/{personalID}")
async def createNewUser(userName, personalID):
    input_data = {
        "userName": userName,
        "personalID": personalID
    }
    json_data = json.dumps(input_data)
    print(json_data)
    resource_name = "create_new_user"
    url = f"{api_gateway_endpoint}/{resource_name}"
    print(url)
    req = requests.post(url, headers=headers, data=json_data)
    return req.text
