# Store-Rating-Platform-Roxiler
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