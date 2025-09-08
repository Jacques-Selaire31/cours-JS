export async function WelcomeService() {
    try {
        const chuckJokes = await fetch("https://api.chucknorris.io/jokes/random");
        if (!chuckJokes.ok || chuckJokes.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", chuckJokes.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }
        const chuckData = await chuckJokes.json();
        const chuckValue = chuckData.value;
        console.log(chuckValue);
        return chuckValue;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}