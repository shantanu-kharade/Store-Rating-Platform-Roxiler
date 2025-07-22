# Store-Rating-Platform-Roxiler
Store Rating Platform
Overview
This is a web application built with the MERN (MongoDB, Express.js, React, Node.js) stack, designed to enable users to submit and view ratings for various registered stores. The platform supports multiple user roles, providing tailored functionalities based on their permissions. Ratings are submitted on a scale of 1 to 5.

Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: Relational Database (e.g., PostgreSQL, MySQL, SQLite)

Styling: (Add your preferred CSS framework/library here, e.g., CSS Modules, Styled Components, Tailwind CSS, Bootstrap)

Features
User Roles
The application supports three distinct user roles, each with specific functionalities:

System Admin: Manages users and stores, and views system-wide statistics.

Normal User: Registers, logs in, rates stores, and views store listings.

Store Owner: Logs in, manages their store's ratings, and views insights related to their store.

Functionalities
Authentication & Authorization
Single Login: All user types log in through a single interface.

Role-Based Access: Functionalities are displayed based on the user's role after login.

User Signup: Normal Users can register on the platform.

Password Change: All logged-in users can change their password.

System Admin
User Management:

Add new users (Normal Users, Store Owners, Admin Users) with fields: Name, Email, Password, Address.

View a listing of all users (Name, Email, Address, Role).

Apply filters on user listings: Name, Email, Address, Role.

View Store Owner's average rating on user details page.

Store Management:

Add new stores with fields: Name, Email, Address, associated Store Owner.

View a listing of all stores (Name, Email, Address, Rating).

Apply filters on store listings: Name, Email, Address.

Admin Dashboard: Displays key metrics:

Total Users

Total Stores

Total Users who submitted ratings

Logout: Option to log out of the system.

Normal User
Login & Signup: Access the platform by logging in or registering.

Password Change: Ability to change password after login.

Store Listing:

View a list of all registered stores (Name, Address, Overall Ratings, My Submitted Rating).

Search stores by name and address.

Option to submit or modify their rating for individual stores (1 to 5).

Logout: Option to log out of the system.

Store Owner
Login: Access the platform by logging in.

Password Change: Ability to change password after login.

Dashboard:

View a list of users who have submitted ratings to their store.

Display the average total submitted ratings for their store.

Logout: Option to log out of the system.

Validations
All forms (signup, user/store addition, password change, rating submission) include the following validations:

Name: 20-60 characters.

Address: Maximum 400 characters.

Password: 8-16 characters, must include at least 1 uppercase letter and 1 special character.

Email: Valid email address format.

Rating: Must be between 1 and 5.

General Considerations & Best Practices
Table Sorting: All data listings support ascending/descending sorting on important fields (e.g., Name, Email).

Frontend Best Practices: Component reusability, state management, client-side validation, error handling, loading states, secure API calls.

Backend Best Practices: RESTful API design, server-side validation, robust error handling, JWT for authentication, bcrypt for password hashing, role-based authorization, secure environment variable management.

Database Schema Design: Normalized tables, primary and foreign keys for relationships, indexing for performance, appropriate data types, and constraints for data integrity.

Getting Started
Prerequisites
Node.js (LTS version recommended)

npm or Yarn

A relational database server (e.g., PostgreSQL, MySQL)

Installation
Clone the repository:

Bash

git clone <repository_url>
cd store-rating-platform
Backend Setup:

Bash

cd server
npm install # or yarn
Create a .env file in the server directory and add your environment variables:

PORT=5000
DATABASE_URL="your_database_connection_string" # e.g., postgresql://user:password@host:port/database
JWT_SECRET="your_jwt_secret_key"
Run database migrations (if using an ORM like Sequelize/TypeORM) and seed initial data if necessary.

Bash

# Example for Sequelize
npx sequelize db:migrate
Start the backend server:

Bash

npm start # or yarn start
Frontend Setup:

Bash

cd client
npm install # or yarn
Create a .env file in the client directory:

REACT_APP_API_URL=http://localhost:5000/api
Start the frontend development server:

Bash

npm start # or yarn start
Usage
Navigate to http://localhost:3000 (or your configured frontend port) in your browser.

Normal Users: Use the "Sign Up" option to create an account, then log in to view and rate stores.

Admin/Store Owners: If you have seeded admin/store owner accounts, log in with their credentials to access specific dashboards. Otherwise, an Admin user can be added via the database or a setup script, then used to create other user types.

Project Structure
.
├── server/                 # Backend (Node.js/Express)
│   ├── config/             # Database connection, environment variables
│   ├── models/             # Database schemas/ORM models (User, Store, Rating)
│   ├── controllers/        # Business logic for API endpoints
│   ├── routes/             # API route definitions
│   ├── middleware/         # Authentication, authorization, validation middleware
│   ├── utils/              # Utility functions (e.g., password hashing)
│   └── server.js           # Main Express application entry point
├── client/                 # Frontend (React.js)
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components (buttons, forms, tables)
│   │   ├── pages/          # Page-specific components (Login, Signup, Dashboards)
│   │   │   ├── Auth/
│   │   │   ├── Admin/
│   │   │   ├── User/
│   │   │   └── StoreOwner/
│   │   ├── context/        # React Context for global state (e.g., AuthContext)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Frontend utility functions (API calls, validators)
│   │   ├── styles/         # CSS/styling files
│   │   ├── App.js          # Main application component & routing
│   │   └── index.js        # React app entry point
│   └── package.json
└── README.md               # This file
