import random
from time import sleep


class MemoryBoard:

    def __init__(self):
        self._dims = [0, 0]
        self._cards = []
        self._chosen = []
        self._round = 1
        self._game_in_progress = False

    def restart(self):
        self._dims = [0, 0]
        self._cards = []
        self._chosen = []
        self._round = 1

    def start_game(self, dims):
        self._dims = dims
        self._cards = []
        self._round = 1
        self._game_in_progress = True
        self.create_board()

    def create_board(self):
        type_dist = [2] * (self._dims[0] * self._dims[1] // 2)
        for row in range(self._dims[0]):
            self._cards.append([])
            for col in range(self._dims[1]):
                while True:
                    card_type = random.randrange((self._dims[0] * self._dims[1]) // 2)
                    if type_dist[card_type] > 0:
                        self._cards[row].append(
                            MemoryCard(row, col, card_type, "hidden")
                        )
                        type_dist[card_type] -= 1
                        break

    def choose_card(self, pos):
        if self._cards[pos[0]][pos[1]].state == "hidden" and len(self._chosen) < 2:
            self._cards[pos[0]][pos[1]].set_state("chosen")
            self._chosen.append(pos)
        if len(self._chosen) >= 2:
            self._round += 1
            if (
                self._cards[self._chosen[0][0]][self._chosen[0][1]].card_type
                == self._cards[self._chosen[1][0]][self._chosen[1][1]].card_type
            ):
                for p in self._chosen:
                    self._cards[p[0]][p[1]].set_state("revealed")
            else:
                sleep(2)
                for p in self._chosen:
                    self._cards[p[0]][p[1]].set_state("hidden")
            self._chosen = []
            if self.check_win():
                self._game_in_progress = False

    def check_win(self):
        check_win = True
        for row in self._cards:
            for card in row:
                if card.state != "revealed":
                    check_win = False
        return check_win

    def get_cards(self):
        serialized_cards = []
        for row in range(self._dims[0]):
            serialized_cards.append([])
            for card in self._cards[row]:
                serialized_cards[row].append(card.to_dict())
        return serialized_cards

    @property
    def dims(self):
        return self._dims

    @property
    def round(self):
        return self._round

    @property
    def num_chosen(self):
        return len(self._chosen)

    @property
    def game_in_progress(self):
        return self._game_in_progress


class MemoryCard:
    def __init__(self, row, col, card_type, state):
        self._row = row
        self._col = col
        self._card_type = card_type
        self._state = state

    def set_state(self, new_state):
        self._state = new_state

    def to_dict(self):
        return {
            "row": self._row,
            "col": self._col,
            "card_type": self._card_type,
            "state": self._state,
        }

    @property
    def position(self):
        return (self._row, self._col)

    @property
    def card_type(self):
        return self._card_type

    @property
    def state(self):
        return self._state
