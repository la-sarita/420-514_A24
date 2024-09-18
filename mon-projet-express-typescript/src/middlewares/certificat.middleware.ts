import fs from 'fs';

export function loadCertificate() {
    let certificatOptions;
    try {
        certificatOptions = {
            key: fs.readFileSync('key.pem'),
            cert: fs.readFileSync('cert.pem')
        };
    } catch (error) {
        console.error("Erreur lors du chargement des certificats SSL :", error);
        process.exit(1); // Arrête l'application si les certificats ne sont pas valides
    }
    return certificatOptions;
}