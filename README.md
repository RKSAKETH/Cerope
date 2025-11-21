Great — since your **project structure has two separate folders (`frontend/` and `backend/`)**, I will give you a **perfect README.md** that matches *exactly your folder layout* (based on the screenshots you uploaded).

This README is **clean, evaluator-friendly, and explains everything clearly**.

---

# ✅ **README.md for Cerope (Full MERN Project)**

You can copy-paste this directly into your `README.md`.

---

# 🧵 **CEROPE – Fashion-Tech MERN Application**

A full-stack **MERN** web application built for the Cerope internship task.
It includes **user authentication, profile setup, avatar selection, and a detailed profile page**, with clean UI using React + Tailwind.

---

# 📁 **Project Structure**

```
CEROPE/
│
├── backend/
│   ├── models/
│   │   └── UserModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── profileRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    └── frontendReact/
        ├── src/
        │   ├── context/
        │   │   └── UserContext.jsx
        │   ├── WebPages/
        │   │   ├── SignIn/
        │   │   │   └── SignInApp.jsx
        │   │   ├── SignUp/
        │   │   │   └── SignUpApp.jsx
        │   │   ├── AccountSetup/
        │   │   │   ├── AccountApp.jsx
        │   │   │   └── AccountPage.jsx
        │   │   └── ProfilePage/
        │   │       ├── NavbarProfile.jsx
        │   │       ├── Profilepage.jsx
        │   │       └── ProfilePageApp.jsx
        │   ├── ProtectedRoute.jsx
        │   ├── App.jsx
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── main.jsx
        │   └── index.css
        │
        ├── package.json
        └── vite.config.js
```

---

# 🚀 **Features**

### 🔐 Authentication

* User registration
* Secure login
* Password hashing using **bcrypt**
* JWT-based protected routes
* Token stored in localStorage

### 👤 Profile Setup

* First & Last Name
* Profile Picture (avatar selector)
* DOB, country, city
* Phone number
* Style preference

### 📄 Profile Page

* Fetch user profile using JWT
* Display all personal details
* Render avatar dynamically
* Responsive layout (mobile & desktop)

---

# 🛠️ **Tech Stack**

### **Frontend**

* React + Vite
* Tailwind CSS
* Lucide React Icons
* React Router DOM
* Context API

### **Backend**

* Node.js
* Express.js (ESM modules)
* MongoDB + Mongoose
* JSON Web Tokens
* bcrypt
* CORS

---

# ⚙️ **Installation & Running the Project**

## **1️⃣ Clone the repository**

```
git clone <your-repo-url>
cd CEROPE
```

---

## **2️⃣ Backend Setup**

```
cd backend
npm install
```

### Create `.env` file:

```
MONGO_URL=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Run backend:

```
nodemon server.js
```

Server runs at: **[http://localhost:3000](http://localhost:3000)**

---

## **3️⃣ Frontend Setup**

```
cd frontend/frontendReact
npm install
npm run dev
```

Frontend runs at: **[http://localhost:5173](http://localhost:5173)**

---

# 📡 **API Endpoints**

### **Auth Routes**

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/auth/register` | Register a new user      |
| POST   | `/auth/login`    | Login & return JWT token |

### **Profile Routes**

| Method | Endpoint   | Description                     |
| ------ | ---------- | ------------------------------- |
| GET    | `/profile` | Get user profile (JWT required) |
| POST   | `/profile` | Save/update profile details     |

---

# 🔑 **ProtectedRoute Logic**

Frontend route protection checks **both token AND user id**.

---

# 🧪 **Testing**

You can test APIs using:

* Thunder Client
* Postman
* Browser console for token validation

---

# 🙋‍♂️ **Developer**

**Regella Krishna Saketh**
B.Tech CSE – Amrita Vishwa Vidyapeetham
MERN Developer | Embedded Systems | AI/ML Learner

---

If you want, I can also create:

✅ A **PDF resume-style README**
✅ A **shorter README for internship submissions**
✅ A **screenshots + GIFs version**

Just tell me!
