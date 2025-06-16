import FormCandidature from "../components/formulaire-candidature/FormCandidature";
import PrimaryButton from "../components/PrimaryButton";
import { createCandidature } from "../services/candidatureService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NouvelleCandidature(){

    const navigate=useNavigate();

    const [formData, setFormData] = useState ({
        entreprise: '',
        poste: '',
        statut: '',
        adresse: '',
        lienOffre: '',
        notes: '',
        date: new Date().toISOString(),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("FormData envoyé :", formData);

        try {
            await createCandidature(formData);
            navigate('/accueil');
        } catch (error) {
            console.error("Erreur lors de l'ajout de la candidature :", error);
        }
    };

    return (
        <div className="nouvelle-candidature">
            <h1>Nouvelle Candidature</h1>

            <div className="formulaire">
                <FormCandidature formData={formData} setFormData={setFormData} />
                <PrimaryButton onClick={handleSubmit}>Ajouter</PrimaryButton>
            </div>
        </div>
                    
    )
}

export default NouvelleCandidature;