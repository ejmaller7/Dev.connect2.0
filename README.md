# Dev.Connect2.0

**DevConnector** is a full-stack social networking application for developers to connect, collaborate, and showcase their work. Users can create a profile, share their skills, display their GitHub repositories, and interact with other developers through the platform.

> 🚧 **Note:** This project is still under active development. A link to the deployed site will be added once deployment is complete.

---

## 🔗 Live Site

Coming soon...

---

## ✨ Features

- User registration and login with JWT authentication
- Create and edit developer profiles with bio, skills, location, and social links
- Integrate GitHub to display public repositories directly on user profiles
- Browse and view other developers' profiles
- Flash alerts for user feedback (e.g., registration errors, success messages)
- Protected dashboard and profile editing features for authenticated users

---

## ⚙️ Tech Stack

- **Frontend:** React, Redux, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** Redux with Redux Thunk middleware

---


---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/dev.connect2.0.git
cd dev.connect2.0
```

2. Clone the repository:
# For both client and server
```bash
npm install
cd client && npm install
```

3. Create a .env file in the root and add
```bash
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the app
# From root directory
```bash
npm run dev
```

