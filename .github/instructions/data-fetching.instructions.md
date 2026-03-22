---
description: Read this file to understand how to fetch data in this project. 
---
# Data Fetching Guidelines
This document outlines the best practices and guidelines for fetching data in our next.js project. Adhering to these guidelines will ensure consistency, performance, and maintainability across the codebase.

## 1. Server components for data fetching

In next.js ALWAYS use server components or data fetching. Never use client components to fetch data. 

## 2. Add data fetching methods

Always use the helper function in the /data directory to fetch data, never fetch data directly in the components.

All helper functions in the /data directory should use Drizzle ORM for database interactions. 