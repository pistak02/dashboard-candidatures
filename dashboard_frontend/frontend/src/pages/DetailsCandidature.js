import CandidatureDetaillee from "../components/candidatures/details/CandidatureDetaillee";
import { useParams } from "react-router-dom";
import { getCandidatureById } from "../services/candidatureService";
import { useState, useEffect } from "react";

function DetailsCandidature(){
    const { id } = useParams();

    const [candidature, setCandidature] = useState(null);

    useEffect(() => {
    const fetchCandidature = async () => {
        try {
            const data = await getCandidatureById({ id });
            setCandidature(data);
        } catch (error) {
            console.error("Erreur lors du chargement de la candidature :", error);
        }
    };

  fetchCandidature();
}, [id]);

    return (
        <div>
            <h1>DétailsCandidature</h1>
            <CandidatureDetaillee candidature={candidature} />
        </div>
    )
}

export default DetailsCandidature;