import './ListeCandidatures.css';
import CandidaturePourLaListe from './CandidaturePourLaListe';
import AjouterCandidature from '../ajouter/AjouterCandidature';
import { useEffect, useState } from 'react';
import { fetchCandidatures } from '../../../services/candidatureService';
import { data } from 'react-router-dom';

function ListeCandidatures(){
    const [candidatures, setCandidatures] = useState([]);

    useEffect (() => {
        fetchCandidatures()
            .then((data) => {
                setCandidatures(data.member || []);
            })
            .catch((err) => console.error(err));
    }, []);

    
    const handleRefresh = async () => {
        try {
            const data = await fetchCandidatures();
            setCandidatures(data.member || []);
        } catch (error) {
            console.error("Erreur lors du refresh:", error);
        }
    };
        

    return (
        <div className='liste-candidatures'>
            <div className='candidatures'>
                {candidatures.map((candidature) => (
                    <CandidaturePourLaListe key={candidature.id} data={candidature} onRefresh={handleRefresh} />
                ))}
            </div>
            <div className='nouvelle-cand'>
                <AjouterCandidature></AjouterCandidature>
            </div>
        </div>
    );
}

export default ListeCandidatures;