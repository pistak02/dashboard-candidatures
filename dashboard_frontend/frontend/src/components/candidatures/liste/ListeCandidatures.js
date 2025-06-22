import './ListeCandidatures.css';
import CandidaturePourLaListe from './CandidaturePourLaListe';
import { useEffect, useState } from 'react';
import { fetchCandidatures } from '../../../services/candidatureService';

function ListeCandidatures(){
    const [candidatures, setCandidatures] = useState([]);

    useEffect (() => {
        fetchCandidatures()
            .then((data) => {
                setCandidatures(data.member || []);
            })
            .catch((err) => console.error(err));
    }, []);

    const refreshCandidatures = async () => {
        const data = await fetchCandidatures();
        setCandidatures(data.member || []);
    };

    return (
        <div className='liste-candidatures'>
            <div className='candidatures'>
                <div className='titres-sections'>
                    <div className='titre'>
                        Entreprise
                    </div>
                    <div className='titre'>
                        Poste
                    </div>
                    <div className='titre'>
                        Statut
                    </div>
                    <div className='titre'>
                        Actions
                    </div>
                </div>
                {candidatures.map((candidature) => (
                    <CandidaturePourLaListe key={candidature.id} data={candidature} onRefresh={refreshCandidatures} />
                ))}
            </div>
        </div>
    );
}

export default ListeCandidatures;