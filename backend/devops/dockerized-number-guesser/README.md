# Number Guesser Application

A Dockerized Python (Flask) based Number Guessing web application.

The application allows a user to:

- Set a numeric range
- Submit guesses
- Receive feedback (low, high, correct)
- View guess history
- Reset the game

The application is designed to be executed using Docker.

---

## How to Run (Docker)

Make sure Docker Desktop is running before executing the steps below.

### Step 1 — Build the Docker Image

From the project root directory, run:

```bash
docker build -t number-guesser .
```

Wait until the build process completes successfully.

### Step 2 — Run the Container

Run the following command:

```bash
docker run -p 5000:5000 number-guesser
```

If port 5000 is already in use, run:

```bash
docker run -p 8000:5000 number-guesser
```

### Step 3 — Open in Browser

If using port 5000:

```
http://localhost:5000
```

If using port 8000:

```
http://localhost:8000
```

---

## Project Structure

```
number-guesser/
│
├── app.py
├── requirements.txt
├── Dockerfile
└── static/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Notes

- The application runs entirely inside a Docker container.
- The backend is implemented using Flask.
- The frontend communicates with the backend using REST API calls.