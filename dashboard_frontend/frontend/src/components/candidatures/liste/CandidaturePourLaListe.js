import './CandidaturePourLaListe.css';
import { useState, useEffect } from 'react';
import { fetchStatuts } from '../../../services/statutService';
import { deleteCandidature, patchCandidature } from '../../../services/candidatureService';
import PrimaryButton from '../../PrimaryButton';
import { useNavigate } from "react-router-dom";



function CandidaturePourLaListe({ data, onRefresh, afficherActions = true }){
    const navigate = useNavigate();
    const {entreprise, adresse, poste, statut: statutInitial, date, lienOffre, notes: notesInitiales} = data;
    
    const [statuts, setStatuts] = useState ([]);
    const [statut, setStatut] = useState(statutInitial);

    function entrepriseFormattee(entreprise) {
        return entreprise.toLowerCase().replace(/\s/g, '') + '.com';
    }

    const logoUrl = `https://logo.clearbit.com/${entrepriseFormattee(entreprise)}`;

    useEffect (() => {
                fetchStatuts()
                    .then((data) => {
                        console.log("Statuts récupérés :", data);
                        setStatuts(data || []);
                    })
                    .catch((err) => console.error(err));
    }, []);

    const handleChangeStatut = async (e) => {
        const nouveauStatut = e.target.value;
        setStatut(nouveauStatut);

        try {
            await patchCandidature({ id: data.id, data: { statut: nouveauStatut }})
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoToCandidatureDetails = () => {
        navigate(`/details-candidature/${data.id}`)
    };

    const handleGoToModifierCandidature = () => {
        navigate(`/modifier-candidature/${data.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Supprimer cette candidature ?");
        if (!confirmDelete) {
            return;
        }

        try {
            await deleteCandidature({id: data.id});
            onRefresh();
        } catch (error) {
            console.error("Erreur lors de la suppresion de la candidature" + error);
        }
    };

    return (
        <div className='candidature-simplifiee'>
            <div className="entreprise">
                <a href={lienOffre} target='_blank' rel='noreferrer'>
                    <div className='logo-entreprise'>
                        <img src={logoUrl} alt={`Logo ${entreprise}`} />
                    </div>
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
            <div className='statut'>
                <select name='statut' id='statut' value={statut} onChange={handleChangeStatut}>
                    {statuts.map((s) => (
                    <option key={s.code} value={s.label}>{s.label}</option>
                        ))}
                </select>
            </div>

            {afficherActions && (
            <div className='boutons'>
                <div className='btn-details'>
                    <PrimaryButton onClick={handleGoToCandidatureDetails}>Détails</PrimaryButton>
                </div>
                <div className='btn-modifier'>
                    <PrimaryButton onClick={handleGoToModifierCandidature}>Modifier</PrimaryButton>
                </div>
                <div className='btn-supprimer'>
                    <PrimaryButton onClick={handleDelete}>Supprimer</PrimaryButton>
                </div>
            </div>
            )}
        </div>
    );
}

export default CandidaturePourLaListe;