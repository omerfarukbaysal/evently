# Evently

Evently is an application where you can create and view events.

## Table of Contents

- [Installation](#installation)
  - [Backend](#1-backend)
    - [Requirements](#requirements)
    - [API endpoints](#api-endpoints)
    - [Get list of events](#get-list-of-events)
    - [Create a new event](#create-a-new-event)
    - [Get a specific event](#get-a-specific-event)
  - [Frontend](#2-frontend)
    - [Requirements](#frontend-requirements)

# Installation

Separate installations should be made for backend and frontend.

First, clone the project.

```bash
cd ~
git clone https://github.com/omerfarukbaysal/evently.git
```

## 1. Backend

### Requirements

- Make sure you have Node.js version 16.0 or higher
- AWS account or running AWS DynamoDB locally. For guide how to run DynamoDB on local environment, check out [this page](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html).

```bash
cd backend
npm install
```

- Define environment variables. Simply define these variables as in the example file at "backend/.env.example":

```bash
REGION= Your AWS DynamoDB region
ACCESS_KEY_ID= Your AWS access key id
SECRET_ACCESS_KEY= Your AWS secret access key
DB_ENDPOINT= Database endpoint
CORS_ORIGIN= Frontend URL (e.g. http://localhost:3001)
```

Create database table:

```bash
npm run create-db
```

**(Optional)** Provide a table with initial data.
⚠️ **Warning:** Do not run this command a second time. The database will be filled with data with the same id's.

```bash
npm run load-data
```

Then run the server.

```bash
npm run start
```

Open http://localhost:3000 to view it in the browser.

### API endpoints

The REST API to the example app is described below.

#### Get list of events

##### Request

`GET /events/`

    curl -i -H 'Accept: application/json' http://localhost:3000/events

##### Response

    HTTP/1.1 200 OK
    Date: Wed, 22 Mar 2024 12:33:26 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 171

    ["id":"72d0343e-0fe3-4783-a363-ac910119087c",
    "title": "Foo",
    "description": "Foo",
    "startDate": "2024-01-01T00:00:00.000Z",
    "place": "Foo",
    "picture": "Foo"]

#### Create a new event

##### Request

`POST /events/`

    curl -i -H 'Accept: application/json' -d 'title=Foo&description=Foo&startDate=2024-01-01T00:00:00.000Z&place=Foo&picture=Foo' http://localhost:3000/events

##### Response

    HTTP/1.1 201 Created
    Date: Wed, 22 Mar 2024 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /events/1
    Content-Length: 171

    {"id":"72d0343e-0fe3-4783-a363-ac910119087c",
    "title": "Foo",
    "description": "Foo",
    "startDate": "2024-01-01T00:00:00.000Z",
    "place": "Foo",
    "picture": "Foo"}

#### Get a specific event

##### Request

`GET /events/id`

    curl -i -H 'Accept: application/json' http://localhost:3000/events/72d0343e-0fe3-4783-a363-ac910119087c

##### Response

    HTTP/1.1 200 OK
    Date: Wed, 22 Mar 2024 12:33:26 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 171

    {"id":"72d0343e-0fe3-4783-a363-ac910119087c",
    "title": "Foo",
    "description": "Foo",
    "startDate": "2024-01-01T00:00:00.000Z",
    "place": "Foo",
    "picture": "Foo"}

## 2. Frontend

### Requirements

<a id="frontend-requirements"></a>

- Make sure you have Node.js version 16.0 or higher

```bash
cd frontend
npm install
```

Define environment variables. Simply define these variables as in the example file at "frontend/.env.example".

```bash
NUXT_BACKEND_URL= Backend URL (e.g. http://localhost:3000)
```

Run the server in development mode.

```bash
npm run dev
```

Open http://localhost:3001 to view it in the browser.
