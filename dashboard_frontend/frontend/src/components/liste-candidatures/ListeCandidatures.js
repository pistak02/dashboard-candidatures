import './ListeCandidatures.css';
import Candidature from './Candidature';
import AjouterCandidature from './AjouterCandidature';
import { useEffect, useState } from 'react';
import { fetchCandidatures } from '../../services/candidatureService';

function ListeCandidatures(){
    const [candidatures, setCandidatures] = useState([]);

    useEffect (() => {
        fetchCandidatures()
            .then((data) => {
                    setCandidatures(data.member || []);
            })
            .catch((err) => console.error(err));
        }, []);

        

    return (
        <div className='liste-candidatures'>
            <div className='candidatures'>
                {candidatures.map((candidature) => (
                    <Candidature key={candidature.id} data={candidature} />
                ))}
            </div>
            <div className='nouvelle-cand'>
                <AjouterCandidature></AjouterCandidature>
            </div>
        </div>
    );
}

export default ListeCandidatures;