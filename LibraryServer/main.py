from fastapi import FastAPI
from dotenv import load_dotenv
import os
import boto3
import json
import requests

load_dotenv()
# Create a new API Gateway client
client = boto3.client('apigateway')
app = FastAPI()

api_gateway_endpoint = os.environ["API_ENDPOINT"]
headers = {"Content-type": "application/json"}


@app.get("/get_all_books")
async def getAllBooks():
    resource_name = "get_all_books"
    url = f"{api_gateway_endpoint}/{resource_name}"
    print(url)
    req = requests.request("GET", url, headers=headers)
    return req.text
