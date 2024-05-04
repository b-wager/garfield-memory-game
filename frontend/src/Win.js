function Win({win, setWin, dims}) {

  const handleClick = () => {
    setWin(false);
    fetch("try-start", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({dims: dims})
    });
  };

  if (win) {
    return (
      <div id='win-box'><p>Congratulations!
      </p>
        <div className='play-again' onClick={handleClick}>
          <p>Play Again</p>
        </div>
      </div>);
  } else {
    return (<div></div>);
  }
}

export default Win;
