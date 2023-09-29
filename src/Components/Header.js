
function Header({ applicationName })
{
    return <div className={'navbar-light bg-light'}>
        <div className={'container'}>
            <div className={'navbar-brand navbar-text'}>
                <h1><span>{applicationName}</span></h1>
            </div>
        </div>
    </div>;
}

export default Header;