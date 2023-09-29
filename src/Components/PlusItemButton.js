

function PlusItemButton({ addItem })
{
    const cardSize = {height: '8rem'};
    const plusSize = {fontSize: '45px'};

    return <div className={'card btn btn-outline-secondary'} style={cardSize} onClick={addItem}>
        <div className={'card-body text-center d-flex align-items-center justify-content-center '}>
            <span style={plusSize}><i className="bi bi-plus-lg"></i></span>
        </div>
    </div>;
}

export default PlusItemButton;