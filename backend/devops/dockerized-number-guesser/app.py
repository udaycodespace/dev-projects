"""
Problem Statement (Understanding of the Requirement):

A Dockerized Python-based Number Guessing web application is to be built
with a simple user interface.

Based on the requirement, the following assumptions were made:

- The guessing range should be defined dynamically by the user.
- The order of range input should not affect functionality.
- A minimum difference of 4 between start and end values is enforced
  to ensure meaningful gameplay.
- A random number is generated within the validated range.
- User guesses are evaluated as low, high, or correct.
- Upon a correct guess, a new number is generated within the same range
  to allow continued gameplay.
"""

from flask import Flask, jsonify, request
import random

app = Flask(__name__, static_folder="static", static_url_path="")

# Default valid range (difference = 4)
min_value = 1
max_value = 5

# Initial random number generation
target_number = random.randint(min_value, max_value)

# Counter to track number of attempts
attempts = 0


@app.route("/")
def serve_index():
    """
    Serves the frontend user interface.
    """
    return app.send_static_file("index.html")


@app.route("/api/set-range", methods=["POST"])
def set_range():
    global min_value, max_value, target_number, attempts

    data = request.get_json()

    # Validate presence of required fields
    if not data or "start" not in data or "end" not in data:
        return jsonify({"error": "start and end are required"}), 400

    try:
        start = int(data["start"])
        end = int(data["end"])
    except (ValueError, TypeError):
        return jsonify({"error": "Range must be integers"}), 400

    # Normalize range to handle reversed inputs
    min_val = min(start, end)
    max_val = max(start, end)

    # Enforce minimum difference requirement
    if (max_val - min_val) < 4:
        return jsonify({
            "error": "Minimum range difference must be at least 4"
        }), 400

    # Update game state with new range
    min_value = min_val
    max_value = max_val
    target_number = random.randint(min_value, max_value)
    attempts = 0

    return jsonify({
        "message": f"Range set from {min_value} to {max_value}"
    })


@app.route("/api/guess", methods=["POST"])
def guess():
    global attempts, target_number

    data = request.get_json()

    # Validate guess field
    if not data or "guess" not in data:
        return jsonify({"error": "guess is required"}), 400

    try:
        user_guess = int(data["guess"])
    except (ValueError, TypeError):
        return jsonify({"error": "Guess must be an integer"}), 400

    # Ensure guess lies within current range
    if user_guess < min_value or user_guess > max_value:
        return jsonify({
            "error": f"Guess must be between {min_value} and {max_value}"
        }), 400

    attempts += 1

    if user_guess < target_number:
        return jsonify({"result": "low"})
    elif user_guess > target_number:
        return jsonify({"result": "high"})
    else:
        response = {
            "result": "correct",
            "attempts": attempts
        }

        # Regenerate number after successful guess
        target_number = random.randint(min_value, max_value)
        attempts = 0

        return jsonify(response)


if __name__ == "__main__":
    # Required to expose application when running inside Docker
    app.run(host="0.0.0.0", port=5000)