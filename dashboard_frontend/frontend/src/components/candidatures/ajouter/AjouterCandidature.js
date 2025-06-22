import { useNavigate } from 'react-router-dom';
import './AjouterCandidature.css';
import PrimaryButton from '../../boutons/PrimaryButton';

function AjouterCandidature(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/nouvelle-candidature");
    };
    
    return (
        <PrimaryButton onClick={handleClick}>
            Ajouter
        </PrimaryButton>
    );
}

export default AjouterCandidature;