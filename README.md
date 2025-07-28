# Authentication Mini Project

A simple Node.js authentication backend using Express and MongoDB.

## Features

- User registration
- User login
- Basic user existence checks
- Modular route and model structure

## Project Structure

```
Authentication/
├── package.json
├── server.js
└── src/
    ├── app.js
    ├── db/
    │   └── db.js
    ├── models/
    │   └── user.model.js
    └── routes/
        └── auth.routes.js
```

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd Authentication
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and any other secrets:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Start the server**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

## API Endpoints

### Register

- **POST** `/register`
- Body: `{ "username": "yourname", "password": "yourpassword" }`
- Response: User object or error message

### Login

- **POST** `/login`
- Body: `{ "username": "yourname", "password": "yourpassword" }`
- Response: Success message and token (placeholder)

## Notes

- Passwords are currently stored in plain text (for demo only). Use bcrypt for production.
- Add more features like JWT authentication, password hashing, and validation as needed.

## License

MIT
