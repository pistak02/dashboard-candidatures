import './PrimaryButton.css';

function PrimaryButton({ onClick, children, type = "button", disabled = false, className="" }){
    return (
        <button onClick={onClick} type={type} disabled={disabled} className={className}>
            {children}
        </button>
    );
}

export default PrimaryButton;