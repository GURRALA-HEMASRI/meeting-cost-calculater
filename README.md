# README.md

````md
# Meeting Cost Calculator

A full-stack Meeting Cost Calculator web application built using React.js, Node.js, Express.js, and MySQL.

This application helps teams calculate the real-time cost of meetings based on participant hourly rates, meeting duration, and agenda quality. It also provides AI-inspired recommendations on whether a meeting is worth conducting.

---
# Innomick Assignment
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/e94c7cceb44a2a1846c9671cfcd5b07cc08fa57c/buld-log.jpeg)

## Output
### Login Page
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/e94c7cceb44a2a1846c9671cfcd5b07cc08fa57c/login.png)

### Calculator Page
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/e94c7cceb44a2a1846c9671cfcd5b07cc08fa57c/calculater.png)
\
### History Page
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/663ba1b79fb6e8e71882078d2f70949ec2750a41/HISTORYY.png)

### Analytics
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/663ba1b79fb6e8e71882078d2f70949ec2750a41/ANALYTICS.png)

### dashboard
![image alt](https://github.com/GURRALA-HEMASRI/meeting-cost-calculater/blob/663ba1b79fb6e8e71882078d2f70949ec2750a41/DASHBOARD.png)


# Features

## Part A
- Add meeting participants
- Assign hourly cost per participant
- Dynamic meeting duration input
- Automatic meeting cost calculation
- Remove participants dynamically

## Part B
- Agenda-based recommendation system
- Smart meeting worthiness analysis
- Cost optimization suggestions
- Productivity insights

## Part C
- Save meetings to MySQL database
- View meeting history
- Delete saved meetings
- Historical meeting analytics
- Total meeting cost tracking

---

# Tech Stack

## Frontend
- React.js
- Vite
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Database
- MongoDB Atlas / MongoDB Local

---

# Actual Project Structure

```bash
MeetingCost-Calculator/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
└── docs/
````

---

# Installation Guide


# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# MongoDB Setup

## Create MongoDB Database

Create a MongoDB Atlas cluster or use local MongoDB.

## Backend .env

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/meeting_calculator
```

---

# Environment Variables


* User Login
* JWT Authentication
* Protected Routes

## Meeting Features

* Add participants dynamically
* Calculate real-time meeting cost
* AI recommendation engine
* Save meetings
* Delete meetings
* Meeting history tracking

## Analytics Features

* Advanced analytics dashboard
* Meeting statistics
* Cost visualization charts
* Historical meeting analysis

## Frontend Architecture

* React + Vite setup
* Component-based structure
* Layout architecture
* Route-based navigation
* Reusable UI components

## Backend Architecture

* MVC architecture
* Middleware authentication
* Separate routes/controllers/services
* MongoDB models using Mongoose
* AI recommendation service

---

# API Endpoints

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

## Meetings

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/meetings     |
| POST   | /api/meetings     |
| DELETE | /api/meetings/:id |

## Analytics

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/analytics |

---

# Core Functionalities

* Real-time meeting cost calculation
* AI-based meeting recommendation system
* Meeting history management
* Analytics dashboard
* Authentication system
* Responsive UI design
* REST API integration

---

# Future Improvements

* Google Calendar Integration
* AI Agenda Scoring
* Email Notifications
* Team-based Meeting Analytics
* Role-based Access Control
* Export Reports to PDF/CSV

---

# Author

Developed by Hema Sri



---

#
