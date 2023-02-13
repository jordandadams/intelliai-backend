# **Node.js Express API for User Authentication and Authorization**

This is a Node.js Express API for user authentication and authorization with MongoDB as the database. The API provides endpoints for user registration, user login, and protected routes for authorized users.

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

- **[Node.js](https://nodejs.org/en/download/)**
- **[MongoDB](https://www.mongodb.com/download-center/community)**
- **[Yarn](https://classic.yarnpkg.com/en/docs/install)** (Optional, you can use npm instead)

### **Installing**

Clone the repository to your local machine:

```
git clone https://github.com/<your-username>/intelli-ai-backend.git
```

Change into the directory:

```
cd intelli-ai-backend
```

Install the dependencies:

```
npm i
```

Create a **`.env`** file in the root directory and set the environment variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/intelli-ai
JWT_SECRET=secret_key
```

Start the server:

```
npm start
```

The API should now be running on **`http://localhost:3000`**.

## **Endpoints**

- **`POST /register`**: Register a new user.
- **`POST /login`**: Login an existing user.
- **`GET /protected`**: Protected route for authorized users.

## **Built With**

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[JWT](https://jwt.io/)**
- **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)**
- **[Dotenv](https://github.com/motdotla/dotenv)**