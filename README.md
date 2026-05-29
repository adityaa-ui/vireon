# Verion – Role-Based Identity Verification Platform

## Overview

Verion is a full-stack role-based authentication and user management platform built using Angular, Node.js, Express, MongoDB Atlas, and Tailwind CSS.

The application provides secure user registration, authentication, role-based access control, user management, and cloud deployment. It demonstrates modern frontend architecture, REST API integration, database connectivity, and deployment practices.

---

## Live Demo

Frontend: https://vireonn.vercel.app

Backend API: https://vireon-ha8n.onrender.com

---
## Test Credentials

### Admin Account

Username: admin

Password: VireonAdmin@2026

Role: Admin

---

### General User Account

Username: user

Password: UserSecure@2026

Role: General User

---
### Dynamic User Registration

The platform allows new users to create accounts through the registration page.

When a user registers:

* Account details are stored in MongoDB Atlas.
* Newly registered users can immediately log in to the platform.
* Registered users automatically appear in the Admin Dashboard.
* User records are fetched dynamically from the database through REST APIs.
* No code changes are required to add new users.

This demonstrates real-time database integration and dynamic user management functionality.

---

## Features

### Authentication

* User Registration
* User Login
* Admin Login
* Role-Based Authentication
* Logout Functionality
* Password Visibility Toggle

### User Dashboard

* Personalized Dashboard
* User Information Display
* Verification Status Cards
* Activity Section

### Admin Dashboard

* View Registered Users
* User Management Interface
* Access Control Based on Roles
* Dynamic User Listing from Database

### Backend Features

* REST APIs using Express.js
* MongoDB Atlas Integration
* Async API Processing
* Modular Route Architecture
* Environment Variable Configuration

### UI/UX

* Modern SaaS-inspired Design
* Glassmorphism Effects
* Responsive Layout
* Tailwind CSS Styling
* Interactive Navigation

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

frontend/

* Angular Application
* Components
* Services
* Routing

backend/

* Express Server
* Routes
* Models
* MongoDB Configuration

---

## Installation

### Clone Repository

git clone https://github.com/adityaa-ui/vireon.git

### Frontend

cd wonderland-app

npm install

ng serve

### Backend

cd backend

npm install

node server.js

---

## Author

Aditya

GitHub: https://github.com/adityaa-ui
LinkedIn: https://www.linkedin.com/in/adityasinghdex

