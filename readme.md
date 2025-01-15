# Portfolio Website with User Authentication & Email Integration

This project is a **Portfolio Website** that includes a **Node.js backend** for user authentication and email functionality, along with a **React frontend** to interact with the API. The backend allows users to sign up, log in, refresh tokens, and delete accounts. Additionally, it includes an email feature for users to send inquiries to the portfolio owner.

## Features

### Backend (Node.js)

- **User Authentication**
  - User signup with email and password.
  - User login with email and password.
  - JWT authentication for protected routes.
  - Token refresh for session management.
  - Account deletion with user data removal.
- **Email Integration**
  - Send email inquiries via Gmail SMTP.
  - Includes a contact form for users to submit messages.

### Frontend (React)

- **Signup / Login** pages for user authentication.
- **Contact Form** for users to send emails through the portfolio website.
- **User Dashboard** (optional) to manage profile or display custom content after login.

## Setup

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running locally or using a cloud MongoDB service like MongoDB Atlas.
- React and related tools installed for the frontend.
- A Gmail account for email functionality (required in backend configuration).

### Backend Setup

1. Clone the backend repository:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory of the project and add the following values:

   ```env
   PORT=8000
   MONGO_URL=mongodb://127.0.0.1/my_database
   JWT_SECRET=my_secret_key
   JWT_EXPIRATION_TIME=12h
   EMAIL_USER=your_gmail_email@example.com
   EMAIL_PASS=your_gmail_password
   ```

   - **PORT**: The port on which the backend will run (default is 8000).
   - **MONGO_URL**: The connection string for your MongoDB database.
   - **JWT_SECRET**: The secret key for signing JWT tokens.
   - **JWT_EXPIRATION_TIME**: The expiration time for the JWT token.
   - **EMAIL_USER**: Your Gmail email (used for email sending functionality).
   - **EMAIL_PASS**: Your Gmail password (used for email sending functionality).

4. Start the server:

   ```bash
   npm start
   ```

   The backend will run on port `8000` by default.

### Frontend Setup

1. Clone the frontend repository (React app):

   ```bash
   git clone <frontend_repository_url>
   cd <frontend_folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the frontend project and add the following:

   ```env
   REACT_APP_API_URL=http://localhost:8000/
   ```

   This points the frontend to the backend API URL.

4. Start the React development server:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`.

## API Endpoints

### Authentication Endpoints

#### 1. **Signup User**

- **URL**: `/auth/signup`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### 2. **Login User**

- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### 3. **Delete User Account**

- **URL**: `/auth/delete-account`
- **Method**: `DELETE`
- **Body**:
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

#### 4. **Refresh Token**

- **URL**: `/auth/refresh`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

### Email Endpoints

#### 1. **Send Email**

- **URL**: `/email`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "from": "john@example.com",
    "subject": "Inquiry about Portfolio",
    "message": "Hello, I would like to know more about your services."
  }
  ```

## Running the Application

### Backend:

1. Follow the **Backend Setup** section to get the backend running.
2. Test the API using Postman or your preferred API testing tool.

### Frontend:

1. Follow the **Frontend Setup** section to get the React application running.
2. Access the React app at `http://localhost:3000` in your browser.
3. Use the frontend to interact with the backend API, such as signing up, logging in, sending emails, and more.

## Notes

- Make sure to replace `your_gmail_email@example.com` and `your_gmail_password` in the `.env` file with your actual Gmail credentials.
- For production deployment, consider using a service like **OAuth 2.0** for email sending rather than using a password directly.
- The frontend includes a contact form for sending emails to the portfolio owner, which utilizes the `/email` endpoint.

---

Enjoy using your **Portfolio Website** with integrated user authentication and email functionality!
