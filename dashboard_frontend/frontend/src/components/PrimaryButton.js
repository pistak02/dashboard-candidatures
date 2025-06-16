function PrimaryButton({ onClick, children }){
    return (
        <button onClick={onClick} className="btn-formulaire">
            {children}
        </button>
    );
}

export default PrimaryButton;