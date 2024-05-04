# Garfield Memory Game

By Brooke Wager and Kelsey McClung

## Description

We know you know the memory game, and we hope you know Garfield by now, so we
present... The Garfield Memory Game! This memory game can be hosted on a local
server, so you can invite all your friends (including, but not limited to, Jon,
Odie, Nermal, and Pooky).

### How to Play

The memory board consists of multiple pairs of cards. A pair displays the same
shape and color when flipped over. Begin the game by choosing a board size (the
larger the board, the harder), then click on a card to turn it over. You can
have 2 cards clicked at a time. If their symbol and color match, they remain
revealed, but if they are different, they flip back over after a couple seconds.
The goal of the game is to reveal all of the cards in the fewest number of
moves.

### Multiplayer

Our game supports multiplayer. Just enter the URL provided by Flask onto a
browser on any device on a local network. The goal of the multiplayer game is to
coordinate with friends to solve the puzzle. For an added challenge, try to
complete the game without speaking!

## Challenges We Encountered

While writing the code for this program, we ran into many hurdles we had to
overcome. I think our biggest mistake was not writing out the architecture and
pseudo-code before starting. We copied over code we had previously written from
a purely frontend memory game, and jumped straight into integrating backend.
This process worked, but it became hard to keep track of what changes affected
what later on in the project. This made debugging very difficult because we
would change something in the frontend and forget to edit the request in the
backend as well.

Another difficulty was just figuring out syntax. Neither of us had much
experience in integrating backend and frontend, so we had to look up what
functions we should use. Some of these were difficult to find (like how to
redirect to a url that is dynamically created), which took a lot of time and
frustration to figure out.

Finally, we weren't clear on what we wanted for the final vision of the project.
We knew we wanted a memory game that could be locally hosted for multiplayer
use, but did we want a turn based system? If it was turn based, how many users
would be allowed to play? Should there be different lobbies? Well, as it turns
out, we tried a lot of those methods and they didn't quite work out the way we
wanted. We decided on the current "free-for-all" version to focus on
collaboration, problem-solving, and communication between users. We think this
will provide a more wacky and fun play style that will create joy and laughter
amongst friends. This hypotheses was proven correct during our presentation,
which delighted the entire class with the chaos that ensued.

## Bundle React frontend + Flask backend

To install with pipenv:

1. Run `pipenv install` from the root folder. This requires having
   - this requires python 3 installed on your system
2. Go into the `frontend` folder
   - that's where the React frontend is stored
3. Run `npm install` to install the packages needed by the frontend
4. Run `npm run build` to create the frontend bundle
5. Go back to the root folder
6. Run `pipenv shell` to enter the virtual environment containing `flask`
7. Run `python app.py` to start the web application server.
8. Navigate to `http://localhost:5000`

To install without pipenv:

1. Run `pip3 install flask` to install flask globally
2. Go into the `frontend` folder
   - that's where the React frontend is stored
3. Run `npm install` to install the packages needed by the frontend
4. Run `npm run build` to create the frontend bundle
5. Go back to the root folder
6. Run `python app.py` to start the web application server.
7. Navigate to `http://localhost:5000`

Two things to note:

- the front end is a completely separate codebase, and lives in folder
  `frontend`
- every time you modify the frontend code, you need to re-build it in order to
  see it through web application server.
