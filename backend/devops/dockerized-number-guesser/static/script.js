let gameOver = false;

function setRange() {
    fetch("/api/set-range", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            start: document.getElementById("start").value,
            end: document.getElementById("end").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText =
            data.message || data.error;

        document.getElementById("history").innerHTML = "";
        gameOver = false;
    });
}

function submitGuess() {
    if (gameOver) return;

    const guessValue = document.getElementById("guess").value;

    fetch("/api/guess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guess: guessValue })
    })
    .then(res => res.json())
    .then(data => {
        const message = document.getElementById("message");
        const history = document.getElementById("history");

        if (data.result) {
            const li = document.createElement("li");
            li.textContent = guessValue + " → " + data.result;
            history.appendChild(li);

            if (data.result === "correct") {
                message.textContent = "Correct! Attempts: " + data.attempts;
                gameOver = true;
            } else {
                message.textContent = data.result;
            }
        } else {
            message.textContent = data.error;
        }

        document.getElementById("guess").value = "";
    });
}

function resetGame() {
    document.getElementById("history").innerHTML = "";
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
    gameOver = false;
}