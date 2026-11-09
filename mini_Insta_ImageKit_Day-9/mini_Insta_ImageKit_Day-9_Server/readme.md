# 📸 Mini Insta

**Mini Insta** is a full-stack social media web application inspired by Instagram. It allows users to create posts with captions and images, upload images to cloud storage, and explore posts through a clean, responsive interface.

The project is being developed to strengthen my full-stack development skills while building a practical social media application.

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Hook Form

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

### Cloud Storage
- ImageKit

## ✨ Features

### Implemented
- Create posts with captions and images.
- Upload images using Multer.
- Store images in ImageKit cloud storage.
- Save post details and image URLs in MongoDB.
- Fetch and display all posts.
- Explore posts through a responsive interface.
- Reusable React components.
- Axios-based API integration.

### In Progress
- User authentication.
- User registration and login.
- JWT-based authentication.
- Protected routes.
- User profiles.

### Planned Features
- Like and unlike posts.
- Comment on posts.
- Follow and unfollow users.
- Personalized home feed.
- User profile management.
- Bookmarks.
- Notifications.

## 📂 Project Structure

```text
Mini-Insta/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── config/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── uploads/
│   ├── app.js
│   └── package.json
│
└── README.md
```

*The structure above is illustrative; adjust it to match the actual folders in your repository.*

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd Mini-Insta
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string

IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
IK_URL=your_imagekit_url_endpoint
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/MiniInsta/create` | Create a new post |
| GET | `/MiniInsta/getAll` | Fetch all posts |

*Update these endpoints if your actual route definitions differ.*

## 🔐 Environment Variables

Never commit your `.env` file or expose private API keys.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
dist/
```

## 🛠️ Future Improvements

- Complete authentication and authorization.
- Associate posts with their creators.
- Implement likes, comments, and follow functionality.
- Build a personalized feed.
- Add profile editing and image management.
- Deploy the frontend and backend.

## 👨‍💻 Developer

**Paras Jain**

B.Tech CSE | SAGE University

---

⭐ If you find this project interesting, feel free to explore the repository and follow its development.

**Mini Insta — A social media application built from scratch, one feature at a time.**