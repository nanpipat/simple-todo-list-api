## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installing

1. Clone this repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

## API Endpoints

### Health Check

- GET /health: Check if the server is running smoothly.

### To Do List Endpoints

- GET /api/todos: Get all To Do items

  - Example Request: GET http://localhost:3000/api/todos
  - Example Response:
    ```
    [
      {
        "id": 1,
        "title": "Do laundry",
        "completed": false
      },
      {
        "id": 2,
        "title": "Buy groceries",
        "completed": true
      }
    ]
    ```

- GET /api/todos/:id: Get a single To Do item by ID

  - Example Request: GET http://localhost:3000/api/todos/1
  - Example Response:
    ```
    {
      "id": 1,
      "title": "Do laundry",
      "completed": false
    }
    ```

- POST /api/todos: Create a new To Do item

  - Example Request:

    ```
    POST http://localhost:3000/api/todos
    Content-Type: application/json

    {
      "title": "Clean the car",
      "completed": false
    }
    ```

  - Example Response:
    ```
    {
      "id": 3,
      "title": "Clean the car",
      "completed": false
    }
    ```

- PUT /api/todos/:id: Update a To Do item by ID

  - Example Request:

    ```
    PUT http://localhost:3000/api/todos/1
    Content-Type: application/json

    {
      "title": "Do laundry",
      "completed": true
    }
    ```

  - Example Response:
    ```
    {
      "id": 1,
      "title": "Do laundry",
      "completed": true
    }
    ```

- DELETE /api/todos/:id: Delete a To Do item by ID
  - Example Request: DELETE http://localhost:3000/api/todos/2
  - Example Response:
    ```
    {
      "id": 2,
      "title": "Buy groceries",
      "completed": true
    }
    ```

## Development Mode

To run the server in development mode with auto-reloading (using nodemon):

- Run `npm run dev`

## Production Mode

To build and run the server in production mode:

- Run `npm start`

## Docker Support

### Building Docker Image

Build the Docker image:

- Run `docker build -t todo-app .`

### Running with Docker Compose

Use Docker Compose to run the application:

- Run `docker-compose up`

The API will be accessible at http://localhost:3000/api/todos
