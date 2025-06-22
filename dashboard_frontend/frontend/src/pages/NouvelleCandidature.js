import FormCandidature from "../components/candidatures/formulaire/FormCandidature";
import PrimaryButton from "../components/boutons/PrimaryButton";
import { createCandidature } from "../services/candidatureService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from './../components/layout/Title/Title'; 

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
        try {
            await createCandidature(formData);
            navigate('/');
        } catch (error) {
            console.error("Erreur lors de l'ajout de la candidature :", error);
        }
    };

    return (
        <div className="nouvelle-candidature">
            <Title>Nouvelle Candidature</Title>
            <form onSubmit={handleSubmit}>
                <FormCandidature formData={formData} setFormData={setFormData} />
                <div className="form-submit">
                    <PrimaryButton type="submit">Ajouter</PrimaryButton>
                </div>
            </form>
        </div>
                    
    )
}

export default NouvelleCandidature;