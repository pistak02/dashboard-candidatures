const API_BASE_URL = "http://localhost:8082/api";

export async function fetchCandidatures(){
    const response = await fetch(`${API_BASE_URL}/candidatures`);

    if (!response.ok) {
        throw new Error("Erreur lors du chargement des candidatures");
    }

    return await response.json();
}