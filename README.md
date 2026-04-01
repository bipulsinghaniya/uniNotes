# UniNotes

UniNotes is a full-stack Notes Portal that allows students to access and manage academic notes based on department and year.
The platform provides secure authentication and an organized dashboard for browsing study materials.

## 🚀 Live Demo

Frontend: https://uninotes-frontend.onrender.com

## 📌 Features

* Secure user authentication (JWT based)
* Login and logout functionality with Redis-based token invalidation
* Dashboard with personalized welcome message
* Department based notes organization
* Year-wise notes categorization
* Responsive user interface
* Token-based session management using Redis

## 🖥️ Project Preview

After login, users land on a dashboard where they can access notes by selecting their department and academic year.

Example structure:

* Computer Science & Engineering

  * 1st Year
  * 2nd Year
  * 3rd Year
  * 4th Year

* Agriculture

  * 1st Year
  * 2nd Year
  * 3rd Year
  * 4th Year

## 🛠️ Tech Stack

### Frontend

* React.js
* Context API
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Redis (Token/session management)

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

## 📂 Project Structure

```
UniNotes
│
├── notes-frontend
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── auth
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── App.jsx
│
├── notes-backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   │
│   ├── app.js
│   └── server.js
```

## ⚙️ Installation

### Clone the repository

```
git clone https://github.com/bipulsinghaniya/uniNotes.git
```

### Install dependencies

Frontend

```
cd notes-frontend
npm install
npm run dev
```

Backend

```
cd notes-backend
npm install
npm start
```

## 🔐 Environment Variables

Create a `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
REDIS_URL=your_redis_connection
```

## 👨‍💻 Author

**Bipul Singhaniya**

* GitHub: https://github.com/bipulsinghaniya
* Portfolio: https://bipul-portfolio-tzyl.vercel.app

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.
