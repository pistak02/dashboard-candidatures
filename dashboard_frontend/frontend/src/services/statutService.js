const API_BASE_URL = "http://localhost:8082/api";

export async function fetchStatuts(){
    const response = await fetch(`${API_BASE_URL}/statuts`);

    if (!response.ok) {
        throw new Error("Erreur lors du chargement des statuts");
    }

    return await response.json();
}