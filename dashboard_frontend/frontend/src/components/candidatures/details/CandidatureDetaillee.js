import './CandidatureDetaillee.css';
import PrimaryButton from '../../PrimaryButton';
import CandidaturePourLaListe from '../liste/CandidaturePourLaListe';
import { useNavigate } from 'react-router-dom';


function CandidatureDetaillee({ candidature }){
    const navigate = useNavigate();

    const handleGoToMenu = () => {
        navigate(`/home`);
    };

    if (!candidature) {
        return (
            <p>Chargement de la candidature...</p>
        );
    };

    

    return (
        <div className='page'>
            <div className="candidature">
                <CandidaturePourLaListe data={candidature} afficherActions={false} />
                <div className='date'>
                    {new Date(candidature.date).toLocaleDateString()}
                </div>
                <div className='notes'>
                    <label htmlFor='notes'>Notes</label>
                    <textarea id='notes' name='notes' rows='5' cols='20' value={candidature.notes} readOnly='readonly'></textarea>
                </div>
            </div>
            <div className='btn-retour-menu'>
                <PrimaryButton onClick={handleGoToMenu}>Retour au menu</PrimaryButton>
            </div>
        </div>
        
    );
}

export default CandidatureDetaillee;