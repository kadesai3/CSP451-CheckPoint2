# Database Connection (Mock Repository)

Branch: `feature/database-connection`  
Related Issue: #2

## Overview
This branch adds a database-style structure without requiring a real database server.
It uses a simple in-memory repository to simulate data access patterns.

## Files added
- `src/config/env.js`
  - Centralizes environment variable reading and safe defaults.
- `src/db/usersRepository.js`
  - Provides mock functions for user data operations.

## Repository functions
- `getAllUsers()` returns all users
- `getUserById(id)` returns a user or null
- `createUser(user)` validates and adds a new user
- `resetUsers()` resets to default demo data

## Notes
This pattern can be swapped later with a real database (MongoDB/Postgres/etc.)
by replacing the repository internals without changing the rest of the app.
