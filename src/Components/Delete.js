

function Delete({ callback })
{
    return <button type="button" className="btn btn-outline-danger btn-sm" onClick={callback}>
        <i className={'bi bi-x-lg'}></i>
    </button>;
}

export default Delete;