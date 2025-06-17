import { useNavigate } from 'react-router-dom';
import './AjouterCandidature.css';

function AjouterCandidature(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/nouvelle-candidature");
    };
    
    return (
        <button onClick={handleClick}>
            Ajouter
        </button>
    );
}

export default AjouterCandidature;