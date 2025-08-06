
---

## 🚀 Final To-Do Summary

### ✅ 1. **Push Backend to GitHub**

Create a new repo (e.g., `mini-linkedin-backend`), then:

```bash
cd server
git init
git remote add origin https://github.com/<your-username>/mini-linkedin-backend.git
git add .
git commit -m "Initial backend setup"
git push -u origin master
```

Deploy it on **Render**:

* Add `MONGO_URI` and `JWT_SECRET` in Render → Environment Variables
* Start command: `npm run start` or `node server.js`

---

### ✅ 2. **Push Frontend to GitHub**

Create a new repo (e.g., `mini-linkedin-client`):

```bash
cd client
git init
git remote add origin https://github.com/<your-username>/mini-linkedin-client.git
git add .
git commit -m "Initial frontend setup"
git push -u origin master
```

Deploy it on **Vercel**:

* Set base URL in `api.ts` to your Render backend

```ts
baseURL: "https://your-render-api.onrender.com/api"
```

---

## 📄 Final README.md Template

Here’s a clean **`README.md`** template for GitHub:

````markdown
# 🧑‍💼 Mini LinkedIn Community Platform

A mini LinkedIn-like social app with user registration, public feed, and profiles.

---

## 🌐 Live Links

- **Frontend**: [https://mini-linkedin-client.vercel.app](#)
- **Backend API**: [https://mini-linkedin-api.onrender.com](#)

---

## 🛠️ Tech Stack

| Layer      | Stack                        |
|------------|------------------------------|
| Frontend   | Next.js, Tailwind CSS        |
| Backend    | Node.js, Express.js, JWT     |
| Database   | MongoDB (Mongoose)           |
| Auth       | JWT + bcryptjs               |
| Hosting    | Vercel (frontend), Render (backend) |

---

## 🔑 Demo Credentials

You can use this to test:

- **Email**: demo@demo.com  
- **Password**: 123456

---

## 🚀 Features

- Register/Login with JWT
- Create text-only posts
- View public post feed
- Profile page with posts & bio

---

## ⚙️ Setup Locally

### Backend

```bash
cd server
npm install
touch .env
# Add MONGO_URI & JWT_SECRET
npm run dev
````

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📌 Notes

* Fully responsive with clean UI
* You can add features like post delete, update profile, edit post, etc.

---

> 💡 *Developed for CIAAN Cyber Tech Full Stack Internship Challenge*
> ⏱️ *Completed within 48-hour deadline*

```

---

## ✅ Now You’re Ready to Submit!

Submit this in your final message:

- 🔗 GitHub Repo (client + server)
- 🔗 Live Demo URL (Vercel)
- 📝 Attach `README.md`

**Deadline: 04 August 2025**  
server/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── auth.js
│   ├── post.js
│   └── user.js
├── .env
├── server.js
└── package.json
# Mini LinkedIn Clone

### 🔧 Stack Used:
- Frontend: Next.js + Tailwind CSS
- Backend: Express.js + Node.js
- Database: MongoDB + Mongoose
- Auth: JWT
- Hosting: Vercel (frontend) + Render (backend)

### 🚀 Live Demo:
[https://mini-linkedin-clone.vercel.app](#)

### 📂 GitHub Repo:
[https://github.com/yourname/mini-linkedin](#)

### 🧪 Demo Login:
- Email: demo@demo.com
- Password: 123456

### 🛠️ Setup Instructions:

1. Clone the repo

```bash
git clone https://github.com/yourname/mini-linkedin
This is a Full Stack Development assessment challenge from CIAAN Cyber Tech Pvt Ltd, where you're required to build a mini LinkedIn-like community platform within 48 hours. Here's how to strategically plan and execute it before the 04 August 2025 deadline.

✅ Objective Summary
Build a LinkedIn-style app with the following core features:

🔐 1. User Authentication
Register/Login (Email & Password)

Profile: Name, Email, Bio

📝 2. Public Post Feed
Create & display text-only posts

Feed shows author name + timestamp

👤 3. Profile Page
View a user’s profile + their posts

⚙️ Tech Stack Choices
You are free to choose. Here's a quick, recommended combination for speed + quality:

Category	Suggested Stack (Recommended for 48h)
Frontend	Next.js + Tailwind CSS
Backend	Node.js + Express.js
Database	MongoDB (with Mongoose)
Auth	JWT + Bcrypt (simple and fast)
Hosting	Vercel (frontend) + Render (API)

📁 Project Structure
bash
Copy code
/client (Next.js)
  └─ /pages
  └─ /components
  └─ /utils

/server (Express.js)
  └─ /routes
  └─ /models
  └─ /controllers
  └─ server.js

/README.md
🔑 Feature-wise Breakdown
Frontend (Next.js)
Register/Login pages – Basic form, calls backend

Home page – Show feed of all posts

Profile page – Show selected user's profile + posts

Post creation – Simple form to add text post

Backend (Express.js)
POST /api/auth/register

POST /api/auth/login

GET /api/posts – All posts

POST /api/posts – Create post

GET /api/users/:id – Profile info + posts

Database (MongoDB)
User Schema: name, email, bio, password

Post Schema: authorId, content, timestamp

🧪 Test Your Endpoints
Use Postman or Thunder Client in VS Code:

POST /api/auth/register – Create user

POST /api/auth/login – Get JWT

POST /api/posts – Create post (with token)

GET /api/posts – Get all posts

GET /api/users/:id – Get user profile + their posts