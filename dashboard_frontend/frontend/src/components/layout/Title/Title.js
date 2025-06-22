import './Title.css';

function Title({children}) {
    return (
        <h2 className="titre-page">{children}</h2>
    );
}

export default Title;