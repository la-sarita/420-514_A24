import httpApp from './app';  // Importer l'application configurée

const PORT = process.env.PORT || 3000;

// Démarrer le serveur
httpApp.listen(PORT, () => {
    console.log(`Serveur en écoute sur <http://localhost>:${PORT}`);
});