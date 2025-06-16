const API_BASE_URL = "http://localhost:8082/api";

export async function fetchCandidatures(){
    const response = await fetch(`${API_BASE_URL}/candidatures`);

    if (!response.ok) {
        throw new Error("Erreur lors du chargement des candidatures");
    }

    return await response.json();
}

export async function getCandidatureById({ id }){
    const response = await fetch(`${API_BASE_URL}/candidatures/${id}`);

    if (!response.ok) {
        throw new Error("Erreur lors du chargement de la candidature");
    }

    return await response.json();
}

export async function createCandidature(candidature){
    console.log("Candidature envoyée à l'API:", candidature);

    const response = await fetch(`${API_BASE_URL}/candidatures`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json',
        },
        body: JSON.stringify(candidature),
    });

    if (!response.ok) {
        throw new Error("Erreur lors de la création de la candidature");
    }

    return await response.json();
}

export async function updateCandidature({ id ,candidature }) {
    const response = await fetch(`${API_BASE_URL}/candidatures/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify(candidature),
  });

    if (!response.ok) {
        throw new Error("Erreur lors de la modification de la candidature");
    }

    return await response.json();
}

export async function deleteCandidature({ id }){
    const response = await fetch(`${API_BASE_URL}/candidatures/${id}`, { method : 'DELETE', });

    if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la candidature");
    }

    return true;
}