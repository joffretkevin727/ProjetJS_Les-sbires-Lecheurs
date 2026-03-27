const express = require('express');
const path = require('path');
const app = express();
const port = 6969;

// On rend TOUT le dossier actuel accessible (HTML, CSS, JS, Images)
app.use(express.static(__dirname));

// Route par défaut qui envoie ton fichier HTML
app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'template/product.html'));
});

app.listen(port, () => {
    console.log(`Site Poro Corp lancé sur http://localhost:${port}/product`);
});