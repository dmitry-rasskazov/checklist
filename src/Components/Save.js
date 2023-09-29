

function Save({ callback })
{
    return <button type="button" className="btn btn-outline-success btn-sm" onClick={callback}>
        <i className={'bi bi-check-lg'}></i>
    </button>;
}

export default Save;