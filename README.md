# Leaf Lab

Leaf Lab is an online portal for browsing and booking plants. This project is built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Mockups](#mockups)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (v4 or higher)

## Installation

### Backend

1. Clone the repository:

    ```sh
    git clone https://github.com/JoshuaDeKlerk/231207_JoshuaDeKlerk_DV200_Plant-Shop.git
    cd mern-backend
    ```

2. Install backend dependencies:

    ```sh
    npm install
    ```

### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd leaf-lab
    ```

2. Install frontend dependencies:

    ```sh
    npm install
    ```

## Setup

### Backend

1. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

2. Ensure your MongoDB server is running. You can start MongoDB with the following command:

    ```sh
    mongod
    ```

### Frontend

1. Create a `.env` file in the `frontend` directory and add the following environment variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

## Running the Project

### Backend

1. Start the backend server:

    ```sh
    cd backend
    npm start
    ```

    The backend server will run on `http://localhost:5000`.

### Frontend

1. Start the frontend development server:

    ```sh
    cd frontend
    npm start
    ```

    The frontend server will run on `http://localhost:3000`.

## Features

- User authentication (sign up, sign in, log out, delete account)
- Browse plants
- Add, edit, and delete plants
- Purchase plants

## Demo Video
[DemoVideo](https://drive.google.com/file/d/1DOoE6rlhsyRqE2XmRghbdl448w3AlvML/view?usp=sharing)

## Mockups

![Home Page](./leaf-lab/src/Assets/MockUps/Home.png)

![Loading](./leaf-lab/src/Assets/MockUps/Loading,%20Browse,%20Edit.png)

![My Plants](./leaf-lab/src/Assets/MockUps/My%20Plants,%20Sign%20In,%20Sign%20Up,%20Product%20Details.png)

![Dark Loading](./leaf-lab/src/Assets/MockUps/Dark%20Loading,%20Sign%20In,%20Sign%20Up.png)

![Dark Home](./leaf-lab/src/Assets/MockUps/Darl,%20Product%20Details,%20Home,%20My%20Plants.png)

![Edit Plant](./leaf-lab/src/Assets/MockUps/Dark%20Edit%20Plant.png)



---

## Additional Notes

- Ensure to replace placeholder values such as `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual values.
- The `JWT_SECRET` should be a strong, random string to ensure the security of your JWT tokens.
- The MongoDB connection string should be a valid URI for connecting to your MongoDB instance.

Feel free to customize this template further to fit the specifics of your project.
