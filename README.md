# **Cerope – Fashion Profile & Authentication System**

A MERN-stack mini-application built for internship evaluation.
Users can **Sign Up → Sign In → Set Up Account → View Profile**, all securely handled using **JWT Authentication** and **MongoDB**.

---

## 🚀 **Features**

### **Authentication**

* User Signup (with hashed passwords)
* User Login (JWT generated on successful login)
* Protected routes using token verification
* Token stored in localStorage

### **User Profile System**

* Setup Account (first name, last name, DOB, style preference, phone number, country, city)
* Profile saved to MongoDB
* Fetch profile using user ID
* Profile page UI with avatar
* Auto-navigation after saving profile

### **Frontend UI**

* Built using **React + Vite**
* Fully responsive Tailwind CSS UI
* Clean, aesthetic components
* Lucide icons integrated

---
---

## 🛠️ **Tech Stack**

### **Frontend**

* React
* Vite
* React Router DOM
* Tailwind CSS
* Lucide-React Icons

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Tokens (JWT)
* Bcrypt (password hashing)
* CORS enabled
* Dotenv

> **Note:** Full dependency list is available inside
> `backend/package.json` and `frontend/package.json`.

---

## ⚙️ **Environment Variables**

Create a `.env` file inside the **backend** folder:

```
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ **How to Run the Project**

### **1. Start Backend**

```
cd backend
npm install
nodemon server.js
```

or

```
node server.js
```

Backend runs on:
**[http://localhost:3000](http://localhost:3000)**

---

### **2. Start Frontend**

```
cd frontend
npm install
npm run dev
```

Frontend runs on:
**[http://localhost:5173](http://localhost:5173)**

---

## 🔐 **API Routes**

### **Authentication**

| Method | Route          | Description                    |
| ------ | -------------- | ------------------------------ |
| POST   | `/auth/signup` | Create new user                |
| POST   | `/auth/login`  | Authenticate user + return JWT |

### **Profile**

| Method | Route          | Description                             |
| ------ | -------------- | --------------------------------------- |
| POST   | `/profile`     | Save or update user profile (protected) |
| GET    | `/profile/:id` | Fetch profile using user ID (protected) |

---

## 🔄 **User Flow**

1. **Sign Up** → account created
2. **Sign In** → JWT stored in localStorage
3. Redirect to **Setup Account**
4. User fills details → profile saved in MongoDB
5. Auto-redirect to **Profile Page**
6. User can view all saved details + avatar

---

## ✔️ **What the Evaluator Should Test**

* Account creation
* Login and token generation
* Protected routes working only with JWT
* Profile setup form
* Profile page fetching real DB data
* Clean and responsive UI

---

## 🎉 **Thank You!**

This project was built as part of a full-stack assignment showcasing MERN skills, authentication, UI design, and API integration.

---

If you want, I can also create:
✅ A **demo video script**
✅ A **screenshots section**
✅ A **“Known Issues + Future Enhancements”** section

Just tell me!
