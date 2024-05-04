function CardStyle({images, cardStyle, setCardStyle}) {
    const mkBacks = (back, i) => {
        return (
            <Back key={i} image={back} cardStyle={cardStyle}
                setCardStyle={setCardStyle}>
            </Back>
        );
    };
    return (
        <div id="card-styles" className="row">
            {images.map(mkBacks)}
        </div>
    );

}

function Back({image, cardStyle, setCardStyle}) {
    const changeCardBack = () => {
        if (image !== cardStyle) {
            setCardStyle(image);
        };
    };

    if (image === cardStyle) {
        return (
            <svg className={"card-back-chosen"} onClick={changeCardBack}>
                <image href={image} />
            </svg>
        );
    } else {
        return (
            <svg className={"card-back"} onClick={changeCardBack}>
                <image href={image} />
            </svg>
        );
    }
}

export default CardStyle;
