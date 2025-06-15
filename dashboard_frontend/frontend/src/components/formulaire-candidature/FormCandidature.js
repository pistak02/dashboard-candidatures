import { useNavigate } from 'react-router-dom';
import './FormCandidature.css';

function FormCandidature(){
    const navigate=useNavigate();

    const handleClick = () => {
        navigate('/accueil');
    };

    return (
        

        <div className='form-candidature'>
            <div className='champs'>
                <div className='entreprise'>
                    <label htmlFor='entreprise'>Nom de l'entreprise</label>
                    <input type='text' name='entreprise' id='entreprise'></input>
                </div>
                <div className='poste'>
                    <label htmlFor='poste'>Intitulé du poste</label>
                    <input type='text' name='poste' id='poste'></input>
                </div>
                <div className='adresse'>
                    <label htmlFor='adresse'>Adresse</label>
                    <input type='text' name='adresse' id='adresse'></input>
                </div>
                <div className='statut'>
                    <label htmlFor='statut'>Statut</label>
                    <select name='statut' id='statut'></select>
                </div>
                <div className='lien'>
                    <label htmlFor='lien'>Lien de l'annonce</label>
                    <input type='text' name='lien' id='lien'></input>
                </div>
            </div>
            
            <div className='btn-valider'>
                <button onClick={handleClick}> 
                    Ajouter
                </button>
            </div>
        </div>
    );
}

export default FormCandidature;