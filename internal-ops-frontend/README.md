# Internal Ops Frontend

A React frontend for an internal operations system, focused on workflow-based request handling and system-level logic. Built to demonstrate secure, structured, and production-minded practices beyond basic CRUD.

## Features

- Clean project structure with reusable components
- Central API client with session handling
- Input validation and rate limiting
- Secure request creation flow
- React Router-based navigation between pages
- Professional UI theme with consistent colors

## Tech Stack

- **Frontend:** React, React Router
- **HTTP Client:** Axios
- **Styling:** Inline JS theme (customizable colors)

## Pages

- **Create Request:** Submit new requests with validation and security checks
- **My Requests:** View existing requests (mocked data for now)

## Setup

```bash
git clone https://github.com/udaycodespace/internal-ops-frontend.git
cd internal-ops-frontend
npm install
npm start
````

Runs the app on `http://localhost:3000`.

## Next Steps

* Integrate with Frappe backend APIs
* Add role-based access and approval workflows
* Persist data and implement full CRUD operations
* Extend UI with additional workflow pages