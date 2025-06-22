import './CandidatureDetaillee.css';
import CandidaturePourLaListe from '../liste/CandidaturePourLaListe';
import Title from '../../layout/Title/Title';
import PrimaryButton from '../../boutons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

function CandidatureDetaillee({ candidature }){
    const navigate = useNavigate();
    
    if (!candidature) {
        return (
            <p>Chargement de la candidature...</p>
        );
    };

    const handleGoToModifierCandidature = () => {
        navigate(`/modifier-candidature/${candidature.id}`)
    };

    return (
        <div className='page'>
            <Title>{candidature.entreprise} - {candidature.poste}</Title>
            <div className="candidature">
                <CandidaturePourLaListe data={candidature} afficherActions={false} />
                <div className='bas'>
                    <div className='date'>
                        Le {new Date(candidature.date).toLocaleDateString()}
                    </div>
                    <div className='notes-details'>
                        <label htmlFor='notes'></label>
                        <textarea id='notes' name='notes' rows='5' cols='20' value={candidature.notes} readOnly='readonly'></textarea>
                    </div>
                </div>
            </div>
            <div className='btn-modif-details'>
                <PrimaryButton onClick={handleGoToModifierCandidature}>Modifier</PrimaryButton>
            </div>
            
        </div>
        
    );
}

export default CandidatureDetaillee;