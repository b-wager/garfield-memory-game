function Board({cards, setCards, setRound, pic, shapes, win, setWin}) {
    fetch("cards")
        .then(resp => resp.json())
        .then(j => {
            if (!j["progress"] && !win) {
                setTimeout(function () {setCards(j["cards"]);}, 50);
                setRound(j["round"]);
                setWin(true);
            } else if (!win) {
                setTimeout(function () {setCards(j["cards"]);}, 50);
                setRound(j["round"]);
            }
        });

    const mkRow = (card, i) => {
        return (
            <Card key={i} card={card} pic={pic} shapes={shapes}>
            </Card>
        );
    };
    const mkBoard = (row, i) => {
        return (
            <div key={i} className="row">
                {row.map(mkRow)}
            </div>
        );
    };

    return (
        <div id="board">
            {cards.map(mkBoard)}
        </div>
    );
}

function Card({card, pic, shapes}) {
    const chooseCard = () => {
        if (card["state"] === "hidden") {
            let num_chosen = 0;
            fetch("num-chosen")
                .then(resp => resp.json())
                .then(j => {
                    num_chosen = j[0];
                    if (num_chosen < 2) {
                        fetch("choose-card", {
                            method: 'POST',
                            headers: {
                                "Content-Type": 'application/json'
                            },
                            body: JSON.stringify({card: [card["row"], card["col"]]})
                        });
                    }
                });
        };
    };
    if (card["state"] === "hidden") {
        return (
            <svg id={"card-" + card["index"]} className={card["state"] + "-card"} onClick={chooseCard}>
                <image href={pic} />
            </svg>
        );
    } else if (shapes[card["card_type"]][0] === "circle") {
        return (
            <svg id={"card-" + card["index"]} className={card["state"] + "-card"} onClick={chooseCard}>
                <circle r="32" cx="64" cy="96"
                    fill={shapes[card["card_type"]][1]}></circle>
            </svg>
        );
    } else if (shapes[card["card_type"]][0] === "rect") {
        return (
            <svg id={"card-" + card["index"]} className={card["state"] + "-card"} onClick={chooseCard}>
                <rect width="64" height="64" x="32" y="64"
                    fill={shapes[card["card_type"]][1]}></rect>
            </svg>
        );
    } else if (shapes[card["card_type"]][0] === "diamond") {
        return (
            <svg id={"card-" + card["index"]} className={card["state"] + "-card"} onClick={chooseCard}>
                <polygon points="24 96,64 136,104 96,64 56"
                    fill={shapes[card["card_type"]][1]}></polygon>
            </svg>
        );
    }
}

export default Board;
