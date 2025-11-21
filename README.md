# CEROPE – Fashion-Tech MERN Application

Cerope is a full-stack **MERN** web application built as part of an internship evaluation.  
It provides:

- User **Sign Up / Sign In**
- **Account Setup** page to store user details
- A **Profile Page** with avatar and personal information
- Clean, responsive UI built with **React + Tailwind CSS**

---

## Project Structure

```bash
CEROPE/
│
├── backend/
│   ├── models/
│   │   └── UserModel.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── authRoutes.js       # register & login
│   │   └── profileRoutes.js    # save & fetch profile
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js               # Express server (ESM)
│
└── frontend/
    └── frontendReact/
        ├── node_modules/
        ├── public/
        ├── src/
        │   ├── context/
        │   │   └── UserContext.jsx
        │   ├── WebPages/
        │   │   ├── AccountSetup/
        │   │   │   ├── AccountApp.jsx
        │   │   │   └── AccountPage.jsx
        │   │   ├── ProfilePage/
        │   │   │   ├── NavbarProfile.jsx
        │   │   │   ├── Profilepage.jsx
        │   │   │   └── ProfilePageApp.jsx
        │   │   ├── SignIn/
        │   │   │   ├── SignInApp.jsx
        │   │   │   └── SignInPage.jsx
        │   │   └── SignUp/
        │   │       ├── SignUpApp.jsx
        │   │       └── SignUpPage.jsx
        │   ├── App.jsx
        │   ├── Footer.jsx
        │   ├── Navbar.jsx
        │   ├── ProtectedRoute.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── vite.config.js
````

---

## Features

### Authentication (Sign In / Sign Up)

* User registration with email & password
* Login with validation and error messages
* Passwords hashed using **bcrypt**
* **JWT** generation on login
* Token stored in `localStorage`
* `ProtectedRoute.jsx` used to restrict access to protected pages

### Account Setup

**AccountSetup** (AccountApp.jsx / AccountPage.jsx) allows user to save:

* First name & last name
* Profile picture / avatar seed
* Date of birth
* Style preference
* Phone number
* Country & city

On submit, data is sent to the backend `/profile` API with the JWT token in the header.

### Profile Page

**ProfilePageApp.jsx / Profilepage.jsx + NavbarProfile.jsx**

* Fetches profile using `GET /profile` with JWT
* Shows avatar + personal information
* Mobile-friendly layout with proper spacing and full-width content
* Edit button prepared for future enhancements

---

## Tech Stack

### Frontend

* **React** (Vite)
* **React Router DOM**
* **Tailwind CSS**
* **Lucide React** icons
* Context API (`UserContext.jsx`)
* Fetch API for HTTP requests

### Backend

* **Node.js** (ESM modules)
* **Express.js**
* **MongoDB** with **Mongoose**
* **JSON Web Token (JWT)** for authentication
* **bcrypt** for password hashing
* **CORS** enabled for local development

---

## Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RKSAKETH/Cerope.git
cd CEROPE
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URL=mongodb+srv://krishnasaketh566_db_user:CeropeCluster@ceropecluster.8ccicwq.mongodb.net/?appName=CeropeCluster
JWT_SECRET=secret_key
JWT_EXPIRES_IN=7d
```

Run the backend server:

```bash
nodemon server.js
# or
node server.js
```

Backend runs at: **[http://localhost:3000](http://localhost:3000)**

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend/frontendReact
npm install
npm run dev
```

Frontend runs at: **[http://localhost:5173](http://localhost:5173)**

---

##  API Overview

### Auth Routes (`backend/routes/authRoutes.js`)

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| POST   | `/auth/register` | Register a new user           |
| POST   | `/auth/login`    | Login, return JWT + user info |

Example login response:

```json
{
  "token": "<jwt_token>",
  "user": {
    "id": "<user_id>",
    "email": "user@example.com"
  }
}
```

---

### Profile Routes (`backend/routes/profileRoutes.js`)

| Method | Endpoint   | Description                                |
| ------ | ---------- | ------------------------------------------ |
| GET    | `/profile` | Get profile of logged-in user (JWT)        |
| POST   | `/profile` | Create / update profile for logged-in user |

Both routes are protected using a `verifyToken` middleware which:

* Reads `Authorization: Bearer <token>` header
* Verifies the JWT using `JWT_SECRET`
* Attaches `req.user.id` to the request

---

## Frontend Route Protection

`ProtectedRoute.jsx` wraps protected pages like Account Setup and Profile Page:

* Checks for a valid JWT (and/or stored user info)
* If not present → redirects to **SignIn**
* If valid → renders the children components

---

## How to Test

1. Start **backend** (`nodemon server.js`).
2. Start **frontend** (`npm run dev` in `frontend/frontendReact`).
3. Go to `http://localhost:5173`:

   * Sign up as a new user.
   * Log in and ensure token is stored.
   * Complete Account Setup.
   * Visit Profile Page and confirm details are shown correctly.

---

## Author

**Regella Krishna Saketh**
B.Tech CSE – Amrita Vishwa Vidyapeetham, Coimbatore
MERN Developer • Embedded Systems • AI/ML Enthusiast

---

> *This project was built as part of the Cerope internship assignment to demonstrate full-stack skills, clean code structure, and a user-friendly UI.*

```
