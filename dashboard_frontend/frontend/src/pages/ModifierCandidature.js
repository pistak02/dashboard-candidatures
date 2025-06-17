import { patchCandidature } from "../services/candidatureService";
import { data, useNavigate, useParams } from "react-router-dom";
import { getCandidatureById } from "../services/candidatureService";
import { useState, useEffect } from "react";
import FormCandidature from "../components/candidatures/formulaire/FormCandidature";
import PrimaryButton from "../components/PrimaryButton";

function ModifierCandidature(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidature = async () => {
            try {
                const data = await getCandidatureById({ id });
                setFormData(data);
            } catch (error) {
                console.error("Erreur lors du chargement de la candidature :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidature();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { entreprise, poste, statut, lienOffre, adresse, notes, date } = formData;
        const nouvelleData = { entreprise, poste, statut, lienOffre, adresse, notes, date };

        try {
            await patchCandidature({ id, data: nouvelleData });
            navigate('/accueil');
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la candidature :", error);
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (!formData) return <p>Aucune candidature trouvée</p>;

    return (
        <div className="modifier-candidature">
            <h1>Modifier la Candidature</h1>
            <form onSubmit={handleSubmit}>
                <FormCandidature formData={formData} setFormData={setFormData} />
                <PrimaryButton type="submit">Enregistrer</PrimaryButton>
            </form>
        </div>
    )
}

export default ModifierCandidature;