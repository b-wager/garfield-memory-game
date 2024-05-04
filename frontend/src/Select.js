function Select({setDims}) {
    console.log('Rendering selection screen');

    const chooseDims = (dims) => {
        fetch("try-start", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({dims: dims})
        })
            .then(() => {
                fetch("dims")
                    .then(resp => resp.json())
                    .then(j => setDims(j));
            });
    };

    return (
        <div>
            <p className="selectText">Select a board size:</p>
            <div className="selectBox">
                <div className='select' id='34' onClick={() => chooseDims([3, 4])}>
                    <p>3x4</p>
                </div>
                <div className='select' id='45' onClick={() => chooseDims([4, 5])}>
                    <p>4x5</p>
                </div>
                <div className='select' id='56' onClick={() => chooseDims([5, 6])}>
                    <p>5x6</p>
                </div>
            </div>
        </div>


    );

}

export default Select;
