

function Header(props)
{
    return <div className={'navbar-light bg-light'}>
        <div className={'container'}>
            <div className={'navbar-brand navbar-text'}>
                <h1><span>{props.applicationName}</span></h1>
            </div>
        </div>
    </div>;
}

export default Header;