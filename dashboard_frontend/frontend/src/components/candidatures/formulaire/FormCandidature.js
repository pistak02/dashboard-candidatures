import './FormCandidature.css';
import { useState, useEffect } from 'react';
import { fetchStatuts } from '../../../services/statutService';

function FormCandidature( { formData, setFormData }){
    const [statuts, setStatuts] = useState ([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect (() => {
        fetchStatuts()
            .then((data) => {
                console.log("Statuts récupérés :", data);
                setStatuts(data || []);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='form-candidature'>
            <div className='champs'>
                <div className='entreprise'>
                    <label htmlFor='entreprise'>Nom de l'entreprise</label>
                    <input type='text' name='entreprise' id='entreprise' value={formData.entreprise} onChange={handleChange} required></input>
                </div>
                <div className='poste'>
                    <label htmlFor='poste'>Intitulé du poste</label>
                    <input type='text' name='poste' id='poste' value={formData.poste} onChange={handleChange} required></input>
                </div>
                <div className='adresse'>
                    <label htmlFor='adresse'>Adresse</label>
                    <input type='text' name='adresse' id='adresse' value={formData.adresse} onChange={handleChange}></input>
                </div>
                <div className='statut.form'>
                    <label htmlFor='statut'>Statut</label>
                    <select name='statut' id='statut' value={formData.statut} onChange={handleChange} required>
                        <option value="">-- Sélectionnez un statut --</option>
                        {statuts.map((s) => (
                            <option key={s.code} value={s.label}>{s.label}</option>
                        ))}
                    </select>
                </div>
                <div className='lien'>
                    <label htmlFor='lien'>Lien de l'annonce</label>
                    <input type='text' name='lienOffre' id='lien' value={formData.lienOffre} onChange={handleChange}></input>
                </div>
                <div className='notes'>
                    <label htmlFor='notes'>Notes</label>
                    <textarea name='notes' id='notes' value={formData.notes} onChange={handleChange}></textarea>
                </div>
            </div> 
        </div>
    );
}

export default FormCandidature;