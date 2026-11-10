# Happy Thoughts API

A REST API built with Express and MongoDB that allows users to create and like happy thoughts.

## Features

- Fetch the latest 20 thoughts, sorted newest first
- Create new thoughts
- Like existing thoughts
- Validate thought messages (5–140 characters)
- Store thoughts in MongoDB

## Built With

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JavaScript
- dotenv
- cors

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/thoughts` | Fetch the latest 20 thoughts |
| POST | `/thoughts` | Create a new thought |
| POST | `/thoughts/:thoughtId/like` | Like a thought |

## Live API

[Happy Thoughts API](https://happy-thoughts-api-2z3e.onrender.com)
