import os
from flask import Flask, send_from_directory, request
from memory_game import MemoryBoard

BUILD_FOLDER = "frontend/build"
GAMES_FILE = "games.json"
game_state = MemoryBoard()


app = Flask(__name__, static_folder=None)


@app.route("/")
def root():
    return send_from_directory(BUILD_FOLDER, "index.html")


@app.route("/try-start", methods=["POST"])
def try_start():
    body = request.json
    game_state.start_game(body["dims"])
    return "ok"


@app.route("/restart", methods=["POST"])
def restart():
    game_state.restart()
    return "ok"


@app.route("/cards")
def get_cards():
    return {
        "cards": game_state.get_cards(),
        "round": game_state.round,
        "progress": game_state.game_in_progress,
    }


@app.route("/dims")
def get_dims():
    return game_state.dims


@app.route("/num-chosen")
def get_num_chosen():
    return [game_state.num_chosen]


@app.route("/choose-card", methods=["POST"])
def chooseCard():
    body = request.json
    game_state.choose_card(body["card"])
    return "ok"


@app.route("/<path:p>")
def serveFile(p):
    return send_from_directory(BUILD_FOLDER, p)


if __name__ == "__main__":
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
