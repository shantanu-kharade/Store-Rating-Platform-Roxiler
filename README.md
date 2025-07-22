<h1>Store Rating Platform</h1>

<h2>Overview</h2>
<p>This is a web application built with the MERN (MongoDB, Express.js, React, Node.js) stack, designed to enable users to submit and view ratings for various registered stores. The platform supports multiple user roles, providing tailored functionalities based on their permissions. Ratings are submitted on a scale of 1 to 5.</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> Relational Database (e.g., PostgreSQL, MySQL, SQLite)</li>
  <li><strong>Styling:</strong> (Add your preferred CSS framework/library here, e.g., CSS Modules, Styled Components, Tailwind CSS, Bootstrap)</li>
</ul>

<h2>Features</h2>

<h3>User Roles</h3>
<p>The application supports three distinct user roles, each with specific functionalities:</p>
<ul>
  <li><strong>System Admin:</strong> Manages users and stores, and views system-wide statistics.</li>
  <li><strong>Normal User:</strong> Registers, logs in, rates stores, and views store listings.</li>
  <li><strong>Store Owner:</strong> Logs in, manages their store's ratings, and views insights related to their store.</li>
</ul>

<h3>Functionalities</h3>

<h4>Authentication & Authorization</h4>
<ul>
  <li><strong>Single Login:</strong> All user types log in through a single interface.</li>
  <li><strong>Role-Based Access:</strong> Functionalities are displayed based on the user's role after login.</li>
  <li><strong>User Signup:</strong> Normal Users can register on the platform.</li>
  <li><strong>Password Change:</strong> All logged-in users can change their password.</li>
</ul>

<h4>System Admin</h4>
<ul>
  <li><strong>User Management:</strong>
    <ul>
      <li>Add new users (Normal Users, Store Owners, Admin Users) with fields: Name, Email, Password, Address.</li>
      <li>View a listing of all users (Name, Email, Address, Role).</li>
      <li>Apply filters on user listings: Name, Email, Address, Role.</li>
      <li>View Store Owner's average rating on user details page.</li>
    </ul>
  </li>
  <li><strong>Store Management:</strong>
    <ul>
      <li>Add new stores with fields: Name, Email, Address, associated Store Owner.</li>
      <li>View a listing of all stores (Name, Email, Address, Rating).</li>
      <li>Apply filters on store listings: Name, Email, Address.</li>
    </ul>
  </li>
  <li><strong>Admin Dashboard:</strong>
    <ul>
      <li>Total Users</li>
      <li>Total Stores</li>
      <li>Total Users who submitted ratings</li>
    </ul>
  </li>
  <li><strong>Logout:</strong> Option to log out of the system.</li>
</ul>

<h4>Normal User</h4>
<ul>
  <li><strong>Login & Signup:</strong> Access the platform by logging in or registering.</li>
  <li><strong>Password Change:</strong> Ability to change password after login.</li>
  <li><strong>Store Listing:</strong>
    <ul>
      <li>View a list of all registered stores (Name, Address, Overall Ratings, My Submitted Rating).</li>
      <li>Search stores by name and address.</li>
      <li>Option to submit or modify their rating for individual stores (1 to 5).</li>
    </ul>
  </li>
  <li><strong>Logout:</strong> Option to log out of the system.</li>
</ul>

<h4>Store Owner</h4>
<ul>
  <li><strong>Login:</strong> Access the platform by logging in.</li>
  <li><strong>Password Change:</strong> Ability to change password after login.</li>
  <li><strong>Dashboard:</strong>
    <ul>
      <li>View a list of users who have submitted ratings to their store.</li>
      <li>Display the average total submitted ratings for their store.</li>
    </ul>
  </li>
  <li><strong>Logout:</strong> Option to log out of the system.</li>
</ul>

<h3>Validations</h3>
<p>All forms (signup, user/store addition, password change, rating submission) include the following validations:</p>
<ul>
  <li><strong>Name:</strong> 20-60 characters.</li>
  <li><strong>Address:</strong> Maximum 400 characters.</li>
  <li><strong>Password:</strong> 8-16 characters, must include at least 1 uppercase letter and 1 special character.</li>
  <li><strong>Email:</strong> Valid email address format.</li>
  <li><strong>Rating:</strong> Must be between 1 and 5.</li>
</ul>

<h3>General Considerations & Best Practices</h3>
<ul>
  <li><strong>Table Sorting:</strong> All data listings support ascending/descending sorting on important fields (e.g., Name, Email).</li>
  <li><strong>Frontend Best Practices:</strong> Component reusability, state management, client-side validation, error handling, loading states, secure API calls.</li>
  <li><strong>Backend Best Practices:</strong> RESTful API design, server-side validation, robust error handling, JWT for authentication, bcrypt for password hashing, role-based authorization, secure environment variable management.</li>
  <li><strong>Database Schema Design:</strong> Normalized tables, primary and foreign keys for relationships, indexing for performance, appropriate data types, and constraints for data integrity.</li>
</ul>

<h2>Project Structure</h2>
<pre>
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
</pre>
