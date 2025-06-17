import './PrimaryButton.css';

function PrimaryButton({ onClick, children }){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default PrimaryButton;