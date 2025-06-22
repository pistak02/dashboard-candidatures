import './CandidaturePourLaListe.css';
import BoutonActions from '../../boutons/BoutonActions';

function CandidaturePourLaListe({ data, afficherActions = true, onRefresh }){
    const {entreprise, adresse, poste, statut, lienOffre } = data;

    return (
        <div className='candidature-simplifiee'>
            <div className="entreprise">
                <a href={lienOffre} target='_blank' rel='noreferrer'>
                    <div className="nom-entreprise">
                        {entreprise}
                    </div>
                    <div className="adresse-entreprise">
                        {adresse}
                    </div>
                </a>
            </div>
           <div className='poste'>
                {poste}
            </div>
            <div className={`statut ${statut.toLowerCase().replace(/\s+/g, '-')}`}> {/* pour avoir des noms de classes 'statut valeur-statut' automatiquement*/} 
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`point ${statut.toLowerCase().replace(/\s+/g, '-')}`}>
                    <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
                {statut}
            </div>
            {afficherActions && (
            <div className='btn-actions-liste'>
                <BoutonActions id={data.id} onRefresh={onRefresh} />
            </div>
            )}
            
        </div>
    );
}

export default CandidaturePourLaListe;