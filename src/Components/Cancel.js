

function Cancel({ callback })
{
    return <button type="button" className="btn btn-outline-secondary btn-sm" onClick={callback}>
        <i className={'bi bi-box-arrow-left'}></i>
    </button>;
}

export default Cancel;