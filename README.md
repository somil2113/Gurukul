# Gurukul - Full-Stack EdTech Platform

Gurukul is a full-stack online learning platform with user authentication, course browsing, checkout, and learning dashboard features. The project is split into a static frontend (`edtech-website`) and a Node.js/Express backend (`edtech-backend`) connected to MongoDB.

## Project Overview

- User registration and login (JWT authentication)
- Role-based access (`student`, `admin`)
- Course catalog with category filtering and pagination
- Checkout flow with order creation
- Student dashboard for enrolled learning progress
- Admin-ready backend routes for managing courses, users, and orders

## Folder Structure

```text
Gurukul/
|- edtech-backend/          # Express + MongoDB API
|  |- config/
|  |- controllers/
|  |- middleware/
|  |- models/
|  |- routes/
|  |- server.js
|  |- seed.js
|  |- vercel.json
|
|- edtech-website/          # Static frontend (HTML/CSS/JS)
|  |- index.html
|  |- login.html
|  |- checkout.html
|  |- user-dashboard.html
|  |- admin-dashboard.html
|  |- script-api.js
|  |- config.js
|
|- start.sh                 # Local startup helper (macOS/Linux)
|- start.bat                # Local startup helper (Windows)
|- README.md
```

## Tech Stack

- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Backend: Node.js, Express.js
- Database: MongoDB Atlas + Mongoose
- Auth: JWT (`jsonwebtoken`), `bcryptjs`
- Hosting: Vercel (frontend + backend)
- Version Control: Git + GitHub

## Live Deployment

- Frontend: `https://gurukul-lyart.vercel.app`
- Backend API: `https://gurukul-8uzq.vercel.app/api`
- Health Check: `https://gurukul-8uzq.vercel.app/api/health`

## Local Setup

### 1. Clone and install backend dependencies

```bash
git clone https://github.com/somil2113/Gurukul.git
cd Gurukul/edtech-backend
npm install
```

### 2. Configure backend environment

Create `edtech-backend/.env`:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret
NODE_ENV=development
CORS_ORIGIN=http://127.0.0.1:5500,http://localhost:5500,http://localhost:3000
```

### 3. Seed data and run backend

```bash
npm run seed
npm run dev
```

### 4. Run frontend

From repo root:

```bash
python3 -m http.server 5500 --directory edtech-website
```

Open: `http://127.0.0.1:5500/index.html`

### 5. Optional one-command local startup

```bash
cd Gurukul
./start.sh
```

## Deployed Setup Notes (Vercel)

### Backend (Root Directory: `edtech-backend`)
Required environment variables:

- `MONGODB_URI`
- `JWT_SECRET`
- `NODE_ENV=production`
- `CORS_ORIGIN=https://gurukul-lyart.vercel.app`

### Frontend (Root Directory: `edtech-website`)
`config.js` points to local API in localhost and Vercel API in production.

## API Endpoints

Base URL: `https://gurukul-8uzq.vercel.app/api`

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me` (protected)

### Courses

- `GET /courses`
- `GET /courses/:id`
- `POST /courses` (admin)
- `PUT /courses/:id` (admin)
- `DELETE /courses/:id` (admin)

### Orders

- `POST /orders` (protected)
- `GET /orders/user/my-orders` (protected)
- `GET /orders/:id` (protected)
- `GET /orders` (admin)

### Users

- `GET /users/enrolled-courses` (protected)
- `PUT /users/profile` (protected)
- `POST /users/wishlist/add` (protected)
- `POST /users/wishlist/remove` (protected)
- `PUT /users/course-progress` (protected)
- `GET /users` (admin)
- `GET /users/:id` (admin)

## Screenshots

### Home

![Home](project_template_UPES/images/output_home.png)

### Courses

![Courses](project_template_UPES/images/output_courses.png)

### About

![About](project_template_UPES/images/output_about.png)

### Newsletter and Footer

![Newsletter Footer](project_template_UPES/images/output_newsletter_footer.png)

### Checkout

![Checkout](project_template_UPES/images/output_checkout.png)

### User Dashboard

![User Dashboard](project_template_UPES/images/output_user_dashboard.png)
